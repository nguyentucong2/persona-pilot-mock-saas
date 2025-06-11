export default function SpecificEnquiry({ type, description, email, svg }) {
    return (
        <section className="enquiry">
            <img src={svg} className="enquiry-icon" />
            <div className="enquiry-details">
                <h3>{type}</h3>
                <p>{description}</p>
                <p className="contact-email"><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </section>
    );
}