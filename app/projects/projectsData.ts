// app/projects/projectsData.ts

export type CaseSection =
  | { type: "text"; title: string; body: string }
  | { type: "bullets"; title: string; items: string[] }
  | { type: "metrics"; title: string; items: { label: string; value: string }[] }
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
    title: "Bloom Energy Case Study",
    subtitle: "Reliability as a priced attribute, not an assumption.",
    tags: ["Strategy", "Modeling", "Writing"],

    previewSections: [
      {
        type: "text",
        title: "One-liner",
        body: "The bet: reliability becomes priced as downtime costs rise, letting Bloom monetize its installed base via recurring contracts.",
      },
      {
        type: "bullets",
        title: "Key points",
        items: [
          "Shift from equipment sales → infrastructure-like recurring revenue",
          "Decision triggers: contract mix, attach/renewals, evidence of reliability premium",
          "Main risk: buyers stay cost-only, limiting installed-base monetization",
        ],
      },
      {
        type: "metrics",
        title: "Outputs",
        items: [
          { label: "Model", value: "3 scenarios + sensitivities" },
          { label: "Memo", value: "Thesis + triggers + risks" },
        ],
      },
    ],

    sections: [
      {
        type: "text",
        title: "TL;DR",
        body: "Bloom is shifting from one-time equipment sales toward an installed-base model where recurring service and energy contracts drive lifetime value. The core bet is a structural change: electricity reliability becomes a priced attribute as AI compute demand, electrification, and grid constraints increase the cost of downtime.",
      },
      {
        type: "bullets",
        title: "What I built",
        items: [
          "3-scenario framework (Base / Bull / Bear) tied to clear decision triggers",
          "Installed-base monetization view: service attach, contract duration, and margin sensitivity",
          "Investment memo with a falsifiable thesis (what would prove it wrong early)",
        ],
      },
      {
        type: "metrics",
        title: "Key questions answered",
        items: [
          {
            label: "What must be true?",
            value:
              "Buyers pay for uptime (reliability) rather than optimizing only for price",
          },
          {
            label: "Where does value accrue?",
            value: "Recurring contracts on the installed base (service + energy)",
          },
          {
            label: "What breaks the thesis?",
            value: "Procurement stays cost-only; attach/renewal rates don’t rise",
          },
          {
            label: "How to test early?",
            value:
              "More MW sold under multi-year contracts + evidence of renewals/expansions",
          },
        ],
      },
      {
        type: "text",
        title: "Context",
        body: "Historically, many electricity buyers treat power like a commodity and optimize primarily on cost. Bloom’s upside case requires a shift in buyer behavior: reliability becomes something customers explicitly pay for because downtime is more expensive than the premium for guaranteed availability.",
      },
      {
        type: "bullets",
        title: "Model structure",
        items: [
          "Start with installed base (MW) and annual new deployments",
          "Translate deployments into recurring revenue via contract attachment and duration",
          "Model margin expansion from utilization, service gross margin, and operating leverage as the base grows",
          "Run sensitivities on attach rate, contract length, churn, and reliability premium assumptions",
        ],
      },
      {
        type: "bullets",
        title: "Decision triggers",
        items: [
          "Bull: repeat wins where uptime is a deciding factor and multi-year contracts become a larger share of bookings",
          "Bull: improving attach + renewal behavior that points to durable installed-base monetization",
          "Bear: demand remains primarily price-driven, leading to lumpy equipment sales and weaker recurring mix",
          "Bear: attach rates/renewals stagnate or churn rises, limiting lifetime value per deployed MW",
        ],
      },
      {
        type: "text",
        title: "Key insight",
        body: "If electricity procurement remains primarily cost-driven, Bloom likely stays an equipment supplier with cyclical, project-based revenue. If reliability becomes priced (like insurance), the installed base can behave more like infrastructure: recurring cash flows, higher lifetime margins, and improved durability of earnings.",
      },
      {
        type: "links",
        title: "Artifacts",
        items: [
          {
            label: "Investment Memo",
            href: "https://docs.google.com/document/d/1H6Mw-zGTAux64LfsWOVjDJP5kCRUeNxsMnskD9Ht2qw/preview",
          },
          { label: "Model screenshots (add link)", href: "#" },
          { label: "Sensitivity table (add link)", href: "#" },
        ],
      },
    ],
  },
];
