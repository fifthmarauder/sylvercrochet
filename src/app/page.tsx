import BodyContainer from "@/components/BodyContainer/BodyContainer";
import Cards from "@/components/Cards/Cards";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const page = () => {
  return (
    <div>
      <Header />
      <BodyContainer />
      {/* <Cards /> */}
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default page;
