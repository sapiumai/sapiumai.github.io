import Hero from "../components/Hero"
import Features from "../components/Features"

import Services from "../components/Services"
import Team from "../components/Team/Team"
import Mission from "../components/Mission"
import Banner from "../components/Banner"

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="container mx-auto px-4">
                <Banner />
                <Mission />
                <Services />
                <Features />
                <Team />
            </div>
        </div>
    )
}

export default Home