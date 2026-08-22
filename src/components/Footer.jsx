import Link from "next/link"

const Footer = () => {
    return (
        <footer className="
            px-[1rem] sm:px-[5%] lg:px-[7%] bg-white overflow-hidden
        ">

            <div className="flex justify-between flex-wrap">
                <div className="w-full lg:w-[45%]">
                    <img
                        src="/images/logo/logo.png"
                        alt="Classic India"
                        loading="lazy"
                        className="w-[130px] sm:w-[140px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                    />
                    <p className="
                        mt-[1.2rem] lg:mt-[2rem]
                    ">
                        Crafting premium corporate gifts for every occasion. From branded drinkware to bespoke gift sets, we help brands make every gesture memorable.
                    </p>
                </div>
                <div className="w-full lg:w-[45%] flex justify-between flex-wrap">
                    <div className="w-full lg:w-[45%] mt-[1.5rem] lg:mt-0">
                        <span className="
                            block font-[600] text-primary
                            text-[1.3rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            mb-[0.8rem] lg:mb-[1rem]
                        ">
                            Quick Links
                        </span>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/blogs">Blogs</Link>
                        <Link href="/contact">Get In Touch</Link>
                    </div>
                    <div className="w-full lg:w-[45%] mt-[0.8rem] lg:mt-0">
                        <span className="
                            block font-[600] text-primary
                            text-[1.3rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            mb-[0.8rem] lg:mb-[1rem]
                        ">
                            Contact Info
                        </span>
                        <Link href="/">Address</Link>
                        <Link href="/">example@gmail.com</Link>
                        <Link href="/">+91 00000 00000</Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="
                mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                py-[0.7rem] sm:py-[0.8rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                border-t-[1px] sm:border-t-[1.5px] xl:border-t-[2px] border-[#d3c7c7]
            ">
                <p className="
                    text-center text-[0.8rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                ">
                    Copyright © 2026 | Classic India | All Rights Reserved
                </p>
            </div>

        </footer>
    )
}

export default Footer
