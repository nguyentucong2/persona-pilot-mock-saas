import CtaSection from "../components/CtaSection";

export default function About() {
    return (
        <main className="about">
            <h1>About</h1>
            <p>At Persona Pilot, we believe that understanding your users is the key to building exceptional products and experiences. But in today’s 
                fast-paced digital world, traditional persona research can be time-consuming, expensive, and often out of date by the time it’s finished.
                That’s why we created Persona Pilot—a smarter, faster way to generate detailed, 
                data-driven user personas using the power of artificial intelligence.</p>

            <h3>Our Mission</h3>
            <p>To empower teams of all sizes with instant, actionable user insights, 
                so you can make confident, customer-centric decisions—every step of the way.</p>

            <h3>Who We Serve</h3>
            <p>Persona Pilot is built for product managers, marketers, designers, and founders who want to deeply understand 
                their audience and build products people love. Whether you’re a startup or an enterprise, our platform adapts 
                to your workflow and scales with your business.</p>

            <h3>Our Story</h3>
            <p>Persona Pilot was born out of a shared frustration with outdated, generic personas. 
                We set out to build a tool that combines the speed of AI with the nuance of real human insight—
                so you can always stay one step ahead of your users’ needs.</p>

            <CtaSection />
        </main>
    );
}