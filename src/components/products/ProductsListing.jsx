import { productsData } from "@/data/productsData"

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
                            p-[1.5rem]
                            mb-[1rem]
                        ">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                loading="lazy"
                                className="w-full"
                            />
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ProductsListing
