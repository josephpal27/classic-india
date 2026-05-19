
const ProductsBanner = () => {
    return (
        <section className="
            relative px-[1%]
        ">
            <img
                src="/images/banners/about-banner.png"
                alt="Home Banner"
                loading="lazy"
                className="
                    w-full h-[90dvh] object-cover
                    rounded-[30px]
                "
            />
            <div className="
                w-full h-full absolute top-0 left-0 flex flex-col justify-end text-white 
                px-[6%]
                pb-[7rem]
            ">
                <h1>
                    Products
                </h1>
                <p className="
                    mt-[1rem]
                    w-[50%]
                ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore mollitia blanditiis dicta, est, ex magni nisi? Quae, voluptas. Lorem ipsum dolor, sit amet consectetur elit. In ipsa itaque facilis ab. Provident, quae.
                </p>
            </div>
        </section>
    )
}

export default ProductsBanner
