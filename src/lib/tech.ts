/* Technology ecosystem data.

   `si` is a simple-icons slug — resolved server-side in Technology.tsx so the
   icon library never reaches the browser. Only the handful of path strings the
   page actually uses get serialised.

   `icon` is a fallback for entries that aren't a brand at all (concepts like
   "RAG" or "Webhooks"), and for the few brands simple-icons no longer ships
   after trademark requests — AWS, Azure, Java and OpenAI. We use a neutral
   icon for those rather than an unofficial lookalike. */

export type GenericIcon =
  | "brain" | "bot" | "network" | "search" | "audio" | "mic" | "speaker"
  | "fileText" | "workflow" | "database" | "cloud" | "plug" | "smartphone"
  | "code" | "mail" | "lock" | "creditCard" | "map" | "users" | "webhook"
  | "activity" | "hardDrive" | "gitBranch" | "layers" | "terminal" | "zap"
  | "messageSquare" | "server" | "globe" | "coffee";

export interface TechItem {
  name: string;
  si?: string;
  icon?: GenericIcon;
}

export interface TechCategory {
  id: string;
  name: string;
  blurb: string;
  techs: TechItem[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "languages",
    name: "Languages",
    blurb: "The languages the systems are actually written in.",
    techs: [
      { name: "JavaScript", si: "siJavascript" },
      { name: "TypeScript", si: "siTypescript" },
      { name: "Python", si: "siPython" },
      { name: "Kotlin", si: "siKotlin" },
      { name: "Java", icon: "coffee" },
      { name: "C++", si: "siCplusplus" },
      { name: "SQL", icon: "database" },
      { name: "HTML", si: "siHtml5" },
      { name: "CSS", si: "siCss" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    blurb: "Everything your customers and staff see and touch.",
    techs: [
      { name: "React", si: "siReact" },
      { name: "Next.js", si: "siNextdotjs" },
      { name: "React Native", si: "siReact" },
      { name: "Tailwind CSS", si: "siTailwindcss" },
      { name: "GSAP", si: "siGsap" },
      { name: "Framer Motion", si: "siFramer" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    blurb: "The engine room — where the rules and the data live.",
    techs: [
      { name: "Node.js", si: "siNodedotjs" },
      { name: "Express", si: "siExpress" },
      { name: "FastAPI", si: "siFastapi" },
      { name: "REST APIs", icon: "plug" },
      { name: "GraphQL", si: "siGraphql" },
      { name: "WebSockets", icon: "activity" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    blurb: "Apps that live on a phone, on both app stores.",
    techs: [
      { name: "Kotlin / Android", si: "siAndroid" },
      { name: "React Native", si: "siReact" },
      { name: "Flutter", si: "siFlutter" },
      { name: "Native Applications", icon: "smartphone" },
      { name: "Cross-platform Applications", icon: "layers" },
    ],
  },
  {
    id: "ai",
    name: "AI",
    blurb: "The parts that let software understand, decide and talk.",
    techs: [
      { name: "LLMs", icon: "brain" },
      { name: "AI Agents", icon: "bot" },
      { name: "RAG", icon: "search" },
      { name: "Embeddings", icon: "network" },
      { name: "Vector Search", icon: "search" },
      { name: "Prompt Engineering", icon: "terminal" },
      { name: "Tool Calling", icon: "plug" },
      { name: "Function Calling", icon: "code" },
      { name: "Agent Workflows", icon: "workflow" },
      { name: "Memory", icon: "hardDrive" },
      { name: "Multi-Agent Systems", icon: "users" },
      { name: "NLP", icon: "messageSquare" },
      { name: "Speech-to-Text", icon: "mic" },
      { name: "Text-to-Speech", icon: "speaker" },
      { name: "Voice AI", icon: "audio" },
      { name: "Conversational AI", icon: "messageSquare" },
      { name: "Document Intelligence", icon: "fileText" },
      { name: "AI Automation", icon: "zap" },
      { name: "Model APIs", icon: "server" },
    ],
  },
  {
    id: "data",
    name: "Databases & Data",
    blurb: "Where your information is stored, and how it's found again.",
    techs: [
      { name: "PostgreSQL", si: "siPostgresql" },
      { name: "MySQL", si: "siMysql" },
      { name: "MongoDB", si: "siMongodb" },
      { name: "Firebase", si: "siFirebase" },
      { name: "Redis", si: "siRedis" },
      { name: "SQL", icon: "database" },
      { name: "NoSQL", icon: "database" },
      { name: "Vector Databases", icon: "network" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & Infrastructure",
    blurb: "How it gets online, stays online, and handles a busy day.",
    techs: [
      { name: "AWS", icon: "cloud" },
      { name: "Google Cloud", si: "siGooglecloud" },
      { name: "Microsoft Azure", icon: "cloud" },
      { name: "Vercel", si: "siVercel" },
      { name: "Cloudflare", si: "siCloudflare" },
      { name: "Docker", si: "siDocker" },
      { name: "CI/CD", icon: "gitBranch" },
      { name: "Serverless", si: "siServerless" },
      { name: "Cloud Storage", icon: "hardDrive" },
      { name: "Monitoring", icon: "activity" },
      { name: "Edge Deployment", icon: "globe" },
    ],
  },
  {
    id: "integrations",
    name: "Integrations",
    blurb: "Connecting to the tools your business already runs on.",
    techs: [
      { name: "REST APIs", icon: "plug" },
      { name: "GraphQL", si: "siGraphql" },
      { name: "Webhooks", icon: "webhook" },
      { name: "Payments", icon: "creditCard" },
      { name: "WhatsApp", si: "siWhatsapp" },
      { name: "Email", icon: "mail" },
      { name: "Maps", icon: "map" },
      { name: "CRM", icon: "users" },
      { name: "Authentication", icon: "lock" },
      { name: "Third-party APIs", icon: "plug" },
    ],
  },
];
