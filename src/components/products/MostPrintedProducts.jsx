"use client"

import { productsData } from "@/data/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Button from "../Button";

const MostPrintedProducts = () => {
    return (
        <section className="pt-[5rem] mb-[-1rem]">
            <h3 className="text-primary">
                Most Printed Products
            </h3>
            <p className="w-[55%] mt-[0.5rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>

            {/* Slider */}
            <div className="mt-[3rem]">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={4}
                    centeredSlides={false}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={20}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2, // for mobile
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 3, // tablet
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 4, // tablet and up
                            spaceBetween: 20,
                        },
                    }}
                    className="
                        !pb-[3.5rem]
                    "
                >
                    {productsData.map((product, index) => {
                        return (
                            <SwiperSlide key={index} className="
                                bg-secondary hover:bg-[#e6e2ce]
                                w-full transition duration-300
                                rounded-[20px] 
                                p-[1rem]
                                group
                            ">
                                <Link href={`/products/${product.slug}`} key={index}>
                                    <div className="rounded-[15px] overflow-hidden">
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            loading="lazy"
                                            className="
                                                w-full aspect-[3/2] object-cover 
                                                group-hover:scale-105 transition-transform duration-500
                                            "
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
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default MostPrintedProducts
