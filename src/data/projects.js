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

import hero from "../assets/portfolio/mummeInteriors/hero.png";
import project1 from "../assets/portfolio/mummeInteriors/project1.png";
import project2 from "../assets/portfolio/mummeInteriors/project2.png";
import project3 from "../assets/portfolio/mummeInteriors/project3.png";
import work1 from "../assets/portfolio/mummeInteriors/work1.png";
import project from "../assets/portfolio/mummeInteriors/project.webp";
import work from "../assets/portfolio/mummeInteriors/work.webp";


const projects = [
  {
    slug: "mumme-interiors",
    title: "Mumme Interiors",
    subtitle: "Brand new website to showcase Matthew's portfolio",
    description:
      "Designed and built a fully custom portfolio website for Matthew Mumme, an interior designer and remodeler. The site includes a hero video header, project galleries with image and video content, and mobile-optimized layouts. It was built using React, TailwindCSS, and a custom routing structure to display detailed case studies.",
    images: [hero, work, project, project1, project2, project3, work1],
    preview: hero,
  },  
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
