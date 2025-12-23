// src/data/sidebarLinksData.js
import { 
  Target,
  Sparkles, 
  Award, 
  Shield, 
  Users, 
  CheckCircle, 
  Globe, 
  FileText 
} from 'lucide-react';

const sidebarLinksData = [
  { 
    name: "About alignAfrica", 
    href: "/about/about-align-africa", 
    icon: Target  // Just the component function, not JSX
  },
  { 
    name: "Our Name", 
    href: "/about/our-name", 
    icon: Sparkles
  },
  { 
    name: "History", 
    href: "/about/history", 
    icon: Award
  },
  { 
    name: "Philosophy", 
    href: "/about/philosophy", 
    icon: Shield
  },
  { 
    name: "Board of Directors", 
    href: "/about/board-of-directors", 
    icon: Users
  },
  { 
    name: "In-house Protocols", 
    href: "/about/in-house-protocols", 
    icon: CheckCircle
  },
  { 
    name: "Staff", 
    href: "/about/staff", 
    icon: Users
  },
  { 
    name: "Overview", 
    href: "/about/overview", 
    icon: Globe
  },
  { 
    name: "FQAS", 
    href: "/about/fqas", 
    icon: FileText
  },
  { 
    name: "Privacy Policy", 
    href: "/about/privacy-policy", 
    icon: Shield
  },
  { 
    name: "Safeguarding", 
    href: "/about/safeguarding", 
    icon: Shield
  }
];

export default sidebarLinksData;