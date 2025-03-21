import bgHero from "../assets/bg-hero.png"

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bgHero})` }}
            className="flex flex-col text-center justify-center items-center h-96">
            <h4 className="text-heroHeading text-6xl font-bold">Empowering your Business with AI-Driven Solutions</h4>

        </div>
    )
}

export default Hero;
