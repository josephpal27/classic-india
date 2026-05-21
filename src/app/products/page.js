import OfferCTA from "@/components/OfferCTA";
import ProductsBanner from "@/components/products/ProductsBanner";
import ProductsListing from "@/components/products/ProductsListing";

export const metadata = {
  title: "Products - Classic India",
  description: "",
};

export default function Products() {
  return (
    <>
      <ProductsBanner />
      <ProductsListing />
      <OfferCTA />
    </>
  );
}
