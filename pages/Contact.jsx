import { enquiryContacts } from "../company_info/enquiryContacts"
import SpecificEnquiry from "../components/SpecificEnquiry";

export default function Contact() {
    const enquiryElements = enquiryContacts.map((enquiry, index) => {
        const { type, description, email, svg } = enquiry;
        return (
            <SpecificEnquiry
                key={index}
                type={type}
                description={description}
                email={email}
                svg={svg}
            />
        )
    }
    );

    return (
        <main className="contact">
            <div className='contact-info'>
                <h2>Have questions? Let's talk.</h2>
                {enquiryElements}
            </div>
            <div className='contact-form-container'>
                <form className='contact-form'>
                    <h2>General Enquiries</h2>
                    <label htmlFor="name" required>First Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="name" required>Last Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email" required>Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" required />
                    <label htmlFor='terms-and-conditions'>
                        By submitting, you agree to our Terms & Conditions, and Privacy Policy. 
                    </label>

                    <button type="submit" className="cta-button contact-submit">Send Message</button>
                </form>
            </div>
        </main>
    )
}