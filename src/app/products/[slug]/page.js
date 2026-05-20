import { productsData } from "@/data/productsData";
import { notFound } from "next/navigation";
import ProductDetailsBanner from "@/components/products/ProductDetailsBanner";

// Generate static pages
export async function generateStaticParams() {
  return productsData.map((item) => ({
    slug: item.slug,
  }));
}

// Dynamic SEO per product
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = productsData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found - Classic India",
      description: "",
    };
  }

  return {
    title: product.title + " - Classic India",
    description: product.desc,
  };
}

export default async function ProductDetails({ params }) {

  const { slug } = await params;

  const product = productsData.find(
    (item) => item.slug === slug
  );

  // If Not Found → 404
  if (!product) return notFound();

  return (
    <>
      <ProductDetailsBanner />
    </>
  );
}
