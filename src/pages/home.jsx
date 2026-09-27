import ContactCTA from "../component/contactus";
import Hero from "../component/hero";
import About from "./about";
import Process from "./process";
import Services from "./services";
import Team from "./team";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Team />
      <Process />
      <ContactCTA />
    </div>
  );
}

export default Home;
