import Image from "next/image";
import Hero from "./components/Hero";
// 1. (FIX) Updated the import from "./components/Card" to "./components/CardSection"
import CardSection from "./components/CardSection"; 

export default function Home() {
  return (
    // This <main> tag is transparent.
    // The Hero component has its own particle background.
    // The CardSection component has its own solid background.
    <main>
      <Hero />
      {/* 2. (FIX) Updated the component tag to <CardSection /> */}
      <CardSection />
    </main>
  );
}