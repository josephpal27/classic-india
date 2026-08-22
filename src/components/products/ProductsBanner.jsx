
const ProductsBanner = () => {
    return (
        <section className="
            relative px-[1rem] sm:px-[1%]
        ">
            <img
                src="/images/banners/products-banner.avif"
                alt="Products Banner"
                loading="lazy"
                className="
                    w-full h-[90dvh] object-cover
                    rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]
                "
            />
            <div className="
                w-full h-full absolute top-0 left-0 flex flex-col justify-end text-white 
                px-[1rem] sm:px-[5%] lg:px-[6%]
                pb-[3rem] sm:pb-[4rem] lg:pb-[5rem] xl:pb-[6rem] 2xl:pb-[7rem]
            ">
                <h1>
                    Products
                </h1>
                <p className="
                    mt-[1rem]
                    w-[45%]
                ">
                    Explore Classic India’s diverse range of corporate gifting and branded merchandise, created to meet the varied needs of modern businesses. From everyday office essentials and premium stationery to bags, drinkware, travel accessories, gift sets and customised merchandise, our collection brings together products that can be thoughtfully selected and personalised for employees, clients, events and business occasions.
                </p>
            </div>
        </section>
    )
}

export default ProductsBanner
