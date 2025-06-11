export default function PricingPlan({ plan }) {
    return (
        <div className="plan">
            <h3>{plan.name}</h3>
            <span className='highlight'>
                <h2 className="price">
                    ${plan.price}
                    <span style={{ fontSize: '1rem', marginLeft: '0.25em' }}>/ {plan.billingCycle}</span>
                </h2>
            </span>

            <hr />
            <ul>
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="cta-button plan-btn">{plan.buttonText}</button>
        </div>
    );
}