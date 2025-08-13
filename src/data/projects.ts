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
    galleryImage: "/gallery/project1.jpg",
  },
  {
    slug: "custom-wood-sink-countertop",
    title: "Custom Wood Sink Countertop",
    description: "Light wood countertop with an undermount sink designed for a small bathroom remodel.",
    tags: ["countertops", "bathroom", "sink"],
    galleryImage: "/gallery/project2.JPG",
  },
  {
    slug: "rolling-storage-box",
    title: "Rolling Storage Box",
    description: "Durable custom plywood box on casters for mobile storage. Ideal for garage tools or workshop supplies.",
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
    title: "Modern Nightstands",
    description: "Pair of sleek custom-built nightstands with clean lines and smooth drawer action.",
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
  {
    slug: "barn-exterior-restoration",
    title: "Barn Exterior Restoration",
    description: "Rustic barn exterior revitalized with updated trim and structural repairs. Focus on preserving character while improving durability.",
    tags: ["exterior", "restoration", "barn"],
    galleryImage: "/gallery/project8.JPG",
  },
  {
    slug: "pergola-framing",
    title: "Pergola Framing",
    description: "Large outdoor pergola with heavy timber and precise joinery, foundation and support structure.",
    tags: ["outdoor", "pergola", "timber"],
    galleryImage: "/gallery/project9.JPG",
  },
  {
    slug: "exterior-staircase-build",
    title: "Exterior Staircase Build",
    description: "Outdoor staircase built on sloped terrain, framed and supported for weather durability.",
    tags: ["exterior", "stairs", "outdoor"],
    galleryImage: "/gallery/project10.JPG",
  },
  {
    slug: "custom-woodworking",
    title: "Custom Woodworking",
    description: "Precision craftsmanship in custom furniture and built-ins for your home.",
    tags: ["custom", "furniture", "woodworking"],
    galleryImage: "/gallery/project11.JPG",
  },
  {
    slug: "custom-project",
    title: "Custom Project",
    description: "Another example of our custom carpentry work and attention to detail.",
    tags: ["custom", "woodworking"],
    galleryImage: "/gallery/project12.JPG",
  },
];