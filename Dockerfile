# Use Node.js LTS as the base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all files
COPY . .

# Build the Next.js application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner

# Set environment to production
ENV NODE_ENV=production

# Create a non-root user and group
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Set the correct permission for the app directory
RUN mkdir -p /app/.next/cache \
    && chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Copy built app
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
