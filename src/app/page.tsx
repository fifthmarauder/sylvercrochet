import BodyContainer from "@/components/BodyContainer/BodyContainer";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";

export const metadata = {
  title: "Sylver Crochet – Handmade Anime Plushies & Keychains",
  description:
    "Shop handmade crochet anime and game character plushies, amigurumi and keychains. Custom orders available.",
};
const page = () => {
  return (
    <div>
      <BodyContainer />
      <FeaturedProducts />
    </div>
  );
};

export default page;
