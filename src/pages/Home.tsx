import React from "react";
import TopNavBar from "../components/TopNavBar";
import NameText from "../components/NameText";
import StickyNote from "../components/StickyNote";
import Projects from "../components/Projects";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";


function Home() {
  const [setElement, isVisible] = useFadeInOnScroll(100); // 100px offset from bottom
  return (
    <section id="about">
      <TopNavBar />

      <main>
        <div
          ref={(el) => setElement(el as HTMLElement)}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            willChange: "opacity, transform",
          }}
        >
          <NameText />
          <StickyNote />
          <Projects />
        </div>
      </main>
    </section>
  );
}

export default Home;
