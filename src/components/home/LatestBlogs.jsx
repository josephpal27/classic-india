import Button from "../Button"

const blogsData = [
    {
        id: 1,
        title: "Blog Title 1",
        desc: "Lorem ipsum dolor sit amet adipisicing. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta.",
        image: "/images/blogs/1.avif",
    },
    {
        id: 2,
        title: "Blog Title 2",
        desc: "Lorem ipsum dolor sit amet adipisicing. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta.",
        image: "/images/blogs/2.avif",
    },
    {
        id: 3,
        title: "Blog Title 3",
        desc: "Lorem ipsum dolor sit amet adipisicing. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta.",
        image: "/images/blogs/3.avif",
    },
]

const LatestBlogs = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem]
        ">

            <div className="
                flex flex-col items-center justify-center
            ">
                <h4 className="text-primary">
                    Latest Blogs
                </h4>
                <p className="
                    mt-[0.5rem]
                    text-center w-full lg:w-[70%]
                ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div className="
                flex justify-between flex-wrap
                mt-[2rem] sm:mt-[2.5rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem] 
            ">
                {blogsData.map((blog, index) => {
                    return (
                        <div key={index} className="
                            w-full lg:w-[31%] bg-primary overflow-hidden
                            rounded-[20px] sm:rounded-[30px] lg:rounded-[34px] xl:rounded-[37px] 2xl:rounded-[40px]
                            mb-[1rem] lg:mb-0
                        ">
                            <div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="w-full rounded-b-[20px] lg:rounded-b-[40px]"
                                />
                            </div>
                            <div className="
                                p-[1rem] sm:p-[1.8rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                text-white
                            ">
                                <span className="
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] block
                                ">
                                    {blog.title}
                                </span>
                                <p className="
                                    text-[0.8rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                                    mt-[0.5rem] lg:mt-[0.7rem]
                                ">
                                    {blog.desc}
                                </p>
                                <div className="
                                    mt-[0.8rem] lg:mt-[1.5rem]
                                ">
                                    <Button label="Read More" color="white" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default LatestBlogs
