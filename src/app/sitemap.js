// src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = 'https://www.avnmusic.shop';
  const currentDate = new Date().toISOString(); // Use current date for last modified time

  return [
    // --- 1. CORE PAGES (Highest Priority: 1.0 - 0.9) ---
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      priority: 1.0, // Homepage: Highest priority
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      priority: 0.9, // Service Hub: Very high priority
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      priority: 0.8,
    },
    
    // --- 2. DEDICATED SERVICE PAGES (Medium-High Priority: 0.7) ---
    {
      url: `${baseUrl}/services/production`,
      lastModified: currentDate,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/mixing`,
      lastModified: currentDate,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/recording`,
      lastModified: currentDate,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/jingles`,
      lastModified: currentDate,
      priority: 0.7,
    },

    // --- 3. LEGAL PAGES (Lower Priority: 0.5) ---
    {
      url: `${baseUrl}/pnp`, // Privacy Policy
      lastModified: currentDate,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/tnc`, // Terms and Conditions
      lastModified: currentDate,
      priority: 0.5,
    },
  ];
}