import sanjay from '../../assets/sp.jpeg'
import joaquin from '../../assets/jm.jpg'
import mauricio from '../../assets/mf.jpg'
import TeamMember from './TeamMember'

const Team = () => {
    const teamMembers = [
        {
            name: 'Sanjay Pandey',
            role: 'COO',
            bio: 'Sanjay has over three decades of “Techco”  career, leading winning teams to achieve extraordinary results and multiple marquee deals across EMEA, Latin America, South and South-East Asia. He is passionate about leveraging cutting-edge AI technologies to solve complex challenges and deliver measurable results for clients across different domains.',
            image: sanjay,
            linkedin: 'https://www.linkedin.com/in/pandeysanjay/'
        },
        {
            name: 'Joaquin Molina',
            role: 'CRO',
            bio: 'Senior Business Executive with over 30 years’ experience across all BSS/OSS/VAS domains in the Americas and Europe, Joaquin brings a deep understanding of Communication Service Providers’ challenges in the execution of Digital Transformation strategies, with specialization in Mobile Virtual Network Operators and IoT segments.',
            image: joaquin,
            linkedin: 'https://www.linkedin.com/in/joaquinmolina/'
        },
        {
            name: 'Mauricio Falck',
            role: 'CTO',
            bio: "With a career spanning over three decades in the IT industry, Mauricio is a professional with expertise in telecom IT systems (BSS/OSS), and large - scale systems architecture in both technical and consulting roles. Today, he is dedicated to designing and delivering innovative AI use cases tailored to customer needs.",
            image: mauricio,
            linkedin: 'https://www.linkedin.com/in/mauriciofalck/',
            github: 'https://github.com/mauriciofalck'
        }
    ]

    return (
        <div className="bg-secondaryBackground">
            <h3 className="text-primaryHeading text-secondaryText font-bold text-center text-3xl mt-30 mb-20">Our Team</h3>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/4 flex flex-col text-xl'>
                    <p>
                        <span className="font-bold text-secondaryText">sapium.ai</span> was established by a team of seasoned IT professionals who bring a wealth of
                        expertise to the table.
                    </p>
                    <p className='mt-4'>
                        Our capabilities span across strategy, consulting,
                        software development and implementation, with a specialized focus on AI-driven solutions.
                    </p>
                </div>
                <div className='w-full md:w-3/4 flex flex-col md:flex-row gap-10 justify-between ml-0 md:ml-10 px-0 md:px-10 mt-6 md:mt-0'>
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            image={member.image}
                            linkedin={member.linkedin}
                            github={member.github}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;
