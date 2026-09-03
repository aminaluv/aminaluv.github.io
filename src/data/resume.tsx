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
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aminaluv10@gmail.com",
    tel: "571-213-4736",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
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
      degree: "Bachelor of Science (BS) in Artificial Intelligence and Decision Making with a Minor in Management",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
