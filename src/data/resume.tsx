import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Amina Luvsanchultem",
  initials: "AL",
  url: "https://aminaluv.github.io",
  location: "Arlington, VA",
  locationLink: "https://maps.app.goo.gl/9F7CPkYy3uD93gpU6",
  description:
    "Master of Engineering student studying AI at MIT. I love building things and helping people.",
  summary:
    "[I graduated MIT Spring 2026 with a Bachelor Degree in Artificial Intelligence and Decision Making (6-4) and a Minor in Management (15-1)](/#education), [interned at Amazon 3 times during undergrad](/#work), and am pursuing my Master of Engineering this upcoming 2026-2027 school year.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "aminaluv10@gmail.com",
    tel: "571-213-4736",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aminaluv",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aminaluv/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MIT Media Lab Personal Robots Group",
      href: "https://www.media.mit.edu/groups/personal-robots/overview/",
      badges: [],
      location: "Cambridge, MA",
      title: "Undergraduate Researcher",
      logoUrl: "/media_lab_logo.png",
      start: "Sep 2025",
      end: "May 2026",
      description:
        "Co-designed survey and data collection of belief shift data that was used in a COLM 2026 paper introducing a benchmark of 1,035 human-LLM interactions for predicting belief shift from emotionally manipulative and sycophantic AI dialogue.",
    },
    {
      company: "6.1000 Introduction to Programming and CS at MIT",
      badges: [],
      href: "https://introcomp.mit.edu/spring26",
      location: "Cambridge, MA",
      title: "Lab Assistant (LA)",
      logoUrl: "/eecs_logo.svg",
      start: "Sep 2025",
      end: "Jan 2026",
      description:
        "Supported 70+ students across a semester in 6.1000, resolving Python errors, clarifying core CS concepts, and translating abstract programming concepts into working code.",
    },
    {
      company: "Amazon Web Services",
      href: "https://aws.amazon.com/",
      badges: [],
      location: "New York City, NY",
      title: "Software Development Engineering Intern",
      logoUrl: "/aws_logo.svg",
      start: "Jun 2025",
      end: "Aug 2025",
      description:
        "Built a full-stack proof-of-concept AWS Bedrock-powered chatbot for the AWS Pricing Platform team, projected to cut pricing component update resolution time from 30 days to minutes.\nDeveloped serverless Lambda functions to prompt the Bedrock client for automated Markdown generation, powering the chatbot’s core functionality.\nDrove adoption discussions for the proof of concept across the Pricing Experience Platform team, positioning it as a scalable solution for reducing manual update overhead.",
    },
    {
      company: "Amazon",
      href: "https://www.amazon.com/",
      badges: [],
      location: "New York City, NY",
      title: "Software Development Engineering Intern",
      logoUrl: "/amazon_logo.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Led and launched show-blocking feature for Amazon Freevee with Video Ads team, projected to drive $60M in Amazon Ads revenue, and pioneered first launch to Prime Video's Australia region.\nApplied test-driven development and authored comprehensive documentation for improved team onboarding for future feature work and code reliability.",
    },
    {
      company: "Kim Center for Social Balance",
      href: "https://kimcenter.org/",
      badges: [],
      location: "Remote",
      title: "Workplace Equity Assessment Development Intern",
      logoUrl: "/kim_logo.png",
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "Created and streamlined an automated pipeline to classify survey questions into metric areas, cutting categorization time by 90% compared to the prior manual process.\nApplied chi-squared testing across 1M+ demographic groupings to isolate statistically significant equity gaps, delivering insights used in client workplace equity reports.",
    },
    {
      company: "Amazon",
      href: "https://www.amazon.com/",
      badges: [],
      location: "New York City, NY",
      title: "AFE Software Development Engineering Intern",
      logoUrl: "/amazon_logo.png",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "Led design and development of a React/JavaScript frontend component for Amazon Ads Campaign Builder that auto-suggests fixes for advertiser-reported issues in the abandonment modal, launching to 25% of US Campaign Builder users and improving self-service resolution UX.",
    },
  ],
  education: [
    {
      school: "Massachusetts Institute of Technology",
      href: "https://web.mit.edu/",
      degree:
        "Candidate for Master of Engineering (MEng) in Artificial Intelligence and Decision Making",
      logoUrl: "/mit.png",
      start: "2026",
      end: "2027",
    },
    {
      school: "Massachusetts Institute of Technology",
      href: "https://web.mit.edu/",
      degree:
        "Bachelor of Science (BS) in Artificial Intelligence and Decision Making with a Minor in Management",
      logoUrl: "/mit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Bipedal Robot Locomotion with Reinforcement Learning",
      href: "https://neet.mit.edu/news/2026-certificate-ceremony#graduate-list",
      dates: "Feb 2026 - May 2026",
      active: true,
      description: "Used MuJoCo and Gymnasium environment to teach a humanoid to walk and navigate in simulation using reinforcement learning.",
      technologies: ["MuJoCo", "Gymnasium", "Python"],
      links: [
        {
          type: "Website",
          href: "https://neet.mit.edu/news/2026-certificate-ceremony#graduate-list",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/neet_humanoid.png",
      video: "",
    },
    {
      title: "Autonomous Racecar Navigation",
      href: "https://rss2025-12.github.io/website/",
      dates: "Feb 2025 - May 2025",
      active: true,
      description:
        "Worked in a team of five to program a Jetson-based, ROS2 Humble racecar for full autonomy, culminating in a final challenge where our team placed 2nd overall. Built the core navigation stack: wall following, a Monte Carlo Localization particle filter using LiDAR, A* path planning, and a Pure Pursuit trajectory controller. Communicated the work through weekly team briefings and technical reports on a GitHub Pages portfolio.",
      technologies: ["Docker", "ROS2", "Python"],
      links: [
        {
          type: "Website",
          href: "https://rss2025-12.github.io/website/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/autonomous-racecar.jpg",
      video: "",
    },
    {
      title: "Toy Product Design - Color Toss Mania",
      href: "https://www.playsentations.com/",
      dates: "Feb 2023 - May 2023",
      active: true,
      description:
        "Designed, protoyped, and presented light-up ring toss game with a team of 4. Learned design topics including brainstorming, estimation, sketching, graphic design, drawing and marker rendering, sketch modeling, concept development, design aesthetics, prototyping, and written, visual, and oral communication.",
      technologies: ["Fusion360", "CAD"],
      links: [
        {
          type: "Website",
          href: "https://www.playsentations.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/200B_cones.jpg",
      video: "",
    },
  ],
} as const;
