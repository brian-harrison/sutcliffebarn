const photos = [
  {
    id: 0,
    url: "seating-outside-sauna.jpg",
    title: "Seating on the deck outside of the sauna",
    description: "Sit on the decking outside the sauna and enjoy the views of the surrounding hills .",
    width: "4032",
    height: "3024",
  },
  {
    id: 1,
    url: "sauna-general.jpg",
    title: "Sauna and spa",
    description: "The atmosphere and aroma of the panelled room make it a lovely place to relax after your sauna.",
    width: "3559",
    height: "4001",
  },
  {
    id: 2,
    url: "loungers-in-sauna.jpg",
    title: "Relax on the loungers after your sauna",
    description: "Relax on the loungers after your sauna and appreciate the view.",
    width: "3802",
    height: "3024",
  },
  {
    id: 3,
    url: "sauna-shower.jpg",
    title: "Sauna shower.",
    description: "The spacious sauna shower with its invigorating cold rain shower.",
    width: "4032",
    height: "3024",
  },
  {
    id: 18,
    url: "barn-owl.jpg",
    title: "Barn owl flying through the woods",
    description: "Barn owl unexpectedly photographed flying through the woods",
    width: "3000",
    height: "1999",
  },
  {
    id: 7,
    url: "winter-snow-at-sutcliffe-barn.jpg",
    title: "Winter snow at Sutcliffe Barn",
    description: "Winter snow at Sutcliffe Barn",
    width: "2500",
    height: "1406",
  },
  {
    id: 8,
    url: "view-from-the-bottom-of-garden.jpg",
    title: "View from the bottom of garden",
    description: "View from the bottom of the garden",
    width: "2500",
    height: "1406",
  },
  {
    id: 9,
    url: "sutcliffe-house-with-sutcliffe-barn-on-left.jpg",
    title: "Sutcliffe House with Sutcliffe Barn on the left",
    description: "17th century Sutcliffe House with Sutcliffe Barn on the left",
    width: "2500",
    height: "1665",
  },
  {
    id: 10,
    url: "sutcliffe-barn-back-view-entrance.jpg",
    title: "Sutcliffe Barn back view entrance",
    description: "Sutcliffe Barn rear view entrance",
    width: "2500",
    height: "1560",
  },
  {
    id: 25,
    url: "deer-in-the-garden.jpeg",
    title: "Frequent visitor in the garden",
    description: "We often see deer in the garden that live and bring up their young in our woods.",
    width: "4032",
    height: "3024",
  },
  {
    id: 11,
    url: "entrance-stable-door.jpg",
    description:
      "A stable door leads into the entrance of Sutcliffe Barn",
    width: "2500",
    height: "1850",
  },
  {
    id: 12,
    url: "dining-area.jpg",
    title: "Dining area",
    description: "The dining area with oak table and comfy upholstered chairs",
    width: "2500",
    height: "1668",
  },
  {
    id: 13,
    url: "sitting-room-to-kitchen.jpg",
    title: "Sitting room to kitchen",
    description: "The sitting room is just off the galley kitchen",
    width: "2500",
    height: "1668",
  },
  {
    id: 14,
    url: "sitting-room-and-dining-area.jpg",
    title: "Sitting room and dining area",
    description: "There is a large panelled living room that is open plan with a dining area",
    width: "2500",
    height: "1668",
  },
  {
    id: 4,
    url: "hebden-bridge-spilling-up-the-valley-sides.jpg",
    title: "The steep-sided valley of Hebden Bridge",
    description: "The town of Hebden Bridge nestles in the Pennine Hills",
    width: "2500",
    height: "1826",
  },
  {
    id: 5,
    url: "hebden-bridge-and-wavy-steps.jpg",
    title: "Hebden Bridge and wavey steps",
    description: "The centre of Hebden Bridge and its wavey riverside steps",
    width: "2500",
    height: "2396",
  },
  {
    id: 6,
    url: "heptonstall-in-the-distance-with-sutcliffe-barn-in-the-woods-far-left.jpg",
    title: "Heptonstall in the distance with Sutcliffe Barn in the woods on the far left",
    description: "Heptonstall in the distance with Sutcliffe Barn in the woods on the far left",
    width: "2500",
    height: "1168",
  },
  {
    id: 15,
    url: "panelled-wall-with-settle.jpg",
    title: "Panelled wall with settle",
    description: "Panelled wall with settle",
    width: "2500",
    height: "1645",
  },
  {
    id: 16,
    url: "our-drive-sutcliffe-barn-on-right-behind-trees.jpg",
    title: "Our drive leading to Sutcliffe Barn on the right behind the trees",
    description: "Our drive leading to Sutcliffe Barn on the right behind the trees",
    width: "2500",
    height: "1156",
  },
  {
    id: 17,
    url: "kitchen-towards-entrance.jpg",
    title: "Kitchen towards entrance",
    description: "The kitchen is open plan with the entrance",
    width: "2500",
    height: "1668",
  },
  {
    id: 19,
    url: "bedroom-to-dining-area.jpg",
    title: "Bedroom looking through to dining area",
    description: "The bedroom is just off the open-plan living/dining area",
    width: "2500",
    height: "2512",
  },
  {
    id: 20,
    url: "bathroom-sink.jpg",
    title: "Bathroom sink",
    description: "Bathroom sink with well illuminated vanity mirror",
    width: "2500",
    height: "3746",
  },
  {
    id: 21,
    url: "bedroom-fireplace-bookshelves.jpg",
    title: "Bedroom fireplace bookshelves",
    description: "Comfy reading area in the bedroom by the fireplace bookshelves",
    width: "2500",
    height: "1748",
  },
  {
    id: 22,
    url: "autumn-colours-in-the-garden.jpg",
    title: "Autumn colours in the garden",
    description: "Autumn colours in the garden",
    width: "2500",
    height: "1406",
  },
  {
    id: 23,
    url: "butterflies-in-the-garden-at-suttcliffe-barn.jpg",
    title: "Butterflies in the garden at Suttcliffe Barn",
    description: "Wildlife is in abundance in the garden at Sutcliffe Barn",
    width: "2500",
    height: "1563",
  },
  {
    id: 24,
    url: "autumn-walk-from-sutcliffe-barn.jpg",
    title: "Autumn walks from Sutcliffe Barn",
    description: "Autumn walks from Sutcliffe Barn",
    width: "2500",
    height: "1406",
  },
];

export default photos;
