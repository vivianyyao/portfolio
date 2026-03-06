// app/projects/projectsData.ts

export type CaseSection =
  | { type: "text"; title: string; body: string }
  | { type: "bullets"; title: string; items: string[] }
  | { type: "metrics"; title: string; items: { label: string; value: string; href?: string }[] }
  | { type: "links"; title: string; items: { label: string; href: string }[] };

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  previewSections: CaseSection[];
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    id: "bloom",
    slug: "bloom-energy", // URL: /projects/bloom-energy
    title: "Bloom Energy - Investment Memo",
    subtitle: "Will reliability emerge as a premium product in electricity markets?",
    tags: ["strategy", "modeling", "writing"],

    previewSections: [
      {
        type: "text",
        title: "TL;DR",
        body: "The core question is whether companies will begin paying a premium for guaranteed power availability rather than treating electricity as a commodity. Bloom’s advantage is reliability. Instead of competing to produce the cheapest electricity, it focuses on delivering power that stays on even when the grid fails."
      },
      {
        type: "bullets",
        title: "Key Points",
        items: [
          "Electricity demand is rising quickly due to AI, electrification, and data centers.",
          "Grid reliability is becoming a bigger concern for companies that rely on consistent electricity supply",
          "Bloom provides quickly deployable, on-site power systems designed to provide continuous energy.",
          "If companies start paying for reliability, Bloom’s installed systems could generate long-term recurring revenue. If buyers continue optimizing purely for cost, Bloom remains primarily an equipment supplier."
        ],
      },
      {
        type: "metrics",
        title: "Analysis",
        items: [
          {
            label: "Model",
            value: "3 scenarios + sensitivities",
            href: "https://docs.google.com/spreadsheets/d/1lMTtfmkzAOEGjGOENvryru4kk0EdF4ptfA9htmZzC_Q/edit?usp=sharing",
          },
          {
            label: "Memo",
            value: "Thesis + triggers + risks",
            href: "https://docs.google.com/document/d/1H6Mw-zGTAux64LfsWOVjDJP5kCRUeNxsMnskD9Ht2qw/preview",
          },
        ],
      },
    ],

    sections: [
      {
        type: "text",
        title: "TL;DR",
        body: "Bloom Energy represents a conditional infrastructure investment rather than a pure growth or technology adoption story. The company’s long-term economics depend on whether reliability becomes economically differentiated within electricity supply."
      },
      {
        type: "bullets",
        title: "Analysis",
        items: [
          "3-scenario financial model exploring how Bloom performs under Base, Bull, and Bear outcomes.",
          "Framework analyzing how Bloom’s installed systems could generate recurring revenue through service and energy contracts.",
          "Investment memo outlining the core thesis, risks, and signals that would prove the idea right or wrong.",
        ],
      },
      {
        type: "metrics",
        title: "Key Considerations",
        items: [
          {
            label: "What must be true?",
            value:
              "Companies must begin valuing reliable electricity enough to pay for it, rather than choosing power purely based on price.",
          },
          {
            label: "Where does value accrue?",
            value: "From long-term service and energy contracts tied to Bloom’s installed systems.",
          },
          {
            label: "What breaks the thesis?",
            value: "If buyers continue choosing electricity based only on cost, Bloom will remain primarily an equipment supplier.",
          },
          {
            label: "How to test early?",
            value:
              "Look for more systems sold under multi-year contracts and evidence that customers renew or expand deployments.",
          },
        ],
      },
      {
        type: "text",
        title: "Key insight",
        body: "If electricity procurement remains primarily cost-driven, Bloom likely stays an equipment supplier with cyclical, project-based revenue. If reliability becomes priced (like insurance), the installed base can behave more like infrastructure: recurring cash flows, higher lifetime margins, and improved durability of earnings.",
      },
      {
        type: "text",
        title: "Model approach",
        body: "I built a simple three-scenario model to explore how Bloom’s future could evolve if electricity reliability becomes more valuable to buyers."
      },
      {
        type: "bullets",
        title: "",
        items: [
          "Base case: Bloom gradually transitions from equipment sales toward more recurring infrastructure-like revenue.",
          "Bear case: electricity continues to be purchased mainly on cost, leaving Bloom as a traditional equipment supplier.",
          "Bull case: reliable electricity becomes scarce and valuable, allowing Bloom to price power based on guaranteed availability rather than generation cost.",
        ],
      },
      {
        type: "bullets",
        title: "What to monitor",
        items: [
          "Growth in recurring service and energy revenue relative to equipment sales",
          "Share of deployments tied to multi-year contracts",
          "Evidence of renewals or expansion by existing customers"
        ],
      },
      {
        type: "links",
        title: "Analysis",
        items: [
          {
            label: "Investment Memo",
            href: "https://docs.google.com/document/d/1H6Mw-zGTAux64LfsWOVjDJP5kCRUeNxsMnskD9Ht2qw/preview",
          },
          {
            label: "Model",
            href: "https://docs.google.com/spreadsheets/d/1lMTtfmkzAOEGjGOENvryru4kk0EdF4ptfA9htmZzC_Q/edit?usp=sharing"
          },
        ],
      },
    ],
  },

  {
    id: "ticker-snapshot",
    slug: "ticker-snapshot", // URL: /projects/ticker-snapshot
    title: "Ticker Snapshot",
    subtitle: "Can public-company research be compressed into a faster, more intuitive first-pass workflow?",
    tags: ["product", "finance", "engineering"],

    previewSections: [
      {
        type: "text",
        title: "TL;DR",
        body: "Ticker Snapshot is a lightweight research tool that turns a public ticker into a structured company overview. It pulls live financial data, calculates margins, leverage, and valuation metrics, then layers on bear / base / bull scenario projections to create a faster first-pass investment workflow."
      },
      {
        type: "bullets",
        title: "Key Points",
        items: [
          "Built to reduce the friction of going from ticker to initial view on a business.",
          "Combines live market data with derived financial metrics like gross margin, FCF margin, leverage, and valuation.",
          "Generates bear, base, and bull five-year scenarios with both a chart view and projection table.",
          "Exports a clean memo PDF so the analysis can be shared as a self-contained document rather than a screenshot of the app."
        ],
      },
      {
        type: "metrics",
        title: "Build",
        items: [
          {
            label: "Live app",
            value: "View deployed product",
            href: "https://ticker-snapshot.vercel.app/",
          },
          {
            label: "Source",
            value: "React + TypeScript + APIs",
            href: "https://github.com/vivianyyao/ticker-snapshot",
          },
        ],
      },
    ],

    sections: [
      {
        type: "text",
        title: "TL;DR",
        body: "I built Ticker Snapshot to replicate the earliest stage of analyst workflow in a lighter, faster interface. Instead of opening multiple tabs for profile data, statements, ratios, and scenario work, the tool assembles a company snapshot, derives key metrics, and frames possible outcomes in one place."
      },
      {
        type: "bullets",
        title: "What it does",
        items: [
          "Pulls live company profile, quote, income statement, cash flow statement, and balance sheet data through the Financial Modeling Prep API.",
          "Computes core operating and valuation metrics including revenue growth, gross margin, operating margin, free cash flow margin, net debt, and EV / EBITDA.",
          "Models five-year Bear, Base, and Bull scenarios with a projection table and overlaid line chart.",
          "Exports a formatted PDF memo so the output can be reviewed or shared outside the product."
        ],
      },
      {
        type: "metrics",
        title: "Key Decisions",
        items: [
          {
            label: "Why build this?",
            value:
              "To make company research feel less fragmented and more decision-oriented.",
          },
          {
            label: "What is differentiated?",
            value:
              "The tool does not just display raw data. It translates filings and quote data into an interpretable first-pass view with scenario framing.",
          },
          {
            label: "What was optimized for?",
            value:
              "Speed, clarity, and a workflow that feels useful to an operator, investor, or strategist rather than only a technical user.",
          },
          {
            label: "Where does the value come from?",
            value:
              "Reducing the time it takes to move from curiosity about a ticker to a structured opinion about the business.",
          },
        ],
      },
      {
        type: "text",
        title: "Product approach",
        body: "The app was intentionally scoped as a v1: one search, one company snapshot, one opinionated layout. I used live APIs for flexibility, computed fallbacks for valuation metrics when upstream fields were missing, and kept the interface deliberately minimal so the analysis stayed legible."
      },
      {
        type: "bullets",
        title: "What I learned",
        items: [
          "Shipping financial tools is as much about handling incomplete or inconsistent data as it is about UI.",
          "Small layout choices materially affect whether a dashboard feels analytical or noisy.",
          "A simple scenario engine can make static market data feel much more decision-useful."
        ],
      },
      {
        type: "bullets",
        title: "Next steps",
        items: [
          "Add more robust valuation and capital allocation metrics.",
          "Expand memo generation so exported output feels closer to a true first-draft investment note.",
          "Support installable app behavior and a more app-like experience through PWA or native wrapping."
        ],
      },
      {
        type: "links",
        title: "Project links",
        items: [
          {
            label: "Live app",
            href: "https://ticker-snapshot.vercel.app/",
          },
          {
            label: "GitHub repository",
            href: "https://github.com/vivianyyao/ticker-snapshot",
          },
        ],
      },
    ],
  },
];