// ------------------------------------------------------------------
// Edit the business details here. Every page reads from this file.
// ------------------------------------------------------------------
export const BUSINESS_NAME = 'Pyramid Enterprises';
export const TAGLINE = 'IT Infrastructure Solution';
export const CONTACT_PERSON = 'S. Selvakannan';

export const PHONE_DISPLAY = '+91 91764 72666';
export const PHONE_TEL = '+919176472666';
export const WHATSAPP_NUMBER = '919176472666';
export const EMAIL = 'info@pyramidenterprises.co.in';
export const WEBSITE = 'www.pyramidenterprises.co.in';

export const ADDRESS_LINES = [
  '#13/1, West Anna Nagar, 8th Street,',
  'Narayanapuram, Pallikaranai,',
  'Chennai - 600 100',
];
export const ADDRESS = ADDRESS_LINES.join(' ');
export const MAPS_QUERY =
  'Pyramid Enterprises, West Anna Nagar, Narayanapuram, Pallikaranai, Chennai 600100';
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// ------------------------------------------------------------------
// Services (used on Home, Services and footer)
// ------------------------------------------------------------------
export const SERVICES = [
  {
    id: 'laptops-desktops',
    title: 'Laptops & desktops',
    icon: 'laptop',
    summary: 'New laptops and desktops chosen for how you actually work, set up and ready to use.',
    points: [
      'Laptops and desktops for home, office and school',
      'Custom-built PCs to your budget and workload',
      'Windows and software installation on delivery',
      'Upgrades: SSD, RAM, storage and graphics',
    ],
  },
  {
    id: 'repair',
    title: 'Repair & upgrades',
    icon: 'wrench',
    summary: 'Diagnosis and repair for slow, noisy, overheating or dead machines.',
    points: [
      'Laptop and desktop hardware repair',
      'Screen, keyboard, battery and charger replacement',
      'Operating system reinstall and virus removal',
      'Data backup and recovery from failing drives',
    ],
  },
  {
    id: 'printers',
    title: 'Printers & scanners',
    icon: 'printer',
    summary: 'Printers supplied, set up on your network, and kept running.',
    points: [
      'Inkjet, ink-tank, laser and multifunction printers',
      'Setup on USB, Wi-Fi or office network',
      'Cartridge and toner supply',
      'Servicing for paper jams, faded prints and errors',
    ],
  },
  {
    id: 'cctv',
    title: 'CCTV surveillance',
    icon: 'camera',
    summary: 'Cameras planned around your entrances, counters and blind spots.',
    points: [
      'Dome and bullet camera supply and installation',
      'DVR / NVR setup with remote viewing on your phone',
      'Cabling, power and storage sizing',
      'Servicing and fixes for existing CCTV systems',
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: 'wifi',
    summary: 'Wired and wireless networks that stay up when the whole team is online.',
    points: [
      'LAN and structured cabling for offices and shops',
      'Wi-Fi coverage planning, routers and access points',
      'Switches, racks and patch panels',
      'Troubleshooting slow or dropping connections',
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & peripherals',
    icon: 'chip',
    summary: 'The parts and accessories that keep a workspace going.',
    points: [
      'Monitors, keyboards, mice and cables',
      'UPS and power backup',
      'SSDs, hard disks and memory',
      'Replacement parts for desktops and laptops',
    ],
  },
];

// The four layers shown in the interactive pyramid on the Home page.
// Top to bottom. "serviceId" links to a section on the Services page.
export const STACK_TIERS = [
  {
    id: 'cctv',
    short: 'CCTV',
    title: 'CCTV & security',
    text: 'Cameras, recorders and remote viewing, so you can see your premises from your phone.',
    serviceId: 'cctv',
  },
  {
    id: 'network',
    short: 'Networking',
    title: 'Networking',
    text: 'Cabling, Wi-Fi and switches that connect every device and keep the connection steady.',
    serviceId: 'networking',
  },
  {
    id: 'print',
    short: 'Printers',
    title: 'Printers & peripherals',
    text: 'Printers, scanners, monitors and power backup that your daily work depends on.',
    serviceId: 'printers',
  },
  {
    id: 'devices',
    short: 'Laptops & PCs',
    title: 'Laptops & desktops',
    text: 'The base of every setup: reliable computers, configured and supported after the sale.',
    serviceId: 'laptops-desktops',
  },
];

// ------------------------------------------------------------------
// Products (no prices on the site: visitors ask for a quote)
// ------------------------------------------------------------------
export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'laptops', label: 'Laptops' },
  { id: 'desktops', label: 'Desktops' },
  { id: 'printers', label: 'Printers' },
  { id: 'cctv', label: 'CCTV' },
  { id: 'networking', label: 'Networking' },
  { id: 'accessories', label: 'Accessories' },
];

