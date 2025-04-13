# Deploying Kuih Bakar Malaysian Delights to a Debian Server

This guide provides step-by-step instructions for deploying the Kuih Bakar Malaysian Delights Next.js application to a Debian server using SSH.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Install Docker and Docker Compose](#step-1-install-docker-and-docker-compose)
- [Step 2: Deploy the Application](#step-2-deploy-the-application)
- [Step 3: Configure Nginx as a Reverse Proxy](#step-3-configure-nginx-as-a-reverse-proxy)
- [Step 4: Set Up SSL with Certbot](#step-4-set-up-ssl-with-certbot)
- [Step 5: Updating the Application](#step-5-updating-the-application)
- [Step 6: Monitoring and Maintenance](#step-6-monitoring-and-maintenance)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have:

- A Debian server with SSH access
- Root or sudo privileges on the server
- A domain name pointed to your server (for production deployments)
- Git installed on your local machine

## Step 1: Install Docker and Docker Compose

Connect to your Debian server via SSH:

```bash
ssh username@your-server-ip
```

### Install Docker

```bash
# Update package lists
sudo apt update

# Install required packages
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common gnupg

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package lists again
sudo apt update

# Install Docker
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Add your user to the docker group to run Docker without sudo
sudo usermod -aG docker $USER

# Apply group changes (or log out and back in)
newgrp docker
```

### Install Docker Compose

```bash
# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version
```

## Step 2: Deploy the Application

You have two options for deploying the application:

### Option 1: Deploy using Git (Recommended)

This method is recommended for development environments and for easier updates:

```bash
# Create a directory for the application
mkdir -p ~/apps/kuih-bakar
cd ~/apps/kuih-bakar

# Clone the repository (replace with your actual repository URL)
git clone https://github.com/yourusername/nextjs-kuih-bakar.git .

# Build and start the containers
docker-compose up -d --build
```

### Option 2: Deploy using SCP

This method is useful when you want to deploy from your local development environment:

```bash
# On your local machine, create a deployment package
# (Run this command from your local project directory)
tar -czf kuih-bakar-deploy.tar.gz --exclude=node_modules --exclude=.next .

# Upload to server
scp kuih-bakar-deploy.tar.gz username@your-server-ip:~/

# On the server
mkdir -p ~/apps/kuih-bakar
cd ~/apps/kuih-bakar
tar -xzf ~/kuih-bakar-deploy.tar.gz
rm ~/kuih-bakar-deploy.tar.gz  # Clean up the tarball

# Build and start the containers
docker-compose up -d --build
```

After deployment, your application should be running at `http://your-server-ip:3000`

## Step 3: Configure Nginx as a Reverse Proxy

For production deployments, it's recommended to use Nginx as a reverse proxy to handle SSL and domain routing:

```bash
# Install Nginx
sudo apt install -y nginx

# Create Nginx configuration file
sudo nano /etc/nginx/sites-available/kuih-bakar
```

Add the following configuration (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and restart Nginx:

```bash
# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/kuih-bakar /etc/nginx/sites-enabled/

# Remove default site if needed
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

## Step 4: Set Up SSL with Certbot

Secure your site with a free SSL certificate from Let's Encrypt:

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain and configure SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts to complete the setup
# Choose to redirect HTTP traffic to HTTPS when prompted
```

Certbot will automatically update your Nginx configuration to use SSL. Your site should now be accessible at `https://yourdomain.com`.

## Step 5: Updating the Application

To update your application when changes are made:

```bash
cd ~/apps/kuih-bakar

# If using Git deployment
git pull

# Rebuild and restart the containers
docker-compose down
docker-compose up -d --build
```

For non-Git deployments, repeat the SCP deployment process with the updated files.

## Step 6: Monitoring and Maintenance

### Useful Docker Commands

```bash
# View container logs
docker-compose logs -f

# Check container status
docker-compose ps

# View resource usage
docker stats

# Restart containers
docker-compose restart
```

### Setting Up Automatic Security Updates

It's recommended to set up automatic security updates for your Debian server:

```bash
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### Backup Strategy

Regularly back up your application data:

```bash
# Create a backup directory
mkdir -p ~/backups

# Backup application files (excluding node_modules and .next)
tar -czf ~/backups/kuih-bakar-backup-$(date +%Y%m%d).tar.gz -C ~/apps/kuih-bakar --exclude=node_modules --exclude=.next .

# Optional: Copy backups to a remote location
scp ~/backups/kuih-bakar-backup-*.tar.gz user@backup-server:/path/to/backups/
```

## Troubleshooting

### Common Issues and Solutions

- **Container won't start**: 
  - Check logs with `docker-compose logs`
  - Verify that all required environment variables are set

- **Nginx proxy issues**: 
  - Verify Nginx configuration with `sudo nginx -t`
  - Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`

- **Permission problems**: 
  - Ensure proper file ownership with `sudo chown -R $USER:$USER ~/apps/kuih-bakar`
  - Check Docker permissions: `ls -la /var/run/docker.sock`

- **Port conflicts**: 
  - Make sure port 3000 isn't being used by another service
  - Check with `sudo netstat -tulpn | grep 3000`

- **SSL certificate issues**:
  - Renew certificates manually: `sudo certbot renew`
  - Debug certificate problems: `sudo certbot certificates`

### Getting Help

If you encounter issues not covered in this guide, consult:

- Docker documentation: https://docs.docker.com/
- Next.js deployment documentation: https://nextjs.org/docs/deployment
- Nginx documentation: https://nginx.org/en/docs/

---

This deployment guide was last updated on April 13, 2025.
