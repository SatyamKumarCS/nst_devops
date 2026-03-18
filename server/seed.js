const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = [
  {
    name: "Minimalist Smartwatch",
    description: "A sleek, modern smartwatch with vital health tracking, a gorgeous OLED display, and 7-day battery life.",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Acoustic Noise-Cancelling Headphones",
    description: "Experience silence with premium active noise cancellation and high-fidelity lossless audio.",
    price: 299.00,
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Ergonomic Mechanical Keyboard",
    description: "Custom-tuned switches for the ultimate typing experience, featuring RGB backlighting and tactile feedback.",
    price: 159.50,
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Ultra-Wide Curve Monitor",
    description: "A 34-inch immersive display designed for creative professionals and gaming enthusiasts.",
    price: 649.99,
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Leather Executive Briefcase",
    description: "Handcrafted Italian leather briefcase that blends timeless style with modern functionality.",
    price: 245.00,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Smart Ceramic Coffee Mug",
    description: "Keep your drinks at the perfect temperature for hours with this app-controlled ceramic mug.",
    price: 89.00,
    imageUrl: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Professional Mirrorless Camera",
    description: "Capture stunning 4K video and high-resolution stills with industry-leading autofocus performance.",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Modular Studio Speakers",
    description: "Crystal clear audio production with adjustable EQ and premium wooden casing.",
    price: 450.00,
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Portable Power Station",
    description: "High-capacity power for your adventures, capable of charging laptops, phones, and mini-fridges.",
    price: 399.00,
    imageUrl: "https://images.unsplash.com/photo-1593003023021-39e6a2561571?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Minimalist Desk Lamp",
    description: "Touch-controlled LED lamp with adjustable brightness and wireless charging base.",
    price: 75.00,
    imageUrl: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Bamboo Standing Desk",
    description: "Eco-friendly height-adjustable desk designed for peak productivity and ergonomic comfort.",
    price: 599.00,
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Noise-Cancelling Earbuds",
    description: "Compact, true wireless earbuds with immersive sound and all-day comfort.",
    price: 179.00,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Architectural Backpack",
    description: "Functional design for the modern urban explorer, featuring weather-resistant materials.",
    price: 135.00,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Smart Home Hub",
    description: "Control your entire home with a single, elegant interface and advanced voice recognition.",
    price: 129.00,
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Stainless Steel Espresso Machine",
    description: "Barista-quality coffee at home with precise temperature control and manual steam wand.",
    price: 499.00,
    imageUrl: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Leather Bound Journal",
    description: "Premium paper for your thoughts and designs, wrapped in genuine distressed leather.",
    price: 45.00,
    imageUrl: "https://images.unsplash.com/photo-1544816153-12ad5d71430a?auto=format&fit=crop&q=80&w=400"
  }
];

async function main() {
  console.log("Cleaning up database...");
  await prisma.product.deleteMany({});
  
  console.log("Seeding products...");
  for (const p of products) {
    await prisma.product.create({ data: p });
  }

  console.log(`Successfully seeded ${products.length} products!`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
