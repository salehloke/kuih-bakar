# Kuih Bakar Malaysian Delights - Next.js Project

![Kuih Bakar Malaysian Delights](https://kuih-bakar.com/images/kuih-bakar-header.png)

A Next.js website for Kuih Bakar Malaysian Delights, showcasing authentic Malaysian desserts and dishes.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Development Environment](#development-environment)
  - [Docker Environment](#docker-environment)
- [Project Structure](#project-structure)
- [SEO Features](#seo-features)
- [Maintenance Guide](#maintenance-guide)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

This project is a Next.js application for Kuih Bakar Malaysian Delights, featuring:

- Responsive design with Tailwind CSS
- SEO optimization with Next.js metadata API
- Docker containerization
- Structured data for rich search results
- PWA support with manifest

## Getting Started

### Development Environment

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nextjs-kuih-bakar.git
cd nextjs-kuih-bakar
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Environment

1. **Build and start the Docker container**

```bash
docker compose up -d
```

2. **View logs**

```bash
docker compose logs -f
```

3. **Stop the container**

```bash
docker compose down
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── contact/            # Contact page
│   ├── kuih-bakar/         # Kuih Bakar product page
│   ├── seo-config.ts       # SEO configuration
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── manifest.ts         # PWA manifest
│   ├── sitemap.ts          # Sitemap generator
│   ├── robots.ts           # Robots.txt generator
│   ├── icon.tsx            # Dynamic favicon
│   └── opengraph-image.tsx # Dynamic OG image
├── public/                 # Static assets
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
└── next.config.ts          # Next.js configuration
```

## SEO Features

The project includes comprehensive SEO features:

### Metadata

- **Centralized Configuration**: `app/seo-config.ts` contains all SEO settings
- **Page-Specific Metadata**: Each page has optimized metadata
- **Dynamic Metadata**: Title templates, descriptions, and keywords

### Structured Data

- **Organization Data**: JSON-LD for the business on the home page
- **Product Data**: Rich product information for Kuih Bakar
- **LocalBusiness Data**: Contact and location information

### Technical SEO

- **Sitemap**: Automatic sitemap.xml generation via `app/sitemap.ts`
- **Robots.txt**: Search engine instructions via `app/robots.ts`
- **Open Graph Images**: Dynamic images for social sharing
- **Analytics**: Google Analytics integration

## Maintenance Guide

### Updating Content

1. **Home Page**: Edit `app/page.tsx` to update the main content
2. **Product Page**: Edit `app/kuih-bakar/page.tsx` for product details
3. **Contact Page**: Edit `app/contact/page.tsx` for contact information

### Updating SEO

1. **Global SEO Settings**: Edit `app/seo-config.ts` to update site-wide SEO
2. **Page Metadata**: Update the `metadata` export in each page file
3. **Structured Data**: Modify the `structuredData` object in relevant pages

### Adding New Pages

1. Create a new directory in the `app` folder (e.g., `app/new-page/`)
2. Add a `page.tsx` file with the following structure:

```tsx
import MainLayout from "../components/MainLayout";
import { generateMetadata } from "../seo-config";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Page Title",
  description: "Page description for SEO",
  path: "/new-page",
});

export default function NewPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        {/* Page content */}
      </div>
    </MainLayout>
  );
}
```

### Updating Images

1. Add new images to the `public/images/` directory
2. Reference them in your components using:

```tsx
import Image from "next/image";

<Image 
  src="/images/your-image.png" 
  alt="Descriptive alt text for SEO" 
  width={800}
  height={600}
/>
```

### Docker Updates

1. **Modifying Dockerfile**: Edit `Dockerfile` if you need to change the build process
2. **Updating Docker Compose**: Edit `docker-compose.yml` for container configuration
3. **Rebuilding after changes**: Run `docker compose up -d --build`

## Deployment

### Vercel Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables if needed
4. Deploy

### Custom Server Deployment

For deployment on your own server:

1. Build the Docker image

```bash
docker build -t kuih-bakar-app .
```

2. Run the container

```bash
docker run -p 3000:3000 kuih-bakar-app
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ using [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).
