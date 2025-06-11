import heroImg from "../assets/persona-hero-img.png";
import FlippingFeatureCard from "../components/FlippingFeatureCard";
import CtaSection from "../components/CtaSection";

export default function Home() {
    return (
        <main className="home">
            <section className="hero-section">
                <div>
                    <h1>Design smarter with <br/><span className='highlight'>AI-powered</span> user personas.</h1>
                    <p>PersonaPilot lets you visualize your users before they arrive — 
                    generate lifelike personas and simulate their behavior to validate flows, features, and UX choices.</p>
                    <button className="cta-button">Get Started</button>
                </div>
                <img src={heroImg} alt="Hero image illustrating user personas" className='hero-image'/>
            </section>

            <section className="features-section">
                <h3>With PersonaPilot, you can:</h3>

                <div className='about-feature-container'>
                    <FlippingFeatureCard
                        front="Generate Realistic Personas"
                        back="Based on your product type, industry, and target audience — craft lifelike user personas in seconds."
                        frontImg="../assets/realistic-persona.png" 
                    />
                    <FlippingFeatureCard
                        front="Simulate Real User Behavior"
                        back="Predict how users will interact with your product, identifying friction points and drop-offs."
                        frontImg="../assets/simulation.png" 
                    />
                    <FlippingFeatureCard
                        front="Collaborate with Your Team"
                        back="Share personas and simulations to align product decisions around actual user needs."
                        frontImg="../assets/collaboration.png" 
                    />
                    <FlippingFeatureCard
                        front="Validate UX Across Personas"
                        back="See how different user types interact with different versions of your product."
                        frontImg="../assets/interaction.png" 
                    />
                    <FlippingFeatureCard
                        front="Design Faster with Plugins"
                        back="Integrate directly into Figma and Webflow to streamline your design workflow."
                        frontImg="../assets/plugin.png" 
                    />
                    <FlippingFeatureCard
                        front="API Access for Custom Models"
                        back="Use our API to create custom persona models tailored to your specific needs."
                        frontImg="../assets/api.png" 
                    />
                </div>
            </section>

            <section className='about-section'>
                <h3>Build user-centered products with confidence</h3>
                <p>
                    PersonaPilot is the AI-powered persona generation tool that helps you
                    build user-centered products.
                </p>
            </section>

            <CtaSection />
        </main>
    );
}