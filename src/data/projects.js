import Ari1 from "../assets/Ari1.gif";
import Ari2 from "../assets/Ari2.gif";
import Ari3 from "../assets/Ari3.gif";
import Ari4 from "../assets/Ari4.gif";
import Blue1 from "../assets/Blue1.gif";
import Blue2 from "../assets/Blue2.gif";
import Blue3 from "../assets/Blue3.gif";
import Blue4 from "../assets/Blue4.gif";
import MVP1 from "../assets/MVP1.png";
import MVP2 from "../assets/MVP2.png";
import MVP3 from "../assets/MVP3.png";
import MVP4 from "../assets/MVP4.png";

const projects = [
  {
    slug: "modern-shopping-site",
    title: "Modern Shopping Site",
    subtitle: "Image Gallery and Product View",
    description:
      "A fully featured image gallery and Q&A section for an e-commerce product page, complete with zoom magnifier and product variant selection.",
    images: [Ari1, Ari2, Ari3, Ari4],
    preview: Ari1,
  },
  {
    slug: "blue-ocean",
    title: "Free Craigslist Clone",
    subtitle: "Geo-tagged Listings + Auth",
    description:
      "A community donation app featuring geolocation, listing creation, and Google Maps API integration.",
    images: [Blue1, Blue2, Blue3, Blue4],
    preview: Blue1,
  },
  {
    slug: "build-better",
    title: "Deckbuilder for Magic: The Gathering",
    subtitle: "Card Search, Import, and Commander UI",
    description:
      "A tool to create and manage Magic: The Gathering decks with card search, import, and commander preview functionality.",
    images: [MVP1, MVP2, MVP3, MVP4],
    preview: MVP1,
  },
];

export default projects;
