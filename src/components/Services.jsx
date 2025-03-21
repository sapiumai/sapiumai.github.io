import exp1 from '../assets/expertise-1.jpeg'
import exp2 from '../assets/expertise-2.jpeg'
import exp3 from '../assets/expertise-3.jpeg'

const services = [
    {
        name: "AI Consulting",
        description: "We help businesses navigate the complexities of AI adoption by providing expert guidance on strategy, implementation, and optimization. ",
        picture: exp1
    },
    {
        name: "Custom AI Development",
        description: "We design and build AI-powered solutions tailored to your specific needs, from machine learning models to intelligent automation systems.",
        picture: exp2
    },
    {
        name: "Data Intelligence",
        description: "We unlock the power of your data with advanced analytics and AI-driven insights, transforming raw information into actionable knowledge.",
        picture: exp3
    }
];

const Services = () => {
    return (
        <div className=''>
            <h3 className="text-primaryHeading text-secondaryText font-bold text-center text-3xl mt-30 mb-20">Our Services</h3>
            <div className="flex flex-col bg-secondaryBackground p-8">
                <div className="grid mt-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-mainBackground rounded-lg border-rowBorder border-1  shadow p-4 pt-8 overflow-visible"
                        >
                            <img
                                src={service.picture}
                                alt={service.name}
                                className="absolute top-0 left-1/2 w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white"
                            />
                            <div className="mt-8 text-center">
                                <h3 className="text-2xl font-bold text-primaryHeading mb-5">{service.name}</h3>
                                <p className="text-primaryText text-lg">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
