import Button from "../Button"

const blogsData = [
    {
        id: 1,
        title: "Blog Title 1",
        desc: "Lorem ipsum dolor sit amet adipisicing. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor sit amet.",
        image: "/images/blogs/1.png",
    },
    {
        id: 2,
        title: "Blog Title 2",
        desc: "Lorem ipsum dolor sit amet adipisicing. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor sit amet.",
        image: "/images/blogs/2.png",
    },
    {
        id: 3,
        title: "Blog Title 3",
        desc: "Lorem ipsum dolor sit amet adipisicing. Laborum earum nemo incidunt nesciunt, harum suscipit vitae asperiores quos tenetur dicta. Lorem ipsum dolor sit amet.",
        image: "/images/blogs/3.png",
    },
]

const LatestBlogs = () => {
    return (
        <section className="
            pt-[4rem]
        ">

            <div className="
                flex flex-col items-center justify-center
            ">
                <h2 className="text-primary">
                    Latest Blogs
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
                {blogsData.map((blog, index) => {
                    return (
                        <div key={index} className="
                            w-[31%] bg-primary overflow-hidden
                            rounded-[40px]
                        ">
                            <div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="w-full rounded-b-[40px]"
                                />
                            </div>
                            <div className="
                                p-[2rem] text-white
                            ">
                                <span className="
                                    text-[1.2rem] block
                                ">
                                    {blog.title}
                                </span>
                                <p className="
                                    text-[0.9rem]
                                    mt-[0.7rem]
                                ">
                                    {blog.desc}
                                </p>
                                <Button />
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default LatestBlogs
