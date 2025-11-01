// src/app/services/layout.js

import React from 'react';

// --- SERVER-SIDE METADATA DEFINITION ---
// This file is a Server Component and safely exports metadata for the /services route.
export const metadata = {
    // New SEO-Optimized Title for the Directory
    title: "Services | Best Recording Studio in Ranchi",
    
    description: "View all professional audio services offered by AVN Music Studio: Recording, Mixing, Mastering, Dubbing, and Commercial Jingle Production in Ranchi.",
};

// This layout file wraps your service directory page (page.js)
export default function ServicesLayout({ children }) {
  return (
    <>{children}</> 
  );
}