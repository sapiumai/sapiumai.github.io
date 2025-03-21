
// Dictionary with feature data
const featuresData = {
    feature1: {
        icon: '🤖',
        title: 'Agentic AI',
        description: 'AI-driven autonomous systems capable of making decisions, optimizing workflows, and adapting to dynamic business environments.',
    },
    feature2: {
        icon: '🧠',
        title: 'Machine Learning',
        description: 'Advanced ML models that continuously improve, enabling smarter automation, data processing, and business intelligence.'
    },
    feature3: {
        icon: '💡',
        title: 'Predictive Analytics',
        description: 'Harnessing historical and real-time data to forecast trends, mitigate risks, and enhance decision-making.'
    },
    feature4: {
        icon: '⚙️',
        title: 'Customizable',
        description: 'Tailored AI applications designed to meet specific business needs, ensuring seamless integration and maximum efficiency.'
    }
};

const Features = () => {
    return (
        <div className="features-section p-8 bg-secondaryBackground">
            <h3 className="text-primaryHeading text-secondaryText font-bold text-center text-3xl mt-30 mb-20">Our Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(featuresData).map(([key, feature]) => (
                    <div key={key} className="card bg-primaryBackground p-4 rounded-lg shadow">
                        <div className="icon text-4xl mb-5">{feature.icon}</div>
                        <h4 className="font-bold text-xl mb-4 text-center text-primaryHeading">{feature.title}</h4>
                        <p className="text-primaryText text-base text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
