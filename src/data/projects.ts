export type Project = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  galleryImage?: string;
};

export const projects = [
  {
    slug: "custom-powder-room-cabinet",
    title: "Custom Powder Room Cabinet",
    description: "Built-in wall cabinet with sliding bypass doors and floating shelf, crafted from poplar wood.",
    tags: ["cabinets", "built-ins", "bathroom"],
    galleryImage: "/gallery/project1.JPG",
  },
  {
    slug: "custom-wood-sink-countertop",
    title: "Custom Wood Sink Countertop",
    description: "Poplar wood countertop with an undermount sink designed for a floating vanity in powder room.",
    tags: ["countertops", "bathroom", "sink"],
    galleryImage: "/gallery/project2.JPG",
  },
  {
    slug: "rolling-storage-box",
    title: "Rolling Storage Box",
    description: "Durable custom plywood box on wheels, stows away under breakfast nook bench",
    tags: ["storage", "workshop", "mobile"],
    galleryImage: "/gallery/project3.JPG",
  },
  {
    slug: "kitchen-pull-out-pantry-drawers",
    title: "Kitchen Pull-Out Pantry Drawers",
    description: "Tall kitchen pantry cabinet fitted with custom pull-out drawers to improve accessibility and maximize storage.",
    tags: ["kitchen", "pantry", "storage"],
    galleryImage: "/gallery/project4.JPG",
  },
  {
    slug: "modern-nightstands",
    title: "Modern Floating Cherry Nightstands",
    description: "Pair of sleek custom-built nightstands with clean lines and smooth drawer action, mounts on wall",
    tags: ["furniture", "bedroom", "nightstands"],
    galleryImage: "/gallery/project5.jpg",
  },
  {
    slug: "shaker-style-kitchen-cabinets",
    title: "Shaker Style Kitchen Cabinets",
    description: "White kitchen cabinets in classic shaker style, fitted with soft-close hardware.",
    tags: ["kitchen", "cabinets", "shaker"],
    galleryImage: "/gallery/project6.JPG",
  },
  {
    slug: "interior-cabinet-shelving",
    title: "Interior Cabinet Shelving",
    description: "Adjustable shelving installed inside kitchen or pantry cabinets for flexible storage of dishware and supplies.",
    tags: ["shelving", "kitchen", "storage"],
    galleryImage: "/gallery/project7.JPG",
  },

  // UPDATED to match image: floating desk, not just shelf
  {
    slug: "floating-desk-office",
    title: "Custom Floating Desk",
    description: "Wall-mounted wooden floating desk with clean modern lines, designed for a home office workspace.",
    tags: ["desk", "office", "custom", "woodworking"],
    galleryImage: "/gallery/project8.JPG",
  },

  {
    slug: "pergola-framing",
    title: "Framing in progress",
    description: "Tall 6x6 posts resting on concrete sonotube footings, braced to the building, added let-in beams, heavy timber and precise joinery.",
    tags: ["outdoor", "pergola", "timber"],
    galleryImage: "/gallery/project9.JPG",
  },
  {
    slug: "exterior-staircase-build",
    title: "2nd story balcony",
    description: "Framing exterior stairs and observation/relaxing deck in progress",
    tags: ["exterior", "stairs", "outdoor"],
    galleryImage: "/gallery/project10.JPG",
  },
  {
    slug: "custom-woodworking",
    title: "Custom 2nd story balcony",
    description: "Enjoy the breeze, sunshine and view from this 2nd story deck with stairs, showcasing traditional joinery techniques.",
    tags: ["custom", "furniture", "woodworking"],
    galleryImage: "/gallery/project11.JPG",
  },
  {
    slug: "custom-project",
    title: "Floating Cherry Shelving",
    description: "Specialized carpentry work demonstrating attention to detail and quality craftsmanship.",
    tags: ["custom", "woodworking"],
    galleryImage: "/gallery/project12.JPG",
  },
  {
    slug: "firewood-storage-shed",
    title: "Firewood Storage Shed",
    description: "Open-air firewood shed with slatted siding and pitched cedar shingle roof for airflow, aesthetics and weather protection.",
    tags: ["outdoor", "shed", "storage"],
    galleryImage: "/gallery/project13.JPG",
  },
  {
    slug: "blue-kitchen-cabinets",
    title: "Custom Shaker Style Kitchen Cabinets",
    description: "Custom kitchen remodel with light blue cabinetry, with full extension soft close slides, teak butcher block island countertops",
    tags: ["kitchen", "remodel", "cabinets", "countertops"],
    galleryImage: "/gallery/project14.JPG",
  },
  {
    slug: "blue-kitchen-cabinets-2",
    title: "Blue Kitchen Cabinets - Additional View",
    description: "Another perspective of the blue kitchen cabinets showing different angles and details of the custom cabinetry work.",
    tags: ["kitchen", "cabinets", "blue", "custom"],
    galleryImage: "/gallery/project15.JPG",
  },
  {
    slug: "elevated-deck-privacy-wall",
    title: "Elevated Deck with Privacy Wall",
    description: "Custom elevated deck featuring a privacy wall, windbreak and shade structure all in one, and staircase with railings",
    tags: ["deck", "outdoor", "privacy", "stairs"],
    galleryImage: "/gallery/project16.JPG",
  },
  {
    slug: "hallway-built-ins",
    title: "Den Built-In",
    description: "Custom built-in storage with cubbies, cabinets, and natural wood countertop with secret pull out standing desk surface for a modern upgrade.",
    tags: ["built-ins", "storage", "hallway"],
    galleryImage: "/gallery/project17.JPG",
  },
  {
    slug: "outdoor-stage-platform",
    title: "Ground level entertaining deck",
    description: "Large raised deck platform with composite decking and built-in bench for events and gatherings.",
    tags: ["outdoor", "deck", "stage"],
    galleryImage: "/gallery/project18.JPG",
  },
  {
    slug: "composite-bench-deck",
    title: "Composite Bench on Deck",
    description: "Custom light gray composite bench with wooden frame, positioned on a matching composite deck.",
    tags: ["bench", "deck", "composite", "outdoor"],
    galleryImage: "/gallery/project19.JPG",
  },
  {
    slug: "additional-custom-project",
    title: "Cherry cabinet",
    description: "Built a cherry cabinet on the right to match existing cabinetry on the left, showcasing quality craftsmanship and attention to detail.",
    tags: ["custom", "woodworking", "carpentry"],
    galleryImage: "/gallery/project20.JPG",
  },
];