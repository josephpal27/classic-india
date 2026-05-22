import { FaCircleChevronRight } from "react-icons/fa6";

const Button = ({label, color, className}) => {
    return (
        <button style={{ borderColor: color }} className={`
            flex items-center border-[2px] sm:border-[1.5px] xl:border-[2px] rounded-full group
            px-[1rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
            py-[0.4rem] sm:py-[0.4rem] lg:py-[0.35rem] xl:py-[0.37rem] 2xl:py-[0.4rem]
            text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]  ${className ?? ''}
        `}>
            {label}
            <FaCircleChevronRight className="
                text-[1.5rem] sm:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                ml-[0.6rem]
                group-hover:translate-x-[0.3rem]
                transition
            " />
        </button>
    )
}

export default Button
