
const ProductsBanner = () => {
    return (
        <section className="
            relative px-[1%]
        ">
            <img
                src="/images/banners/products-banner.avif"
                alt="Products Banner"
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
                    w-[45%]
                ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deseruunting, reiciendis id harum vero illo consectetur pariatur fugit adipisci mollitia blanditiis dicta, est, ex magni nisi Quae, voluptas.
                </p>
            </div>
        </section>
    )
}

export default ProductsBanner
