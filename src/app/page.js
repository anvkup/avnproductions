// src/app/page.js (Example Implementation)
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Script from 'next/script';
import { localBusinessSchema } from './schema'; // Import the new file

export default function Home() {
  return (
    <main>
      <Script 
        id="local-business-schema" 
        type="application/ld+json" 
        // Render the imported object as a JSON string
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero />
      <CardSection />
      {/* ... rest of your homepage content ... */}
    </main>
  );
}