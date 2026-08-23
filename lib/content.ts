export const site = {
  name: "Scope USC",
  title: "Scope USC — Computer Science Club",
  description:
    "Learn modern technologies, build real projects, and prepare for a career in tech with Scope at USC.",
  email: "hello@scopeusc.com",
  applicationsCloseAt: "2026-09-16T03:59:00.000Z",
} as const;

export const navLinks = [
  { href: "/#curriculum", label: "Curriculum" },
  { href: "/#catalyst", label: "Catalyst" },
  { href: "/#social", label: "Social" },
  { href: "/#board", label: "Board" },
] as const;

export const topics = [
  "Kubernetes",
  "Docker",
  "React",
  "Node.js",
  "Swift",
  "Go",
  "Next.js",
] as const;

export const socialWeek = [
  "Hot Ones",
  "Jeopardy Night",
  "Field Day",
  "Retreat",
  "Bonfire",
  "Scavenger Hunt",
  "Powerpoint Night",
] as const;

export const boardMembers = [
  {
    name: "Max Raffel",
    role: "President",
    image: "/images/max-eboard.png",
  },
  {
    name: "Anjolie Jain",
    role: "President",
    image: "/images/anjolie-eboard.png",
  },
  {
    name: "Anay Mody",
    role: "Director of Outreach",
    image: "/images/anay-eboard.png",
  },
  {
    name: "Joyce Ng",
    role: "Co-Director of Curriculum",
    image: "/images/joyce-eboard.png",
  },
  {
    name: "Robert Garabetian",
    role: "Co-Director of Curriculum",
    image: "/images/robert-eboard.png",
  },
  {
    name: "Katie Hahn",
    role: "Director of Finance",
    image: "/images/katie-eboard.png",
  },
  {
    name: "Hannah Lee",
    role: "Director of Events",
    image: "/images/hannah-eboard.png",
  },
  {
    name: "Janessa Techathamawong",
    role: "Director of Brand",
    image: "/images/janessa-eboard.png",
  },
] as const;

export const faqs = [
  {
    question: "Who can join Scope?",
    answer:
      "Scope is open to undergraduate USC students from all majors. While many of our members are computer science students or people interested in the technology field, we encourage and welcome members from other sectors, and love what their unique experiences and insights bring to the club.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Since our curriculum does require a basic foundation of coding, we require this of our applicants as well. This means you have seen and touched code before whether that be through a class, personal project, internship, etc. Please elaborate on your application.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Application - At the beginning of each semester we release an application to hear a little bit about your experience and why you want to join Scope. Interview - Get to know Scope e-board while we get to know you! The goal of this stage is to assess how you would fit in with our Scope family. Decision - If you are admitted, yay! If not, that doesn't mean you weren't right for the club, it's that we didn't have the space for you yet. But please, please reapply in future semesters!",
  },
] as const;

export const alumniCompanies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Bloomberg",
  "Stripe",
  "Disney",
  "Salesforce",
] as const;

export const sponsorship = {
  title: "Sponsorship — Scope USC",
  description:
    "Partner with Scope USC to support modern technical education, real projects, and a growing computer science community.",
  headline: "Help the next wave of tech talent build.",
  body: "Scope brings curious USC students together around modern tools, real projects, and the people who make learning feel possible. Your support keeps that energy moving.",
  reasons: [
    {
      index: "01",
      title: "Workshops",
      body: "Give members a chance to learn modern tools by actually using them.",
    },
    {
      index: "02",
      title: "Projects",
      body: "Help students turn half-finished ideas into work they’re proud to ship.",
    },
    {
      index: "03",
      title: "Community",
      body: "Keep good people in the same room through events, mentorship, and shared momentum.",
    },
  ],
  unlocks: [
    {
      title: "Learning infrastructure",
      body: "Tools, mentors, workshops, and the kind of resources that make trying something new feel doable.",
    },
    {
      title: "Project momentum",
      body: "Mini-projects, hackathons, and a little push to finally launch the thing.",
    },
    {
      title: "Community experiences",
      body: "Retreats, events, networking, and the stories people still bring up later.",
    },
  ],
} as const;

export const application = {
  title: "Applications — Scope USC",
  description:
    "Apply to Scope USC. Tell us who you are, what you want from Scope, and what you’d bring to the community.",
  submitUrl: "https://usebasin.com/f/5c71777507d3",
  grades: ["Freshman", "Sophomore", "Junior", "Senior", "Master's", "PhD"],
  yesNo: ["Yes", "No"],
  firstGen: ["Yes", "No", "Prefer not to say"],
  ethnicities: [
    "American Indian or Alaska Native",
    "Asian",
    "Black or African American",
    "Hispanic or Latino",
    "Middle Eastern or North African",
    "Native Hawaiian or Other Pacific Islander",
    "White",
    "Two or more races",
    "Prefer not to say",
    "Other",
  ],
} as const;
