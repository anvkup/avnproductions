import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Card/>
      <Footer />
    </div>
  );
}
