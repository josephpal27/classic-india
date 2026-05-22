import Button from "./Button"

const OfferCTA = () => {
    return (
        <section className="
            mt-[17rem] sm:mt-[15rem] lg:mt-[15rem] xl:mt-[16rem] 2xl:mt-[17rem] 
            mb-[5rem] sm:mb-[3rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem] 
            px-[1rem] sm:px-[1%]
        ">
            <div className="
                bg-primary relative flex justify-between items-center flex-wrap 
                bg-[url('/images/cta-bg.avif')] bg-cover bg-bottom 
                rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]
                px-[1rem] sm:px-[5%] lg:px-[6%]
                pb-[1rem]
            ">
                <div className="
                    w-[25%]
                ">
                    <img
                        src="/images/bottle.avif"
                        alt="Bottles"
                        loading="lazy"
                        className="
                            w-full 
                            scale-[1.4]
                            translate-y-[-6rem] sm:translate-y-[-4rem] lg:translate-y-[-5rem] xl:translate-y-[-5.5rem] 2xl:translate-y-[-6rem]
                            translate-x-[6rem] sm:translate-x-[4rem] lg:translate-x-[5rem] xl:translate-x-[5.5rem] 2xl:translate-x-[6rem]
                        "
                    />
                </div>
                <div className="
                    w-[55%]
                    text-white
                ">
                    <span className="text-[2rem] sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] font-bold">
                        Lorem ipsum dolor
                    </span>
                    <p className="mt-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum nemo incidunt nesciunt, harum suscipit vitae quos dicta. Lorem ipsum dolor.
                    </p>
                    <div className="mt-[2rem]">
                        <Button label="Read More" color="white" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferCTA
