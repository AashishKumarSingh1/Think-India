import "./App.css";
import Navigation from "./UpdateNav";
import ThinkIndiaInfo from "./AboutThinkIndia";
import Footer from "./Footer";
import BlinkingSkeletonSwiper from "./UpdateSection.jsx";
import Team from "./Team.jsx";
import Contact from "./Contact.jsx";
export default function Integration() {
  return (
    <>
      <div>
        <div className="w-full">
          <Navigation />
        </div>
        <div id="ThinkIndia" className="w-full h-auto flex flex-row mt-8">
          <ThinkIndiaInfo />
        </div>
      </div>
      <div id="Team">
        <Team />
      </div>
      <div id="Updates">
        <BlinkingSkeletonSwiper />
      </div>

      <div id="Contact">
        <Contact />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
