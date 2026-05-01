import ballPens from "@/assets/ball-pens.jpg";
import buttonPens from "@/assets/button-pens.jpg";
import metallicPens from "@/assets/metallic-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";
import juteBags from "@/assets/jute-bags.jpg";
import penCopper from "@/assets/pen-copper.jpg";
import penBlackGold from "@/assets/pen-black-gold.jpg";
import penSilverClick from "@/assets/pen-silver-click.jpg";
import penBlueGold from "@/assets/pen-blue-gold.jpg";
import penBronzePattern from "@/assets/pen-bronze-pattern.jpg";
import penNavyRosegold from "@/assets/pen-navy-rosegold.jpg";
import penCopperMatte from "@/assets/pen-copper-matte.jpg";
import penBlackMatte from "@/assets/pen-black-matte.jpg";
import penGold from "@/assets/pen-gold.jpg";
import penBlackExecutive from "@/assets/pen-black-executive.jpg";
import penDualTone1 from "@/assets/pen-dual-tone-1.jpg";
import penDualTone2 from "@/assets/pen-dual-tone-2.jpg";
import retractablePen1 from "@/assets/retractable-pen-1.jpg";
import retractablePen2 from "@/assets/retractable-pen-2.jpg";
import retractablePen3 from "@/assets/retractable-pen-3.jpg";
import retractablePen4 from "@/assets/retractable-pen-4.jpg";
import retractablePen5 from "@/assets/retractable-pen-5.jpg";
import retractablePen6 from "@/assets/retractable-pen-6.jpg";
import retractablePen7 from "@/assets/retractable-pen-7.jpg";
import retractablePen8 from "@/assets/retractable-pen-8.jpg";
import retractablePen9 from "@/assets/retractable-pen-9.jpg";
import retractablePen10 from "@/assets/retractable-pen-10.jpg";
import juteBag1 from "@/assets/jute-bag-1.jpg";
import juteBag2 from "@/assets/jute-bag-2.jpg";
import juteBag3 from "@/assets/jute-bag-3.jpg";
import juteBag4 from "@/assets/jute-bag-4.jpg";
import juteBag5 from "@/assets/jute-bag-5.jpg";
import juteBag6 from "@/assets/jute-bag-6.jpg";
import juteBag7 from "@/assets/jute-bag-7.jpg";
import juteBag8 from "@/assets/jute-bag-8.jpg";
import juteBag9 from "@/assets/jute-bag-9.jpg";
import juteBag10 from "@/assets/jute-bag-10.jpg";
import juteBag11 from "@/assets/jute-bag-11.jpg";
import juteBag12 from "@/assets/jute-bag-12.jpg";
import juteBag13 from "@/assets/jute-bag-13.jpg";
import juteBag14 from "@/assets/jute-bag-14.jpg";
import juteBag15 from "@/assets/jute-bag-15.jpg";
import juteBag16 from "@/assets/jute-bag-16.jpg";
import juteBag17 from "@/assets/jute-bag-17.jpg";
import juteBag18 from "@/assets/jute-bag-18.jpg";
import juteBag19 from "@/assets/jute-bag-19.jpg";
import juteBag20 from "@/assets/jute-bag-20.jpg";
import ballPen13 from "@/assets/ball-pen-13.jpg";
import ballPen14 from "@/assets/ball-pen-14.jpg";
import ballPen15 from "@/assets/ball-pen-15.jpg";
import ballPen16 from "@/assets/ball-pen-16.jpg";
import ballPen17 from "@/assets/ball-pen-17.jpg";
import ballPen18 from "@/assets/ball-pen-18.jpg";
import ballPen19 from "@/assets/ball-pen-19.jpg";
import ballPen20 from "@/assets/ball-pen-20.jpg";
import ballPen21 from "@/assets/ball-pen-21.jpg";
import ballPen22 from "@/assets/ball-pen-22.jpg";

export type GalleryItem = { image: string; name: string };

