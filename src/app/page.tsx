import BodyContainer from "@/components/BodyContainer/BodyContainer";
import Cards from "@/components/Cards/Cards";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Header from "@/components/Header/Header";

const page = () => {
  return (
    <div>
      <Header />
      <BodyContainer />
      {/* <Cards /> */}
      <FeaturedProducts />
    </div>
  );
};

export default page;
