"use client"

import { useState } from "react";
import Button from "../Button";

const ProductGallery = ({ product }) => {

    const [activeImage, setActiveImage] = useState(0);

    return (
        <section className="
            py-[4rem]
            flex justify-between flex-wrap
        ">

            {/* Images */}
            <div className="
                w-[45%]
            ">
                <div className="
                    rounded-[30px] overflow-hidden
                ">
                    <img
                        src={product.images[activeImage]}
                        alt="Product Image"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
                <div className="
                    flex justify-between mt-[0.8rem]
                ">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Product Image"
                            loading="lazy"
                            onClick={() => setActiveImage(index)}
                            className={`
                                w-[23.5%] rounded-[20px] cursor-pointer transition
                                ${activeImage === index
                                    ? "ring-2 ring-primary"
                                    : "opacity-80 hover:opacity-100"
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
                    Leater Diary
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
