
import { NavItem, NavLinkType, Project, Testimonial } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Work', href: '#work', type: NavLinkType.ANCHOR },
  { label: 'Services', href: '#services', type: NavLinkType.ANCHOR },
  { label: 'About', href: '#about', type: NavLinkType.ANCHOR },
  { label: 'Testimonials', href: '#testimonials', type: NavLinkType.ANCHOR },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Nights",
    category: "Music Video",
    image: "https://picsum.photos/800/600?random=1",
    year: "2024",
    description: "A high-octane music video shot in the heart of Lagos. Features dynamic lighting setups and fast-paced editing to match the track's tempo.",
    tags: ["High Energy", "VFX", "Night Shoot"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" // Placeholder embed
  },
  {
    id: 2,
    title: "Urban Flow",
    category: "Commercial",
    image: "https://picsum.photos/800/600?random=2",
    year: "2024",
    description: "A lifestyle commercial for a major streetwear brand. The goal was to capture the raw energy of Nigerian youth culture.",
    tags: ["Fashion", "Lifestyle", "Fast Paced"]
  },
  {
    id: 3,
    title: "The Artisan",
    category: "Documentary",
    image: "https://picsum.photos/800/600?random=3",
    year: "2023",
    description: "A short documentary profiling a local ceramicist in Ogun State. Shot on 16mm film to evoke a sense of timelessness and texture.",
    tags: ["16mm", "Narrative", "Portrait"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
  },
  {
    id: 4,
    title: "Apex Fitness",
    category: "Brand Campaign",
    image: "https://picsum.photos/800/600?random=4",
    year: "2023",
    description: "A series of social media assets and a hero film for Apex Fitness, focusing on intensity and perseverance.",
    tags: ["Sports", "Studio", "Dynamic"]
  },
  {
    id: 5,
    title: "Rhythm & Soul",
    category: "Music Video",
    image: "https://picsum.photos/800/600?random=5",
    year: "2023",
    description: "A soulful, narrative-driven music video that tells a story of heartbreak and redemption through dance.",
    tags: ["Choreography", "Cinematic", "Storytelling"]
  },
  {
    id: 6,
    title: "Tech Horizon",
    category: "Commercial",
    image: "https://picsum.photos/800/600?random=6",
    year: "2022",
    description: "A clean, futuristic commercial for a tech startup. Heavily utilized VFX and motion control camera rigs.",
    tags: ["CGI", "Green Screen", "Corporate"]
  },
  {
    id: 7,
    title: "Legacy",
    category: "Documentary",
    image: "https://picsum.photos/800/600?random=7",
    year: "2021",
    description: "An intimate look at traditional weaving techniques passed down through generations.",
    tags: ["Culture", "Interview", "Slow Motion"]
  },
  {
    id: 8,
    title: "StartUp",
    category: "Commercial",
    image: "https://picsum.photos/800/600?random=8",
    year: "2020",
    description: "Launch campaign for a fintech app, focusing on ease of use and modern lifestyle.",
    tags: ["App", "Lifestyle", "Bright"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Ellis has an incredible eye for detail. He turned our vague concept into a visual masterpiece that exceeded all expectations. The way he captured the lighting was phenomenal.",
    author: "Sarah Jenkins",
    company: "Marketing Director, Apex Fitness"
  },
  {
    id: 2,
    text: "Professional, fast, and creatively brilliant. The music video he shot for us went viral within a week, largely due to the visuals. He really put Ogun on the map with this one.",
    author: "David Okonjo",
    company: "Artist Manager"
  },
  {
    id: 3,
    text: "Working with Ellis was seamless. He understood the brand identity immediately and delivered a commercial that felt authentic and high-end.",
    author: "Elena Rodriguez",
    company: "CEO, Urban Flow"
  },
  {
    id: 4,
    text: "I've worked with many editors, but Ellis brings a unique rhythm to the cut. He doesn't just assemble footage; he composes it like music.",
    author: "Michael Adebayo",
    company: "Director, Lagos Lens"
  },
  {
    id: 5,
    text: "We needed a documentary that felt intimate yet cinematic. Ellis delivered exactly that. His ability to make subjects feel comfortable on camera is unmatched.",
    author: "Chidinma Okafor",
    company: "NGO Coordinator"
  },
  {
    id: 6,
    text: "The retention editing package from Kube Media is a game changer. Our average view duration increased by 40% in just two months.",
    author: "Tunde Bakare",
    company: "YouTuber (100k+ Subs)"
  }
];

export const CLIENT_LOGOS = [
  "Nike", "Adidas", "Red Bull", "Sony", "Canon"
];

// Using placehold.co to guarantee logo visibility as clearbit often 404s for specific niche entities without a valid domain check
export const AGENCY_CLIENTS = [
  { name: "Mavin Records", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=MAVIN" },
  { name: "MTV Base", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=MTV" },
  { name: "Soundcity", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=SOUNDCITY" },
  { name: "Trace TV", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=TRACE" },
  { name: "Universal", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=UNIVERSAL" },
  { name: "Empire", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=EMPIRE" },
  { name: "BET", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=BET" },
  { name: "Roc Nation", url: "https://placehold.co/200x80/09090b/FFFFFF/png?text=ROC+NATION" }
];

export const SYSTEM_INSTRUCTION = `You are the AI assistant for Ellis, a professional Nigerian videographer and editor based in Ogun State, Nigeria.
Ellis studied Mathematics at Covenant University but discovered his true passion for the arts during his time there (Est. 2020).
He now specializes in high-energy music videos, sleek commercials, and cinematic documentaries across Nigeria and internationally.
His style is modern, fast-paced, and visually striking, blending mathematical precision with artistic flow.

When answering potential clients:
- Be professional, minimal, and direct.
- Highlight Ellis's unique background (Math degree -> Creative Arts) if relevant to technical precision or problem solving.
- Mention expertise in 4K cinematography, color grading, and sound design.
- If asked about rates, mention that projects typically start at ₦1,500,000 (NGN) or $1,500 (USD) but vary based on scope.
- Encourage them to use the contact form for a custom quote.
- Keep answers concise (under 3 sentences where possible).
- DO NOT use emojis in your responses.`;
