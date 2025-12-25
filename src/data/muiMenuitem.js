// menuItems.js
import React from 'react';
import {
  Home,
  Info,
  Users,
  Heart,
  FolderKanban,
  FileText,
  Trophy,
  Star,
  AlertTriangle,
  Lightbulb,
  Globe,
  Leaf,
  Building2,
  Target,
  BookOpen,
  Shield,
  UserCog,
  ChartBar,
  HeartHandshake,
  GraduationCap,
  Droplets,
 Scale as Scales,
  Mic,
  Apple,
  ShieldCheck,
  FileCheck,
  Phone,
  Award,
  Brain,
  Palette,
  MapPin,
  Utensils,
  Languages,
  Calendar,
  Mountain,
  TreePine,
  Shirt,
  Coffee,
  Book,
 Footprints as Football,
  Landmark,
  Sparkles
} from 'lucide-react';

export const menuItems = [
  {
    id: 'nav-home',
    title: 'Home',
    path: '/',
    current: true,
    bgColor: '#7b3400',
    menuBgColor: '#7b3400',
    menuBgImage: 'url(/images/home-nav-bg.jpg)',
    icon: React.createElement(Home, { className: "w-5 h-5" }),
    submenu: []
  },
  {
    id: 'nav-about',
    title: 'About alignAfrica',
    path: '/about/about-align-africa',
    bgColor: '#ce384d',
    icon: React.createElement(Info, { className: "w-5 h-5" }),
    menuBgColor: '#ce384d',
    menuBgImage: 'url(/images/about-nav-bg.jpg)',
    submenu: [
      { 
        title: 'About alignAfrica', 
        path: '/about/about-align-africa', 
        icon: React.createElement(Info, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Our Name', 
        path: '/about/our-name', 
        icon: React.createElement(Sparkles, { className: "w-4 h-4" }) 
      },
      { 
        title: 'History', 
        path: '/about/history', 
        icon: React.createElement(BookOpen, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Philosophy', 
        path: '/about/philosophy', 
        icon: React.createElement(Brain, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Board of Directors', 
        path: '/about/board-of-directors', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      },
      { 
        title: 'In-house Protocols', 
        path: '/about/in-house-protocols', 
        icon: React.createElement(ShieldCheck, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Staff', 
        path: '/about/staff', 
        icon: React.createElement(UserCog, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Overview', 
        path: '/about/overview', 
        icon: React.createElement(ChartBar, { className: "w-4 h-4" }) 
      },
      { 
        title: 'FQAS', 
        path: '/about/fqas', 
        icon: React.createElement(FileText, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Privacy Policy', 
        path: '/about/privacy-policy', 
        icon: React.createElement(Shield, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Safeguarding', 
        path: '/about/safeguarding', 
        icon: React.createElement(ShieldCheck, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-problems',
    title: 'Ethio-Spirulina',
    path: '/ethio-spirulina',
    bgColor: '#e89c03',
    icon: React.createElement(Leaf, { className: "w-5 h-5" }),
    menuBgColor: '#e89c03',
    menuBgImage: 'url(/images/problems-nav-bg.jpg)',
    submenu: [
      { 
        title: 'Home', 
        path: '/ethio-spirulina', 
        icon: React.createElement(Home, { className: "w-4 h-4" }) 
      },
      { 
        title: 'About us', 
        path: '/ethio-spirulina/about', 
        icon: React.createElement(Info, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Spirulina Benefit', 
        path: '/ethio-spirulina/benefits', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Spirulina Products', 
        path: '/ethio-spirulina/products', 
        icon: React.createElement(Apple, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Our Certificates', 
        path: '/ethio-spirulina/certificates', 
        icon: React.createElement(Award, { className: "w-4 h-4" }) 
      },
      { 
        title: 'FQA', 
        path: '/ethio-spirulina/fqa', 
        icon: React.createElement(FileText, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Terms and Conditions', 
        path: '/ethio-spirulina/terms', 
        icon: React.createElement(FileCheck, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Contact us', 
        path: '/ethio-spirulina/contact', 
        icon: React.createElement(Phone, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-development-partners',
    title: 'Development Partners',
    path: '/development-partners',
    bgColor: '#759e1e',
    icon: React.createElement(Building2, { className: "w-5 h-5" }),
    menuBgColor: '#759e1e',
    menuBgImage: 'url(/images/development-partners-nav-bg.jpg)',
    submenu: [
      { 
        title: 'Development Partners', 
        path: '/development-partners', 
        icon: React.createElement(Building2, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Membership', 
        path: '/development-partners/membership', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Donors', 
        path: '/development-partners/donors', 
        icon: React.createElement(HeartHandshake, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-projects',
    title: 'Projects',
    path: '/projects',
    bgColor: '#5931b4',
    icon: React.createElement(Target, { className: "w-5 h-5" }),
    menuBgColor: '#5931b4',
    menuBgImage: 'url(/images/projects-nav-bg.jpg)',
    submenu: [
      { 
        title: 'One Health - Ethiopia', 
        path: '/projects/one-health', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Dance4Life', 
        path: '/projects/dance4life', 
        icon: React.createElement(Sparkles, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Capacity Building', 
        path: '/projects/capacity-building', 
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Youth Empowerment', 
        path: '/projects/youth-empowerment', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      },
      { 
        title: 'RMNH project', 
        path: '/projects/rmnh', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Multi Purpose Village', 
        path: '/projects/multi-purpose-village', 
        icon: React.createElement(Home, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Spirulina Program', 
        path: '/projects/spirulina-program', 
        icon: React.createElement(Leaf, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Gender Equality', 
        path: '/projects/gender-equality', 
        icon: React.createElement(Scales, { className: "w-4 h-4" }) 
      },
      { 
        title: 'HIV Project', 
        path: '/projects/hiv-project', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Nutrition Project', 
        path: '/projects/nutrition-project', 
        icon: React.createElement(Apple, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Peace Building', 
        path: '/projects/peace-building', 
        icon: React.createElement(Shield, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Social Action Gambella', 
        path: '/projects/social-action-gambella', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      },
      { 
        title: 'TARGET Project', 
        path: '/projects/target-project', 
        icon: React.createElement(Target, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Youth Voice-Ethiopia', 
        path: '/projects/youth-voice-ethiopia', 
        icon: React.createElement(Mic, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-reports',
    title: 'Reports',
    path: '/reports',
    bgColor: '#2972ac',
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
    menuBgColor: '#2972ac',
    menuBgImage: 'url(/images/heroes-nav-bg.jpg)',
    submenu: [
      { 
        title: '2021 Final Narrative Report', 
        path: '/reports/2021-narrative', 
        icon: React.createElement(FileText, { className: "w-4 h-4" }), 
        external: '/pdf/alignafrica 2021 Final Narrative Report.pdf' 
      },
      { 
        title: 'Organizational Structure', 
        path: '/reports/organizational-structure', 
        icon: React.createElement(Building2, { className: "w-4 h-4" }), 
        external: '/alignafrica Organizational Structure .1.pdf' 
      },
      { 
        title: 'Youth Voice Project Report', 
        path: '/reports/youth-voice', 
        icon: React.createElement(Mic, { className: "w-4 h-4" }), 
        external: '/alignafrica Venerating Youth Voice-Project Report.pdf' 
      }
    ]
  },
  {
    id: 'nav-success-stories',
    title: 'Success Stories',
    path: '/success-stories',
    bgColor: '#1e9e96',
    icon: React.createElement(Trophy, { className: "w-5 h-5" }),
    menuBgColor: '#1e9e96',
    menuBgImage: 'url(/images/success-stories-nav-bg.jpg)',
    submenu: [
      { 
        title: 'Hope of addicted', 
        path: '/success-stories/hope-addicted', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'RIF Project', 
        path: '/success-stories/rif-project', 
        icon: React.createElement(Target, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Dance for Life', 
        path: '/success-stories/dance-for-life', 
        icon: React.createElement(Sparkles, { className: "w-4 h-4" }) 
      },
      { 
        title: 'TARGET Project', 
        path: '/success-stories/target-project', 
        icon: React.createElement(Target, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Youth Voice Project', 
        path: '/success-stories/youth-voice', 
        icon: React.createElement(Mic, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-heroes',
    title: 'Heroes',
    path: '/heroes',
    bgColor: '#2972ac',
    icon: React.createElement(Star, { className: "w-5 h-5" }),
    menuBgColor: '#2972ac',
    menuBgImage: 'url(/images/heroes-nav-bg.jpg)',
    submenu: [
      { 
        title: 'Girma Wolde Giorgies', 
        path: '/heroes/girma-wolde-giorgies', 
        icon: React.createElement(Star, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-problems-section',
    title: 'Problems',
    path: '/problems',
    bgColor: '#e89c03',
    icon: React.createElement(AlertTriangle, { className: "w-5 h-5" }),
    menuBgColor: '#e89c03',
    menuBgImage: 'url(/images/problems-nav-bg.jpg)',
    submenu: [
      { 
        title: 'Education', 
        path: '/problems/education', 
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Health', 
        path: '/problems/health', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Livelihood', 
        path: '/problems/livelihood', 
        icon: React.createElement(Home, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Sanitation', 
        path: '/problems/sanitation', 
        icon: React.createElement(Droplets, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Water Security', 
        path: '/problems/water-security', 
        icon: React.createElement(Droplets, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Gender Inequality', 
        path: '/problems/gender-inequality', 
        icon: React.createElement(Scales, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Key Issues affecting Youth', 
        path: '/problems/youth-issues', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-solutions',
    title: 'Solutions',
    path: '/solutions',
    bgColor: '#1c8a24',
    icon: React.createElement(Lightbulb, { className: "w-5 h-5" }),
    menuBgColor: '#1c8a24',
    menuBgImage: 'bg-[url(/images/solutions-nav-bg.jpg)]',
    submenu: [
      { 
        title: 'Education', 
        path: '/solutions/education', 
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Health', 
        path: '/solutions/health', 
        icon: React.createElement(Heart, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Livelihood', 
        path: '/solutions/livelihood', 
        icon: React.createElement(Home, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Partnership and Coordination', 
        path: '/solutions/partnership', 
        icon: React.createElement(HeartHandshake, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Water Security', 
        path: '/solutions/water-security', 
        icon: React.createElement(Droplets, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Women Empowerment', 
        path: '/solutions/women-empowerment', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Sanitation & Hygiene', 
        path: '/solutions/sanitation-hygiene', 
        icon: React.createElement(Droplets, { className: "w-4 h-4" }) 
      }
    ]
  },
  {
    id: 'nav-ethiopians',
    title: 'The Ethiopians',
    path: '/ethiopians',
    bgColor: '#77124C',
    icon: React.createElement(Globe, { className: "w-5 h-5" }),
    menuBgColor: '#77124C',
    menuBgImage: 'url(/images/ethiopians-nav-bg.jpg)',
    submenu: [
      { 
        title: 'The Ethiopian People', 
        path: '/ethiopians', 
        icon: React.createElement(Users, { className: "w-4 h-4" }) 
      },
      { 
        title: '16 Facts about Ethiopia', 
        path: '/ethiopians/facts', 
        icon: React.createElement(Sparkles, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Agriculture in Ethiopia', 
        path: '/ethiopians/agriculture', 
        icon: React.createElement(TreePine, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Calendar', 
        path: '/ethiopians/calendar', 
        icon: React.createElement(Calendar, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Coffee', 
        path: '/ethiopians/coffee', 
        icon: React.createElement(Coffee, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Education in Ethiopia', 
        path: '/ethiopians/education', 
        icon: React.createElement(GraduationCap, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Art', 
        path: '/ethiopians/art', 
        icon: React.createElement(Palette, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Cities and towns', 
        path: '/ethiopians/cities', 
        icon: React.createElement(MapPin, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Cultural Foods', 
        path: '/ethiopians/foods', 
        icon: React.createElement(Utensils, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethnic Groups and Languages', 
        path: '/ethiopians/ethnic-groups', 
        icon: React.createElement(Languages, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Holidays', 
        path: '/ethiopians/holidays', 
        icon: React.createElement(Calendar, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Natural Resources', 
        path: '/ethiopians/natural-resources', 
        icon: React.createElement(Mountain, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Rural Life', 
        path: '/ethiopians/rural-life', 
        icon: React.createElement(Home, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Ethiopian Sports', 
        path: '/ethiopians/sports', 
        icon: React.createElement(Football, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Traditional Dress', 
        path: '/ethiopians/traditional-dress', 
        icon: React.createElement(Shirt, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Lalibela', 
        path: '/ethiopians/lalibela', 
        icon: React.createElement(Landmark, { className: "w-4 h-4" }) 
      },
      { 
        title: 'Quick Ethiopia Facts', 
        path: '/ethiopians/quick-facts', 
        icon: React.createElement(Sparkles, { className: "w-4 h-4" }) 
      }
    ]
  }
];

// Helper functions
export const getMenuItemById = (id) => {
  return menuItems.find(item => item.id === id);
};

export const getMenuItemsForMobile = () => {
  return menuItems.map(item => ({
    ...item,
    // You can add mobile-specific modifications here
  }));
};

// Function to generate all routes from menu items
export const getAllRoutes = () => {
  const routes = [];
  
  menuItems.forEach(item => {
    // Add main route
    if (item.path && item.path !== '#') {
      routes.push({ path: item.path, title: item.title, icon: item.icon });
    }
    
    // Add submenu routes
    if (item.submenu && item.submenu.length > 0) {
      item.submenu.forEach(subItem => {
        if (subItem.path && subItem.path !== '#') {
          routes.push({ 
            path: subItem.path, 
            title: subItem.title, 
            icon: subItem.icon,
            external: subItem.external 
          });
        }
      });
    }
  });
  
  return routes;
};

// Function to check if a route is active
export const isRouteActive = (currentPath, menuPath) => {
  if (!menuPath) return false;
  
  // Exact match
  if (currentPath === menuPath) return true;
  
  // Check if current path starts with menu path (for nested routes)
  if (currentPath.startsWith(menuPath + '/')) return true;
  
  return false;
};