import Button from "../Button"

const Collections = () => {
    return (
        <section className="
            pt-[1rem] sm:pt-[3rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem] overflow-hidden
        ">
            <div className="
                flex flex-col items-center justify-center
            ">
                <h2 className="text-primary">
                    Products
                </h2>
                <p className="
                    mt-[0.5rem]
                    text-center w-full lg:w-[70%]
                ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className="
                flex justify-between items-center flex-wrap
                mt-[2rem] sm:mt-[2.5rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem] 
            ">
                <div className="w-[32%]">
                    <span className="
                        text-[2rem] sm:text-[3rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] 
                        font-bold text-primary leading-[1.3] block mt-[-1rem]
                    ">
                        Leather <br /> Diary
                    </span>
                    <p className="mt-[1.5rem]">
                        Lorem ipsum dolor sit amet, adipisicing elit. Nemo et omnis ipsam quam voluptatum omnis odio expedita odit adipisci dolor.
                    </p>
                </div>
                <div className="w-[29%]">
                    <img
                        src="/images/diary.avif"
                        alt="Diary"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
                <div className="w-[32%]">
                    <span className="
                        block font-bold text-primary
                        text-[1.5rem] sm:text-[1.7rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.5rem] 
                    ">
                        Key Features
                    </span>
                    <ol className="
                        list-decimal [&_li::marker]:text-primary 
                        [&_li::marker]:text-[1.5rem] 
                        sm:[&_li::marker]:text-[1.7rem] 
                        lg:[&_li::marker]:text-[1.2rem] 
                        xl:[&_li::marker]:text-[1.4rem] 
                        2xl[&_li::marker]::text-[1.5rem] 
                        mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem] 
                        pl-[1rem]
                        [&_li]:mb-[1rem]
                    ">
                        <li>
                            Lorem ipsum dolor sit, amet consectetur voluptatum adipisicing.
                        </li>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur voluptatum adipisicing.
                        </li>
                        <li>
                            Lorem ipsum dolor sit, amet consectetur voluptatum adipisicing.
                        </li>
                    </ol>
                    <div className="text-primary mt-[2rem] sm:mt-[1.5rem] lg:mt-[1.7rem] xl:mt-[1.8rem] 2xl:mt-[2rem] ">
                        <Button label="Explore" color="var(--primary)" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections
