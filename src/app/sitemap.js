// src/app/sitemap.js

// You use the `export default` format inside the App Router for static files like sitemaps

export default async function sitemap() {
  const baseUrl = 'https://www.avnmusic.shop';

  return [
    // Homepage (Priority 1.0, highest)
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1.0,
    },
    // Services Page (Priority 0.9, high)
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },
    // Contact Page (Priority 0.8)
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // About Page (Priority 0.8)
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // Legal Pages (Priority 0.5)
    {
      url: `${baseUrl}/pnp`, // Privacy Policy
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tnc`, // Terms and Conditions
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}