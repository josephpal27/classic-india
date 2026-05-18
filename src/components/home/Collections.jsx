import Button from "../Button"

const Collections = () => {
    return (
        <section className="
            pt-[4rem]
        ">
            <div className="
                flex flex-col items-center justify-center
            ">
                <h2 className="text-primary">
                    Products
                </h2>
                <p className="
                    mt-[0.5rem]
                    text-center w-[70%]
                ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className="
                flex justify-between flex-wrap
                mt-[3rem]
            ">
                <div className="w-[32%]">
                    <span className="
                        text-[4rem] font-bold text-primary leading-[1.3] block mt-[2rem]
                    ">
                        Leather <br /> Diary
                    </span>
                    <p className="mt-[1.5rem]">
                        Lorem ipsum dolor sit amet, adipisicing elit. Nemo et omnis ipsam quam voluptatum omnis odio expedita odit adipisci dolor.
                    </p>
                </div>
                <div className="w-[30%]">
                    <img
                        src="/images/diary.png"
                        alt="Diary"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
                <div className="w-[32%]">
                    <span className="
                        block mt-[2rem]
                        text-[1.5rem] font-bold text-primary
                    ">
                        Key Features
                    </span>
                    <ol className="
                        list-decimal [&_li::marker]:text-primary 
                        [&_li::marker]:text-[1.5rem] 
                        mt-[1.5rem]
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
                    <div className="text-primary mt-[2rem]">
                        <Button label="Explore" color="var(--primary)" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections
