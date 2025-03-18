import Hero from "../components/Hero"
import Features from "../components/Features"
import SuccessStories from "../components/SuccessStories"
import Services from "../components/Services"
import Team from "../components/Team/Team"

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="container mx-auto px-4">
                <Features />
                <Services />
                <SuccessStories />
                <Team />
            </div>
        </div>
    )
}

export default Home