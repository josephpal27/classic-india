
const AboutBanner = () => {
    return (
        <section className="
            relative px-[1rem] sm:px-[1%]
        ">
            <img
                src="/images/banners/about-banner.avif"
                alt="About Banner"
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
                    About Us
                </h1>
                <p className="
                    mt-[1.5rem] lg:mt-[1rem]
                    w-full lg:w-[50%] lg:text-white
                ">
                    Classic India is a corporate gifting and merchandise company built on a simple understanding: a thoughtful gesture can strengthen a professional relationship. Over the years, we have grown by working closely with businesses to understand how they recognise people, build relationships and represent their brands. Our approach combines experience with an evolving understanding of what modern businesses expect from their gifting and merchandise partners.
                </p>
            </div>
        </section>
    )
}

export default AboutBanner
