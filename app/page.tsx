import Introduction from "@/components/introduction";
import Navbar from "../components/Navbar";
import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Portfolio from "@/components/porfolio";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
}
