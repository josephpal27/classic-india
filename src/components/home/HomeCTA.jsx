import Button from "../Button"

const HomeCTA = () => {
    return (
        <section className="
            mt-[17rem]
            mb-[5rem]
            px-[1%]
        ">
            <div className="
                bg-primary relative flex justify-between items-center flex-wrap bg-[url('/images/cta-bg.png')] bg-cover bg-bottom
                rounded-[30px]
                px-[6%]
                pb-[1rem]
            ">
                <div className="
                    w-[25%]
                ">
                    <img
                        src="/images/bottle.png"
                        alt="Bottles"
                        loading="lazy"
                        className="
                            w-full 
                            scale-[1.4]
                            translate-y-[-6rem]
                            translate-x-[6rem]
                        "
                    />
                </div>
                <div className="
                    w-[55%]
                    text-white
                ">
                    <h5>
                        Lorem ipsum dolor
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor.
                    </p>
                    <div className="mt-[2rem]">
                        <Button label="Read More" color="white" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCTA
