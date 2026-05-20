import HomeCTA from "@/components/home/HomeCTA";
import ProductsBanner from "@/components/products/ProductsBanner";
import ProductsListing from "@/components/products/ProductsListing";

export default function Products() {
  return (
    <>
      <ProductsBanner />
      <ProductsListing />
      <HomeCTA />
    </>
  );
}
