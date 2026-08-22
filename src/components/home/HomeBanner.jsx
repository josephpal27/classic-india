
const HomeBanner = () => {
    return (
        <section className="
            relative px-[1rem] sm:px-[1%]
        ">
            <img 
                src="/images/banners/home-banner.avif" 
                alt="Home Banner" 
                loading="lazy" 
                className="
                    w-full h-auto lg:h-[90dvh] object-cover
                    rounded-[10px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]
                "
            />
            <div className="
                w-full h-full relative lg:absolute top-0 left-0 flex flex-col justify-end
                px-0 lg:px-[6%]
                pb-[1rem] sm:pb-[1.5rem] lg:pb-[5rem] xl:pb-[6rem] 2xl:pb-[7rem]
                mt-[-3.3rem] lg:mt-0
            ">
                <h1 className="text-white pl-[1rem] lg:pl-0">
                    Corporate Gifting, <br /> Built Around Your Brand
                </h1>
                <p className="
                    mt-[1.5rem] lg:mt-[1rem]
                    w-full lg:w-[55%] lg:text-white
                ">
                    With decades of experience in corporate gifting and customised merchandise, Classic India helps businesses create thoughtful, practical and professionally branded gifts for employees, clients, partners and events. From diaries and stationery to bags, drinkware, travel essentials, gift sets and customised packaging, we bring products, personalisation and presentation together under one roof.
                </p>
            </div>
        </section>
    )
}

export default HomeBanner
