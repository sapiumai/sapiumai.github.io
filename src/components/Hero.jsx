import bgHero from "../assets/bg-hero.png"

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bgHero})` }}
            className="flex flex-col justify-center items-center h-96">
            <h3 className="text-heroHeading text-xl">Transform your business with AI</h3>
            <h4 className="text-heroSecondaryText text-xl">We transform operational pain points into AI enabled use cases</h4>
        </div>
    )
}

export default Hero;
