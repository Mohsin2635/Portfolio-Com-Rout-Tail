import Home from "./(component)/Home/page";
import About from "./(component)/About/page";
import Services from "./(component)/Services/page";
import Projects from "./(component)/Projects/page";
import Contact from "./(component)/Contact/page";
export default function page() {
  return (
    <>
      <div className="bg-black">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
