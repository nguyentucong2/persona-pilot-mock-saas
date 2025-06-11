export default function AnimatedFeatureCard({ feature, index }) {
    return (
        <div
            key={index}
            style={{
              position: 'sticky',
              top: 80 + index * 4,
              zIndex: index + 1, // Higher cards overlay lower ones
            }}
            className='feature'
        >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    )
}