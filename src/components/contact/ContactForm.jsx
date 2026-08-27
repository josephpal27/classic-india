import Button from "../Button"

const ContactForm = () => {
    return (
        <div className="bg-[#eceadb] p-[3.5rem] rounded-3xl">
            <form action="" className="contact_form">
                <div>
                    <label htmlFor="name">
                        Full Name
                    </label>
                    <input type="text" name="Name" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">
                        Email Id
                    </label>
                    <input type="email" name="Email" id="email" required />
                </div>
                <div>
                    <label htmlFor="msg">
                        Message
                    </label>
                    <textarea name="Message" id="msg" required className="resize-none"></textarea>
                </div>
                <button type="submit" className="bg-primary hover:bg-[#a90b2d] text-white px-5 py-[0.7rem] sm:py-[0.6rem] lg:py-[0.6rem] xl:py-[0.65rem] 2xl:py-[0.7rem] rounded-full transition-colors duration-200 text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm
