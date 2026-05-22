const visionMissionData = [
    {
        id: 1,
        title: 'Our Vision',
        desc: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore dicta, est, ex magni nisi? Quae, voluptas. Lorem ipsum dolor, sit amet consectetur elit. In ipsa itaque facilis, quae.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore.",
        ],
        image: "/images/vision.avif",
    },
    {
        id: 2,
        title: 'Our Mission',
        desc: [
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore dicta, est, ex magni nisi? Quae, voluptas. Lorem ipsum dolor, sit amet consectetur elit. In ipsa itaque facilis, quae.",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore.",
        ],
        image: "/images/mission.avif",
    },
]

const VisionMission = () => {
    return (
        <section className="
            py-[5rem] sm:py-[3rem] lg:py-[4rem] xl:py-[4.5rem] 2xl:py-[5rem] 
        ">
            {visionMissionData.map((item) => {
                return (
                    <div key={item.id} className={`
                        flex justify-between flex-wrap
                        ${item.id % 2 === 0 ? 'flex-row-reverse mt-[3rem] sm:mt-[2.5rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]' : ''}
                    `}>
                        <div className="
                            w-[35%]
                        ">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full rounded-[30px] sm:rounded-[25px] lg:rounded-[24px] xl:rounded-[27px] 2xl:rounded-[30px]"
                            />
                        </div>
                        <div className="
                            w-[58%]
                        ">
                            <h3 className="text-primary mt-[2rem]">
                                {item.title}
                            </h3>
                            {item.desc.map((para, i) => (
                                <p key={i} className="mt-[1rem]">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default VisionMission
