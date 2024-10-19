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
      <div className="text-center flex justify-center">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.1356861363834!2d85.26832337539842!3d23.310835278972732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5216146b9f2fb%3A0x927b0ffc79a7c39a!2sAVN%20Productions!5e0!3m2!1sen!2sin!4v1729313138761!5m2!1sen!2sin" width={380}  height={300} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      <Footer />
    </div>
  );
}
