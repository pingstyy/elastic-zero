// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    // noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Glossary", href: "/glossary"  },
      { title: "Installation setup", href: "/instal"},
    ],
  },
    {
      title: "Core",
      href: "/core",
      noLink: true,
      items: [
        { title: "Problem Formulation", href:"/problem-form"},
        { title: "Documentation Structure & Guide", href:"/structure"},
        { title: "Base Models", href:"/base-models"},
      ],
    },
    
    {
      title: "Absolute Zero",
      href: "/abs",
      noLink: true,
      items: [
        { title: "Paper Summary", href:"/absolute-zero"},
        { title: "Code Walkthrough", href:"/abs-cd"},
        { title: "Absolute zero Analysis", href:"/abs-ana"},
        { title: "Figures & Visualizations", href:"/abs-fig"},
        { title: "Methodology", href:"/abs-meth"},
        { title: "Buffered Reasoning", href:"/buffered-reasoning"},
        
      ],
      
    },
    { title: "Elastic Reasoning", href:"/ela",
      noLink: true,
      items:[
        { title: "Paper Summary", href:"/elastic-reasoning"},
        { title: "Experiment Analysis", href:"/elastic-exp-ana"},
        { title: "Figures and maps", href:"/elastic-fig"},
        { title: "Working principle", href:"/ela-eq"},
        { title: "Method", href:"/elstic-method"},
      ],
    },
    {
      title: "RL Algorithms",
      href: "/rl-algo"
    },
    {
      title: "Experimental Analysis",
      href: "/exp",
      noLink:true,
      items: [
        { title: "Key Findings", href: "/key-findings"},
        { title: "Layers Shake-Down", href: "/layer-wise"},
        { title: "Scaling Law", href: "/scaling-law"},
        { title: "Error Cases", href: "/error-case"},
        { title: "Training Parameters used", href: "/train-params"},
      ],
    },
    {
      title: "System Architecture",
      href: "/sys-arch"
    },
    {
      title: "Dataset Info",
      href: "/ds-overview"
    },
    {
      title: "Impacts",
      href: "/impacts"
    },
    {
      title: "Research Foundation",
      href: "/res-found",
      noLink: true,
      items: [
        { title: "Research Problems", href: "/research-problems"},
        { title: "Related Works", href: "/related-work"},
        { title: "Citations", href: "/citations"},
      ],
    },
    {
      title: "Changelogs",
      href: "/changelog"
    },
    {
      title: "Credits",
      href: "/credits"
    },
    {
      title: "Final Report",
      href: "/report"
    },
    {
      title: "Community",
      href: "/community"
    },
    {
      title: "Project End-Note",
      href: "/end"
    },

];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
