
const HomeBanner = () => {
    return (
        <section className="
            relative
        ">
            <img 
                src="/images/banners/home-banner.png" 
                alt="Home Banner" 
                loading="lazy" 
                className="w-full"
            />
            <div className="
                w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-white px-[10rem]
            ">
                <h1 className="
                    
                ">
                    Lorem ipsum dolor sit
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, reiciendis id harum vero illo consectetur pariatur fugit adipisci asperiores dolore repellat mollitia blanditiis dicta, est, ex magni nisi? Quae, voluptas.
                </p>
            </div>
        </section>
    )
}

export default HomeBanner
