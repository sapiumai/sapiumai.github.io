const Banner = () => {
    const bannerData = {
        items: [
            { title: 'Tailored AI Solutions', description: 'Custom-built to address your unique business challenges.' },
            { title: 'Optimize Operations ', description: 'Streamline workflows and enhance efficiency with AI-powered automation.' },
            { title: 'Measurable Impact', description: 'Drive growth with AI strategies that deliver real financial results.' },
            { title: 'Seamless Integration', description: 'AI solutions designed to fit effortlessly into your existing processes and tools' },
            { title: 'Future-Ready Innovation', description: 'Stay ahead of your competition with cutting-edge AI technology.' },
            { title: 'Data-Driven Decisions', description: 'Unlock actionable insights with advanced analytics and AI-powered intelligence.' },
        ]
    }

    return (
        <div className="flex flex-col items-center bg-secondaryBackground p-8 mt-20 mb-20">
            <h4 className="text-secondaryHeading text-4xl mb-5 leading-normal text-center">
                Unlock Efficiency, Innovation, and Growth with AI-Powered Intelligence.
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8d">
                {bannerData.items.map((item, index) => (
                    <div key={index} className="p-4 bg-bannerBoxBackground shadow rounded-lg text-center">
                        <h5 className="text-3xl font-bold text-bannerHeading mt-3 mb-5">{item.title}</h5>
                        <p className="text-bannerPrimaryText text-2xl">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Banner;