export type ProductCategory = {
  slug: string;
  image: string;
  title: string;
  desc: string;
  longDesc?: string;
  specs: string[];
  moq: string;
  gallery: GalleryItem[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "ball-pens",
    image: ballPens,
    title: "Ball Pens",
    desc: "High-quality plastic ball pen manufacturer offering smooth-writing pens for bulk orders, office stationery, and wholesale distribution.",
    longDesc: "Explore our full Ball Pens collection — smooth-writing oil-based ink pens with a variety of body styles, cap colours, and grip designs. Ideal for promotional campaigns, office supply, and wholesale export.",
    specs: ["Ink: Oil-based", "Tip: 0.5mm – 1.0mm", "Body: Plastic / Metal"],
    moq: "10,000 units",
    gallery: [
      { image: ballPen13, name: "Orange Cap Ball Pen" },
      { image: ballPen14, name: "Blue Stick Ball Pen" },
      { image: ballPen15, name: "Green Striped Ball Pen" },
      { image: ballPen16, name: "Sky Blue Ball Pen" },
      { image: ballPen17, name: "Blue Cap White Body Pen" },
      { image: ballPen18, name: "Black Click Pen" },
      { image: ballPen19, name: "Blue Cap Clear Body Pen" },
      { image: ballPen20, name: "Blue Capped Ball Pen" },
      { image: ballPen21, name: "Blue Grip Ball Pen" },
      { image: ballPen22, name: "Blue Striped Ball Pen" },
    ],
  },
  {
    slug: "click-retractable-pens",
    image: buttonPens,
    title: "Click / Retractable Pens",
    desc: "Retractable pen supplier with sleek push-button designs, ergonomic grip — ideal for promotional and office use.",
    longDesc: "Push-button retractable pens with ergonomic grips and contemporary designs — perfect for branded promotions, conferences, and office distribution.",
    specs: ["Retractable mechanism", "Ergonomic grip", "Body: Plastic / Metal"],
    moq: "10,000 units",
    gallery: [
      { image: retractablePen1, name: "Black Matte Click Pen" },
      { image: retractablePen2, name: "Lime Green Click Pen" },
      { image: retractablePen3, name: "White & Green Click Pen" },
      { image: retractablePen4, name: "Black Classic Click Pen" },
      { image: retractablePen5, name: "Orange Grip Click Pen" },
      { image: retractablePen6, name: "White NovoMed Pen" },
      { image: retractablePen7, name: "White & Blue Click Pen" },
      { image: retractablePen8, name: "White Silver Click Pen" },
      { image: retractablePen9, name: "Blue Cap Ball Pen" },
      { image: retractablePen10, name: "White Blue Cap Pen" },
    ],
  },
  {
    slug: "metallic-ball-pens",
    image: metallicPens,
    title: "Metallic Ball Pens",
    desc: "Premium corporate gift pens supplier — full-metal finish ball pens for executive gifting and brand promotion.",
    longDesc: "Premium full-metal pens with refined finishes — copper, rose gold, matte black, dual-tone and more. Built for executive gifting and luxury brand promotion.",
    specs: ["Ink: Oil-based", "Tip: 0.7mm – 1.0mm", "Body: Full Metal"],
    moq: "5,000 units",
    gallery: [
      { image: penCopper, name: "Copper Finish Ball Pen" },
      { image: penBlackGold, name: "Black & Gold Ball Pen" },
      { image: penSilverClick, name: "Silver Click Pen" },
      { image: penBlueGold, name: "Blue & Gold Ball Pen" },
      { image: penBronzePattern, name: "Bronze Pattern Ball Pen" },
      { image: penNavyRosegold, name: "Navy Rose Gold Ball Pen" },
      { image: penCopperMatte, name: "Copper Matte Ball Pen" },
      { image: penBlackMatte, name: "Black Matte Ball Pen" },
      { image: penGold, name: "Gold Finish Ball Pen" },
      { image: penBlackExecutive, name: "Black Executive Ball Pen" },
      { image: penDualTone1, name: "Dual Tone Ball Pen" },
      { image: penDualTone2, name: "Dual Tone Cap Pen" },
    ],
  },
  {
    slug: "custom-logo-pens",
    image: customPens,
    title: "Custom Logo Pens",
    desc: "Custom printed pens supplier offering private-label pens with laser engraving, logo branding, and premium gift packaging.",
    longDesc: "Private-label pens with laser engraving, pad printing, and premium gift packaging — tailored to your brand identity and corporate gifting needs.",
    specs: ["Custom engraving", "Premium gift boxes", "Tailored specifications"],
    moq: "2,000 units",
    gallery: [],
  },
  {
    slug: "jute-bags",
    image: juteBags,
    title: "Jute Bags",
    desc: "Premium eco-friendly jute bags for export — ideal for retail packaging, corporate gifting, and sustainable branding solutions.",
    longDesc: "Natural, sustainable jute bags in multiple sizes and styles — designed for retail, gifting, and eco-conscious branding.",
    specs: ["Material: Natural Jute", "Custom printing available", "Multiple sizes & styles"],
    moq: "5,000 units",
    gallery: [],
  },
  {
    slug: "printed-jute-bags",
    image: juteBag1,
    title: "Printed Jute Bags",
    desc: "Custom printed jute bags with vibrant designs — perfect for retail branding, promotional events, corporate gifting, and eco-conscious packaging.",
    longDesc: "Vibrant full-colour printed jute bags in a wide range of artistic designs — perfect for retail, promotions, and gifting.",
    specs: ["Material: Natural Jute", "Full-color custom printing", "Multiple sizes & handle styles"],
    moq: "3,000 units",
    gallery: [
      { image: juteBag1, name: "Girls Can Do Anything" },
      { image: juteBag2, name: "Fairy Mushroom Design" },
      { image: juteBag3, name: "African Art Print" },
      { image: juteBag4, name: "Cat & Umbrella" },
      { image: juteBag5, name: "Bee Kind" },
      { image: juteBag6, name: "Pink Hat Lady" },
      { image: juteBag7, name: "I Love My Dog" },
      { image: juteBag8, name: "Leopard Hearts Love" },
      { image: juteBag9, name: "Pink Owl" },
      { image: juteBag10, name: "Girl on Bicycle" },
      { image: juteBag11, name: "Fairy Mushroom (Zip)" },
      { image: juteBag12, name: "Snoopy Love (Zip)" },
      { image: juteBag13, name: "African Art (Zip)" },
      { image: juteBag14, name: "Pink Owl (Juco)" },
      { image: juteBag15, name: "I Love My Dog (Juco)" },
      { image: juteBag16, name: "Pink Hat Lady (Juco)" },
      { image: juteBag17, name: "Bee Kind (Juco)" },
      { image: juteBag18, name: "Girls Can Do Anything (Juco)" },
      { image: juteBag19, name: "Toucan Bird" },
      { image: juteBag20, name: "Snoopy Love Balloons" },
    ],
  },
];

export const getCategoryBySlug = (slug?: string) =>
  productCategories.find((c) => c.slug === slug);
