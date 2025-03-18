import exp1 from '../assets/expertise-1.jpeg'
import exp2 from '../assets/expertise-2.jpeg'
import exp3 from '../assets/expertise-3.jpeg'

const services = [
    {
        name: "AI Consulting",
        description: "provide strategic guidance and help businesses identify AI opportunities, assess feasibility, and develop an AI roadmap aligned with their business objectives.",
        picture: exp1
    },
    {
        name: "Custom AI Development",
        description: "We specialize in designing, developing and deploying custom AI solutions tailored to our clients' specific needs",
        picture: exp2
    },
    {
        name: "Data Intelligence and Analytics",
        description: "We leverage AI techniques to extract valuable insights from complex data sets",
        picture: exp3
    }
];

const Services = () => {
    return (
        <div className="flex flex-col items-center bg-secondaryBackground p-8">
            <div className="grid grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative bg-mainBackground rounded-lg shadow p-4 pt-8 overflow-visible"
                    >
                        <img
                            src={service.picture}
                            alt={service.name}
                            className="absolute top-0 left-1/2 w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"
                        />
                        <div className="mt-8 text-center">
                            <h3 className="text-lg font-bold">{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
