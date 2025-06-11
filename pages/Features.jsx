import { features } from "../company_info/features";
import StickyFeatureCard from "../components/StickyFeatureCard";
import FlippingFeatureCard from "../components/FlippingFeatureCard";
import realisticPersonaImg from '../assets/realistic-persona.png'
import simulationImg from '../assets/simulation.png'
import collaborationImg from '../assets/collaboration.png'

export default function Features() {
  return (
    <main className='features'>
      <div className='features-info'>
        <h2>Smarter Features for Deeper User Insights</h2>
        <h4>Discover the powerful features that make Persona Pilot your go-to solution for understanding and designing
             for your users. </h4>
      </div>
      <div
        style={{
          position: "relative",
          height: `${features.length * 20}vh`,
        }}
        className="feature-list"
      >
        {features.map((feature, index) => (
          <StickyFeatureCard feature={feature} index={index} />
        ))}
      </div>
      <div className='features-info'>
        <h2>Why use our features?</h2>
        <div className='feature-usp-cards'>
            <FlippingFeatureCard
                front="Instantly Unlock Deep User Insights"
                back="Our AI-powered tools rapidly generate realistic personas and simulate user behaviors, 
                giving you actionable insights in seconds. No more waiting weeks for manual research—make informed decisions 
                faster and with greater confidence"
                frontImg={realisticPersonaImg}
            />
            <FlippingFeatureCard
                front="Scale and Streamline Your Workflow"
                back="Automate time-consuming tasks like persona creation, scenario testing, and behavioral analysis. This efficiency lets you handle larger projects, 
                test more ideas, and focus your energy on strategic design and innovation, not repetitive busywork"
                frontImg={simulationImg}
            />
            <FlippingFeatureCard
                front="Build Products Users Truly Love"
                back="By integrating data-driven personas and simulations into your workflow, you ensure every decision is grounded in real user needs. 
                This leads to more personalized, effective products and a better overall UX — giving you a true competitive edge."
                frontImg={collaborationImg}
            />
        </div> 
      </div>
    </main>
  );
}
