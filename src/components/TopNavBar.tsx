import React, { useState, useRef, useEffect, useCallback } from "react";
import "./TopNavBar.css";
import catImage from "../images/cat.png";
import pencil_shaving from "../images/pencil.png";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "about me", id: "about" },
  { label: "projects", id: "projects" },
  { label: "contact", id: "contact" },
];

const TopNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(navItems[0].id);
  const [circlePosition, setCirclePosition] = useState<number>(0);
  const [currentStarIndex, setCurrentStarIndex] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const updateCirclePosition = useCallback(() => {
    const activeElement = itemRefs.current[activeTab];
    if (activeElement && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeElement.getBoundingClientRect();
      const relativeLeft = itemRect.left - navRect.left;
      const itemWidth = itemRect.width;
      const centerPosition = relativeLeft + itemWidth / 2;
      setCirclePosition(centerPosition);
    }
  }, [activeTab]);

  // Update circle position on activeTab change or window resize
  useEffect(() => {
    updateCirclePosition();
    window.addEventListener("resize", updateCirclePosition);
    return () => window.removeEventListener("resize", updateCirclePosition);
  }, [activeTab, updateCirclePosition]);

  // Handle scroll to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Add offset to account for header

      // Get all sections
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element !== null);

      // Find which section is in view
      for (const section of sections) {
        if (!section.element) continue;

        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add this useEffect hook right after the existing useEffect hooks
  useEffect(() => {
    // This will run whenever activeTab changes
    updateCirclePosition();
  }, [activeTab, updateCirclePosition]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Temporarily disable the scroll event listener to prevent conflicts
      window.scrollTo({
        top: element.offsetTop, // Adjust this value to account for your header height
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    scrollToSection(id);
  };

  return (
    <nav className="top-nav-bar" ref={navRef}>
      <div className="pencil-container">
        <img
          src={pencil_shaving}
          alt="pencil shaving"
          className="pencil-image"
        />
      </div>
      <div className="nav-items-container">
        {navItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => handleTabClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <img
        src={catImage}
        alt="Navigation indicator"
        className="nav-indicator-circle"
        style={{
          left: `${circlePosition}px`,
        }}
      />
    </nav>
  );
};

export default TopNavBar;
