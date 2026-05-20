"use client"

import { useState } from "react";
import { productsData } from "@/data/productsData";
import { categoryData } from "@/data/categoryData";
import Button from "../Button";

const ProductsListing = () => {

    const [activeCategory, setActiveCategory] = useState(1);

    const filteredProducts = activeCategory === 1
        ? productsData
        : productsData.filter(product => product.categoryId === activeCategory);

    return (
        <section className="
            py-[4rem]
            flex justify-between flex-wrap
        ">

            {/* Categories */}
            <div className="
                w-[27%] h-max
                bg-secondary rounded-[20px]
                p-[1.7rem]
            ">
                <span className="
                    text-primary text-[1.4rem] font-bold block mb-[1rem]
                ">
                    Categories
                </span>
                <ul>
                    {categoryData.map((category, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setActiveCategory(category.id)}
                                className={`
                                    py-[1rem] 
                                    last:pb-0
                                    border-b border-[#d1cfba] last:border-0
                                    cursor-pointer transition
                                    text-[1rem]
                                    ${activeCategory === category.id
                                    ? "text-primary font-bold"
                                    : "hover:text-primary"
                                }
                            `}>
                                {category.name}
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Products */}
            <div className="
                w-[71%] flex flex-wrap gap-[2%]
            ">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="
                            w-[32%] h-max bg-secondary rounded-[20px]
                            p-[1rem]
                            mb-[0.5rem]
                        ">
                            <div className="rounded-[15px] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>
                            <span className="text-[1.2rem] font-bold block mt-[1rem]">
                                {product.title}
                            </span>
                            <p className="text-[0.9rem] mt-[0.5rem]">
                                {product.desc}
                            </p>
                            <div className="text-primary mt-[0.8rem]">
                                <Button label="Explore" color="var(--primary)" className="scale-[0.8] ml-[-0.7rem]" />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full flex items-center justify-center py-[4rem]">
                        <p className="
                            text-[1rem] opacity-50 text-center
                        ">
                            No Products Found in this Category...
                        </p>
                    </div>
                )}
            </div>

        </section>
    )
}

export default ProductsListing
