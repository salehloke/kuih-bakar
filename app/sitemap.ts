import { MetadataRoute } from 'next';
import { siteConfig } from './seo-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Define all routes in your application
  const routes = [
    '',
    '/kuih-bakar',
    '/contact',
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly',
      priority: route === '' ? 1 : 0.8,
    })),
  ];
}
