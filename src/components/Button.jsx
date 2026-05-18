import { FaCircleChevronRight } from "react-icons/fa6";

const Button = ({label}) => {
    return (
        <button className={`
            flex items-center border-[2px] px-[1rem] py-[0.4rem] rounded-full group
            text-[1.1rem]
        `}>
            {label}
            <FaCircleChevronRight className="
                text-[1.5rem]
                ml-[0.6rem]
                group-hover:translate-x-[0.3rem]
                transition
            " />
        </button>
    )
}

export default Button
