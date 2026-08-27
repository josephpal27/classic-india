import { BiSupport } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const contactData = [
    {
        id: 1,
        icon: <IoLocationOutline/>,
        label: "Visit Us",
        value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio deleniti error consectetur adipisicing.",
        url: "#",
        target: "_blank",
    },
    {
        id: 2,
        icon: <BiSupport/>,
        label: "Let's Talk",
        value: "+91 00000 00000",
        url: "tel:0000000000",
        target: "_self",
    },
    {
        id: 3,
        icon: <IoMailOutline/>,
        label: "Email Us",
        value: "example@gmail.com",
        url: "mailto:example@gmail.com",
        target: "_self",
    },
]

const ContactDetails = () => {
    return (
        <div>
            <h2>
                Get In Touch
            </h2>
            <p className="mt-[1rem] lg:mt-[0.5rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio deleniti error, officiis reiciendis nobis aliquid ut iusto expedita tenetur.
            </p>

            <div className="mt-[2rem] sm:mt-[2.5rem] lg:mt-[3.1rem] xl:mt-[3.3rem] 2xl:mt-[3.5rem]">
                {contactData.map((item, index) => {
                    return(
                        <div key={index} className="flex gap-[1.2rem] mb-[2rem]">
                            <div className="text-[2.2rem]">
                                {item.icon}
                            </div>
                            <div>
                                <span className="block font-bold text-[1.5rem] text-primary">
                                    {item.label}
                                </span>
                                <a href={item.url} target={item.target} className="block mt-[0.5rem] hover:underline">
                                    {item.value}
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ContactDetails
