import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
    return (
        <section className="
            pt-[5rem] sm:pt-[3.5rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] 
            flex justify-between flex-wrap
        ">
            <div className="w-[47%]">
                <ContactDetails />
            </div>
            <div className="w-[47%]">
                <ContactForm />
            </div>
        </section>
    )
}

export default GetInTouch
