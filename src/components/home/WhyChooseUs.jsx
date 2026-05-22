const whyUsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit, amet elitfhdy. Repellendus distinctio ea, nobis facere delectus vitae aliquid eveniet, maiores odio consectetur. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit, amet elitfhdy. Repellendus distinctio ea, nobis facere delectus vitae aliquid eveniet, maiores odio consectetur. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit, amet elitfhdy. Repellendus distinctio ea, nobis facere delectus vitae aliquid eveniet, maiores odio consectetur. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit, amet elitfhdy. Repellendus distinctio ea, nobis facere delectus vitae aliquid eveniet, maiores odio consectetur. lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

const WhyChooseUs = () => {
    return (
        <section className="
            mt-[2rem] sm:mt-[3rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
            px-[1rem] sm:px-[1%] overflow-hidden
        ">
            <div className="
                flex justify-between items-center flex-wrap bg-secondary
                rounded-[15px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]
                px-[1rem] sm:px-[5%] lg:px-[6%]
                py-[1.5rem] sm:py-[3rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
            ">
                <div className="
                    w-full lg:w-[45%]
                ">
                    <h3 className="text-primary leading-[1.3]">
                        Why <br /> Choose Us
                    </h3>
                    <p className="mt-[1rem]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus distinctio ea, nobis facere delectus vitae aliquid eveniet, maiores odio consectetur at necessitatibus libero ipsum veniam dolorem atque dignissimos, recusandae natus.
                    </p>
                </div>
                <div className="
                    w-full lg:w-[50%]
                    flex justify-between flex-wrap
                    mt-[1.5rem] lg:mt-[0.8rem]
                ">
                    {whyUsData.map((item) => {
                        return (
                            <div key={item.id} className={`
                                w-full lg:w-[49%] bg-primary text-white
                                mb-[0.85rem] sm:mb-[0.8rem] lg:mb-[0.7rem] xl:mb-[0.8rem] 2xl:mb-[0.85rem]
                                p-[1rem] sm:p-[1.8rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                rounded-[20px] sm:rounded-[30px] lg:rounded-[34px] xl:rounded-[37px] 2xl:rounded-[40px]
                                ${item.id === 1 ? "lg:!rounded-br-none" : ""}
                                ${item.id === 2 ? "lg:!rounded-bl-none" : ""}
                                ${item.id === 3 ? "lg:!rounded-tr-none" : ""}
                                ${item.id === 4 ? "lg:!rounded-tl-none" : ""}
                            `}>
                                <span className="
                                    text-[1.6rem] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] block
                                ">
                                    0{item.id}.
                                </span>
                                <span className="
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] 
                                    font-semibold block
                                    mt-[0.3rem]
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem] 
                                    mt-[0.5rem]
                                ">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
