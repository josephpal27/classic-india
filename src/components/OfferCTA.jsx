import Button from "./Button"

const OfferCTA = () => {
    return (
        <section className="
            mt-[11rem] sm:mt-[15rem] lg:mt-[15rem] xl:mt-[16rem] 2xl:mt-[17rem] 
            mb-[4rem] sm:mb-[3rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem] 
            px-[1rem] sm:px-[1%]
        ">
            <div className="
                bg-primary relative flex justify-between items-center flex-wrap 
                bg-[url('/images/cta-bg.avif')] bg-cover bg-bottom 
                rounded-[20px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]
                px-[1rem] sm:px-[5%] lg:px-[6%]
                pb-[1.5rem] lg:pb-[1rem]
            ">
                <div className="
                    w-full lg:w-[25%]
                ">
                    <img
                        src="/images/bottle.avif"
                        alt="Bottles"
                        loading="lazy"
                        className="
                            w-full 
                            scale-[1.1] lg:scale-[1.4]
                            translate-y-[-6rem] sm:translate-y-[-6.5rem] lg:translate-y-[-5rem] xl:translate-y-[-5.5rem] 2xl:translate-y-[-6rem]
                            translate-x-[0.5rem] lg:translate-x-[5rem] xl:translate-x-[5.5rem] 2xl:translate-x-[6rem]
                        "
                    />
                </div>
                <div className="
                    w-full lg:w-[55%]
                    text-white
                    mt-[-3rem] lg:mt-0
                ">
                    <span className="text-[1.7rem] sm:text-[2rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] font-bold">
                        Lorem ipsum dolor
                    </span>
                    <p className="mt-[0.5rem] lg:mt-[1rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum nemo incidunt nesciunt, harum suscipit vitae quos dicta. Lorem ipsum dolor.
                    </p>
                    <div className="mt-[1rem] lg:mt-[2rem]">
                        <Button label="Read More" color="white" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferCTA
