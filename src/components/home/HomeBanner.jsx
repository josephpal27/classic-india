
const HomeBanner = () => {
    return (
        <section className="
            relative px-[1rem]
        ">
            <img 
                src="/images/banners/home-banner.png" 
                alt="Home Banner" 
                loading="lazy" 
                className="
                    w-full h-[90dvh] object-cover
                    rounded-[30px]
                "
            />
            <div className="
                w-full h-full absolute top-0 left-0 flex flex-col justify-end items-center text-white 
                pb-[7rem]
            ">
                <h1 className="">
                    Lorem ipsum dolor sit
                </h1>
                <p className="
                    mt-[1rem]
                    text-center w-[60%]
                ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore mollitia blanditiis dicta, est, ex magni nisi? Quae, voluptas. Lorem ipsum dolor, sit amet consectetur elit. In ipsa itaque facilis ab. Provident, quae.
                </p>
            </div>
        </section>
    )
}

export default HomeBanner
