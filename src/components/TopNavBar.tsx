import React, { useState, useRef, useEffect } from "react";
import "./TopNavBar.css";
import catImage from "../images/cat.png";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "about me", id: "about" },
  { label: "projects", id: "projects" },
  { label: "resume", id: "resume" },
  { label: "contact", id: "contact" },
];

const TopNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(navItems[0].id);
  const [circlePosition, setCirclePosition] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const updateCirclePosition = () => {
      const activeElement = itemRefs.current[activeTab];
      if (activeElement && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = activeElement.getBoundingClientRect();
        const relativeLeft = itemRect.left - navRect.left;
        const itemWidth = itemRect.width;
        const centerPosition = relativeLeft + itemWidth / 2;
        setCirclePosition(centerPosition);
      }
    };

    updateCirclePosition();
    window.addEventListener("resize", updateCirclePosition);
    return () => window.removeEventListener("resize", updateCirclePosition);
  }, [activeTab]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <nav className="top-nav-bar" ref={navRef}>
      <div className="nav-items-container">
        {navItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => { itemRefs.current[item.id] = el; }}
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