export const PRODUCTS = [
  { id: 'p1', category: 'laptops', icon: 'laptop', name: 'Business laptops', text: 'Durable laptops for office work, accounts and video calls.', tags: ['Office use', 'Warranty'] },
  { id: 'p2', category: 'laptops', icon: 'laptop', name: 'Student & home laptops', text: 'Affordable laptops for classes, browsing and everyday tasks.', tags: ['Budget friendly'] },
  { id: 'p3', category: 'laptops', icon: 'laptop', name: 'High-performance laptops', text: 'Faster processors and graphics for design, editing and development.', tags: ['Creators', 'Developers'] },
  { id: 'p4', category: 'desktops', icon: 'desktop', name: 'Office desktops', text: 'Branded and assembled desktops for billing, accounts and daily office use.', tags: ['Branded', 'Assembled'] },
  { id: 'p5', category: 'desktops', icon: 'desktop', name: 'Custom-built PCs', text: 'Parts picked to your workload and budget, assembled and tested.', tags: ['Made to order'] },
  { id: 'p6', category: 'desktops', icon: 'desktop', name: 'All-in-one PCs', text: 'Screen and computer in one body for reception desks and small counters.', tags: ['Saves space'] },
  { id: 'p7', category: 'printers', icon: 'printer', name: 'Ink-tank printers', text: 'Low cost per page for homes, schools and small offices.', tags: ['Low running cost'] },
  { id: 'p8', category: 'printers', icon: 'printer', name: 'Laser printers', text: 'Fast, sharp black-and-white or colour printing for documents.', tags: ['High volume'] },
  { id: 'p9', category: 'printers', icon: 'printer', name: 'Multifunction printers', text: 'Print, scan and copy from a single machine.', tags: ['Print, scan, copy'] },
  { id: 'p10', category: 'cctv', icon: 'camera', name: 'Dome & bullet cameras', text: 'Indoor and outdoor cameras for shops, homes and offices.', tags: ['Indoor', 'Outdoor'] },
  { id: 'p11', category: 'cctv', icon: 'camera', name: 'DVR / NVR recorders', text: 'Recorders sized to the number of cameras and the days of footage you need.', tags: ['Remote viewing'] },
  { id: 'p12', category: 'cctv', icon: 'camera', name: 'Complete CCTV kits', text: 'Cameras, recorder, storage and cables bundled for 4, 8 or 16 cameras.', tags: ['Installation available'] },
  { id: 'p13', category: 'networking', icon: 'wifi', name: 'Wi-Fi routers & access points', text: 'Coverage for homes, shops and multi-room offices.', tags: ['Wi-Fi'] },
  { id: 'p14', category: 'networking', icon: 'server', name: 'Switches, racks & cabling', text: 'Network switches, patch panels, racks and LAN cable for wired setups.', tags: ['Wired LAN'] },
  { id: 'p15', category: 'accessories', icon: 'bolt', name: 'UPS & power backup', text: 'Keep computers, routers and CCTV running through power cuts.', tags: ['Backup'] },
  { id: 'p16', category: 'accessories', icon: 'chip', name: 'SSD, hard disks & memory', text: 'Storage and RAM upgrades to speed up an older machine.', tags: ['Upgrades'] },
  { id: 'p17', category: 'accessories', icon: 'desktop', name: 'Monitors & peripherals', text: 'Monitors, keyboards, mice, webcams, headsets and cables.', tags: ['Everyday kit'] },
];

// ------------------------------------------------------------------
// How a job runs (this is a real sequence, so it is numbered)
// ------------------------------------------------------------------
export const PROCESS = [
  { title: 'Tell us what you need', text: 'Call, WhatsApp or fill in the form. A short chat is enough to understand the job.' },
  { title: 'Get a clear quote', text: 'You receive the items, quantities and cost in writing before anything is ordered.' },
  { title: 'Supply and installation', text: 'We deliver, install, configure and test everything so it works on day one.' },
  { title: 'Support after the job', text: 'If something stops working later, call the same number and we sort it out.' },
];

export const WHY = [
  { title: 'One team for the whole setup', text: 'Computers, printers, CCTV and networking from a single supplier, so nobody passes the problem to someone else.' },
  { title: 'Advice that fits your budget', text: 'We recommend what suits the work, not the most expensive option on the shelf.' },
  { title: 'Quotes in writing', text: 'You see what you are paying for before we start.' },
  { title: 'Local and reachable', text: 'Based in Pallikaranai, Chennai, with a phone that gets answered when something goes wrong.' },
];

export const waLink = (text = 'Hello Pyramid Enterprises, I would like to know more about your services.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
