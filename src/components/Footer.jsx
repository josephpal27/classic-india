import Link from "next/link"

const Footer = () => {
    return (
        <footer className="
            px-[1rem] sm:px-[5%] lg:px-[7%] bg-white
        ">

            <div className="flex justify-between flex-wrap">
                <div className="w-[45%]">
                    <img
                        src="/images/logo/logo.png"
                        alt="Classic India"
                        loading="lazy"
                        className="w-[170px] sm:w-[140px] lg:w-[150px] xl:w-[160px] 2xl:w-[170px]"
                    />
                    <p className="
                        mt-[2rem]
                    ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium quaerat sequi ea sit dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate.
                    </p>
                </div>
                <div className="w-[45%] flex justify-between flex-wrap">
                    <div className="w-[45%]">
                        <span className="
                            block font-[600] text-primary
                            text-[1.4rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            mb-[1rem]
                        ">
                            Quick Links
                        </span>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/blogs">Blogs</Link>
                        <Link href="/contact">Get In Touch</Link>
                    </div>
                    <div className="w-[45%]">
                        <span className="
                            block font-[600] text-primary
                            text-[1.4rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            mb-[1rem]
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
                mt-[2rem] sm:mt-[1.5rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                py-[1rem] sm:py-[0.8rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                border-t-[2px] sm:border-t-[1.5px] xl:border-t-[2px] border-[#d3c7c7]
            ">
                <p className="
                    text-center text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                ">
                    Copyright © 2026 | Classic India | All Rights Reserved
                </p>
            </div>

        </footer>
    )
}

export default Footer
