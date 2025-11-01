// src/app/contact/layout.js

import React from 'react';

// --- SERVER-SIDE METADATA DEFINITION ---
// This file is a Server Component and can safely export metadata.
export const metadata = {
    // This is the new, correct SEO Title
    title: "Contact | Best Recording Studio in Ranchi", 
    
    // Add a strong description for SEO
    description: "Get in touch with AVN Music Studio to book recording, mixing, or jingle production services in Ranchi. Send us a message or find our studio location.",
};

// This layout file wraps your client component (page.js)
export default function ContactLayout({ children }) {
  return (
    // This passes the client component (page.js) through successfully
    <>{children}</> 
  );
}