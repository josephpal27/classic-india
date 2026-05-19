import { productsData } from "@/data/productsData"
import Button from "../Button"

const ProductsListing = () => {
    return (
        <section className="
            py-[4rem]
            flex justify-between flex-wrap
        ">

            {/* Categories */}
            <div className="
                w-[30%]
                bg-secondary rounded-[20px]
                p-[2rem]
            ">
                <span>
                    Categories
                </span>
                <ul>
                    <li>
                        Diaries & Notebooks
                    </li>
                </ul>
            </div>

            {/* Products */}
            <div className="
                w-[67%] flex flex-wrap gap-[2%]
            ">
                {productsData.map((product, index) => {
                    return (
                        <div key={index} className="
                            w-[32%] bg-secondary rounded-[20px]
                            p-[1rem]
                            mb-[0.5rem]
                        ">
                            <div className="
                                rounded-[15px]
                                overflow-hidden
                            ">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <span className="
                                text-[1.2rem] font-bold block mt-[1rem]
                            ">
                                {product.title}
                            </span>
                            <p className="
                                text-[0.9rem]
                                mt-[0.5rem]
                            ">
                                {product.desc}
                            </p>
                            <div className="text-primary mt-[0.8rem]">
                                <Button label="Explore" color="var(--primary)" className="scale-[0.8] ml-[-0.7rem]" />
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ProductsListing
