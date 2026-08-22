import Button from "../Button"

const GetInTouchCTA = () => {
    return (
        <section className="
            px-[1rem] sm:px-[1%]
            mb-[5rem] sm:mb-[3rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem] 
        ">
            <div className="
                flex justify-between items-center flex-wrap bg-secondary
                rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]rounded-[30px]
                px-[1rem] sm:px-[5%] lg:px-[6%]
                py-[4rem] sm:py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
            ">
                <div className="w-[33%]">
                    <img
                        src="/images/phone.avif"
                        alt="Phone"
                        loading="lazy"
                        className="w-full rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]rounded-[30px]"
                    />
                </div>
                <div className="w-[60%]">
                    <h4 className="text-primary">
                        Let’s Create Something Worth Giving.
                    </h4>
                    <p>
                        Have a corporate gifting requirement, a custom merchandise idea or an upcoming event to plan for? Tell us what you have in mind, and let’s explore the possibilities together.
                    </p>
                    <div className="text-primary mt-[2rem]">
                        <Button label="Get in touch with Classic India." color="var(--primary)" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouchCTA
