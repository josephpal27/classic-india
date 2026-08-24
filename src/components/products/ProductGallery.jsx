"use client"

import { useState } from "react";
import Button from "../Button";

const ProductGallery = ({ product }) => {

    const [activeImage, setActiveImage] = useState(0);

    return (
        <section className="
            pt-[4rem] sm:pt-[3rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem] 
            flex justify-between flex-wrap
        ">

            {/* Images */}
            <div className="
                w-[45%]
            ">
                <div className="
                    rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px] overflow-hidden
                ">
                    <img
                        src={product.images[activeImage]}
                        alt={product.title}
                        loading="lazy"
                        className="w-full aspect-[3/2] object-cover"
                    />
                </div>
                <div className="
                    flex justify-between 
                    mt-[0.8rem] sm:mt-[0.8rem] lg:mt-[0.6rem] xl:mt-[0.7rem] 2xl:mt-[0.8rem] 
                ">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={product.title}
                            loading="lazy"
                            onClick={() => setActiveImage(index)}
                            className={`
                                w-[23.5%] 
                                rounded-[20px] sm:rounded-[15px] lg:rounded-[14px] xl:rounded-[17px] 2xl:rounded-[20px]
                                cursor-pointer transition aspect-[3/2] object-cover
                                ${activeImage === index
                                    ? "ring-2 ring-primary"
                                    : "opacity-95 hover:opacity-100"
                                }
                            `}
                        />
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="
                w-[50%]
            ">
                <h2>
                    {product.title}
                </h2>
                <p className="
                    mt-[1rem]
                ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore mollitia blanditiis dicta, est, ex magni nisi? Quae, voluptas. Lorem ipsum dolor, sit amet consectetur elit. In ipsa itaque facilis ab. Provident, quae.
                </p>
                <div className="text-primary mt-[2rem]">
                    <Button label="Enquire Now" color="var(--primary)" />
                </div>
            </div>

        </section>
    )
}

export default ProductGallery
