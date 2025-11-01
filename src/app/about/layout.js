// src/app/about/layout.js

import React from 'react';

// --- SERVER-SIDE METADATA DEFINITION ---
// This file is a Server Component and can safely export metadata.
export const metadata = {
    // Optimized SEO Title
    title: "About | Best Recording Studio in Ranchi",
    
    // Strong Description
    description: "Learn about AVN Music Studio's mission, creative philosophy, and commitment to delivering professional, budget-friendly music production and recording services in Ranchi.",
};

// This layout file wraps your client component (page.js)
export default function AboutLayout({ children }) {
  return (
    // This passes the client component (page.js) through successfully
    <>{children}</> 
  );
}