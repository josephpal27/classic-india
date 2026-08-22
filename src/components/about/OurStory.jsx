const ourStoryData = [
    { id: 1, image: "/images/our-story/1.avif" },
    { id: 2, image: "/images/our-story/2.avif" },
    { id: 3, image: "/images/our-story/3.avif" },
    { id: 4, image: "/images/our-story/4.avif" },
]
const OurStory = () => {
    return (
        <section className="
            mt-[4rem] sm:mt-[3rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem] 
            px-[1rem] sm:px-[1%]
        ">
            <div className="
                flex justify-between items-center flex-wrap bg-secondary
                rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]rounded-[30px]
                px-[1rem] sm:px-[5%] lg:px-[6%]
                py-[4rem] sm:py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
            ">
                <div className="w-[50%]">
                    <h2 className="text-primary leading-[1.3]">
                        Our Story
                    </h2>
                    <p className="mt-[1rem]">
                        What began with a focus on serving the needs of businesses has grown into a longstanding association with corporate gifting and branded merchandise. Over the years, markets have changed, workplaces have evolved and the meaning of corporate gifting has expanded.
                    </p>
                    <p className="mt-[1rem]">
                        Through it all, our focus has remained consistent—understanding our clients, adapting to their requirements and creating solutions that feel relevant to the people they are meant for.
                    </p>
                </div>
                <div className="w-[40%] flex justify-between flex-wrap mt-[0.7rem]">
                    {ourStoryData.map((image) => {
                        return (
                            <div key={image.id} className={`
                                w-[49%] overflow-hidden
                                mb-[0.85rem] sm:mb-[0.8rem] lg:mb-[0.6rem] xl:mb-[0.65rem] 2xl:mb-[0.75rem]
                                rounded-[40px] sm:rounded-[30px] lg:rounded-[34px] xl:rounded-[37px] 2xl:rounded-[40px]
                                ${image.id === 1 ? "!rounded-br-none" : ""}
                                ${image.id === 2 ? "!rounded-bl-none" : ""}
                                ${image.id === 3 ? "!rounded-tr-none mb-0" : ""}
                                ${image.id === 4 ? "!rounded-tl-none mb-0" : ""}
                            `}>
                                <img
                                    src={image.image}
                                    alt={`Our Story ${image.id}`}
                                    loading="lazy"
                                    className="w-full"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default OurStory
