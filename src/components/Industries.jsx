import React from 'react';

// Import images for the industries (update the file paths accordingly)
import telecomImg from '../assets/telco.jpeg';
import healthcareImg from '../assets/heathcare.jpeg';
import retailImg from '../assets/retail.jpeg';
import financeImg from '../assets/fintech.jpeg';

const Industries = () => {
    const industries = [
        {
            id: 1,
            name: 'Telecommunications',
            image: telecomImg,
            description:
                'We provide solutions to enhance network performance through predictive maintenance, intelligent traffic management, and automated troubleshooting, ensuring seamless connectivity and operational efficiency. Additionally, AI-driven customer analytics and personalized service recommendations help telecom companies unlock new revenue streams and reduce churn.'
        },
        {
            id: 2,
            name: 'Healthcare',
            image: healthcareImg,
            description:
                'The healthcare industry generates vast amounts of data but struggles to extract meaningful insights for better patient outcomes. Our AI-driven predictive analytics and intelligent diagnostics empower healthcare providers to improve decision-making, enhance patient care, and optimize resource allocation, ultimately leading to more efficient and personalized treatments.'
        },
        {
            id: 3,
            name: 'Fintech',
            image: financeImg,
            description:
                'Fraud detection, risk assessment, and customer personalization are major hurdles in the financial sector. Our AI-powered solutions enable real-time fraud prevention, automate compliance processes, and provide tailored financial insights, ensuring secure, efficient, and customer-centric financial services.'
        },
        {
            id: 4,
            name: 'Retail',
            image: retailImg,
            description:
                'Retailers must navigate fluctuating consumer behavior, supply chain inefficiencies, and demand forecasting challenges. Our AI-driven analytics help businesses predict customer trends, optimize inventory management, and personalize shopping experiences, driving sales and enhancing customer engagement.'
        }
    ];

    return (
        <section className="container">
            <div className="mx-auto px-4">
                <h2 className="text-secondaryHeading font-bold text-center text-3xl mt-30 mb-20">Industries We Serve</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {industries.map((industry) => (
                        <div key={industry.id} className="bg-secondaryBackground rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col">
                            <div className="h-48 w-full overflow-hidden rounded-t-lg">
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-4 flex-1">
                                <h3 className="text-xl text-primaryHeading font-semibold mb-2">{industry.name}</h3>
                                <p className="text-primaryText text-sm">{industry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Industries;
