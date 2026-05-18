import Link from "next/link"

const Footer = () => {
    return (
        <footer className="
            px-[7%]
            bg-secondary
            pt-[3rem]
        ">

            <div className="flex justify-between flex-wrap">
                <div className="w-[45%]">
                    <img
                        src="/images/logo/logo.png"
                        alt="Classic India"
                        loading="lazy"
                        className="w-[170px]"
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
                            text-[1.4rem]
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
                            text-[1.4rem]
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
                mt-[2rem]
                py-[1rem]
                border-t-[1px] border-[#bababa]
            ">
                <p className="
                    text-center text-[0.9rem]
                ">
                    Copyright © 2026 | Classic India | All Rights Reserved
                </p>
            </div>

        </footer>
    )
}

export default Footer
