export const site = {
  name: "Scope USC",
  title: "Scope",
  description:
    "Learn modern technologies, build real projects, and prepare for a career in tech with Scope at USC.",
  email: "hello@scopeusc.com",
  applicationsCloseAt: "2026-09-04T06:59:00.000Z",
} as const;

export const navLinks = [
  { href: "/#catalyst", label: "Catalyst" },
  { href: "/#social", label: "Social" },
  { href: "/#curriculum", label: "Curriculum" },
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
    name: "Anjolie Jain",
    role: "President",
    image: "/images/anjolie-eboard.png",
  },
  {
    name: "Max Raffel",
    role: "President",
    image: "/images/max-eboard.png",
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
    question: "What makes Scope different from other organizations?",
    answer:
      "We are an informal club that takes pride in building a community that is excited to ideate and create together. Scope is not an entrepreneurial club; it is a building org. This community is a trampoline that will launch meaningful ideas and relationships into the future.",
  },
  {
    question: "What does Scope look for in applicants?",
    answer:
      "Scope looks for passionate people who love technology and building things. Since Scope consists of 2 pillars: learning and community, we look for applicants who value and will participate in both of these aspects.",
  },
  {
    question: "What does the application process look like?",
    answer:
      "Application - At the beginning of each semester we release an application to hear a little bit about your experience and why you want to join Scope.\n\nInterview - Get to know Scope e-board while we get to know you! The goal of this stage is to assess how you would fit in with our Scope family.\n\nDecision - If you are admitted, yay! If not, that doesn't mean you weren't right for the club, it's that we didn't have the space for you yet. But please, please reapply in future semesters!",
  },
  {
    question: "Who is eligible to apply?",
    answer:
      "Scope is open to undergraduate USC students from all majors. While many of our members are computer science students or people interested in the technology field, we encourage and welcome members from other sectors, and love what their unique experiences and insights bring to the club.",
  },
  {
    question: "Do I need coding experience to join?",
    answer:
      "Since our curriculum does require a basic foundation of coding, we require this of our applicants as well. This means you have seen and touched code before whether that be through a class, personal project, internship, etc. Please elaborate on your application.",
  },
  {
    question: "How many members does Scope take each semester?",
    answer: "Around 30.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "We have two mandatory weekly meetings (typically Tuesdays and Thursdays). In addition, Scope members typically spend 2-4 hours per week participating in club-related activities like social events and projects.",
  },
] as const;

export const alumniCompanies = [
  { name: "Google", logo: "/images/alumni/Google_2015_logo.svg" },
  {
    name: "Microsoft",
    logo: "/images/alumni/microsoft-logo-svgrepo-com.svg?v=2",
    scale: "width",
  },
  { name: "Amazon", logo: "/images/alumni/Amazon_logo.svg?v=2" },
  { name: "Bloomberg", logo: "/images/alumni/Bloomberg_logo.svg", invert: true },
  { name: "Stripe", logo: "/images/alumni/Stripe_Logo,_revised_2016.svg" },
  { name: "Disney", logo: "/images/alumni/Disney_wordmark.svg", invert: true },
  { name: "Salesforce", logo: "/images/alumni/Salesforce.com_logo.svg", size: "tall" },
  { name: "Snapchat", logo: "/images/alumni/snapchat-logo.png?v=2" },
  { name: "Coinbase", logo: "/images/alumni/Coinbase.svg" },
  { name: "LinkedIn", logo: "/images/alumni/LinkedIn_Logo.svg?v=2" },
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
