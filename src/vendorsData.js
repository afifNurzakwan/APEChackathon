
import { ratanrug, sarangsemut, ratanbag } from "./assets/img";


const dataVendors = [
  {
    id: 1,
    title: "Vendor 1",
    group: "Iban",
    content:
      "This vendor produces ratan bags as a living coming from his passion for his heritage",
    image: ratanbag,
    heritage: [
      {
        product: "Ratan Bags",
      },
    ],
  },
  {
    id: 2,
    title: "Vendor 2",
    group: "Iban",
    content:
      "This crunchy and sweet sarang semut made out of flour and sugar along with their secret ingredient makes up a very sweet savoury delicacy",
    image: sarangsemut,
    heritage: [
      {
        product: "Sarang Semut",
      },
    ],
  },
  {
    id: 3,
    title: "Vendor 3",
    group: "Iban",
    content:
      "Hand weaved ratan rugs that would look aesthetically pleasing in a modern house. This is a work of percision and art",
    image: ratanrug,
    heritage: [
      {
        product: "Ratan Rug",
      },
    ],
  },
];

export default dataVendors;
