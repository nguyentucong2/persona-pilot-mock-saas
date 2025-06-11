import { pricingPlans } from "../company_info/pricingPlans";
import PricingPlan from "../components/PricingPlan";

export default function Pricing() {

    return (
        <main className="pricing">
            <h2>Unlock powerful AI-driven user personas</h2>
            <p>Choose the plan that fits your workflow and start generating actionable personas today.</p>
            <div className="pricing-plans">
                {pricingPlans.map((plan, index) => (
                    <PricingPlan
                        key={index}
                        plan={plan}
                    />
                ))}
            </div>
        </main>
    );
}