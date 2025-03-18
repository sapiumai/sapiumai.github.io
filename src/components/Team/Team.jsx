import sanjay from '../../assets/sp.jpeg'
import joaquin from '../../assets/jm.jpg'
import mauricio from '../../assets/mf.jpg'
import TeamMember from './TeamMember'

const Team = () => {
    const teamMembers = [
        {
            name: 'Sanjay Pandey',
            role: 'COO',
            bio: '"small bio"',
            image: sanjay,
            linkedin: 'https://www.linkedin.com/in/pandeysanjay/'
        },
        {
            name: 'Joaquin Molina',
            role: 'CSO',
            bio: '"small bio"',
            image: joaquin,
            linkedin: 'https://www.linkedin.com/in/joaquinmolina/'
        },
        {
            name: 'Mauricio Falck',
            role: 'CTO',
            bio: "With a career spanning over three decades in the IT industry, Mauricio is a professional with expertise in telecom IT systems (BSS/OSS), and large - scale systems architecture. Today, he is dedicated to designing and delivering innovative AI use cases tailored to customer needs.",
            image: mauricio,
            linkedin: 'https://www.linkedin.com/in/mauriciofalck/',
            github: 'https://github.com/mauriciofalck'
        }
    ]

    return (
        <div className="bg-secondaryBackground my-10">
            <h3 className='text-primaryHeading'>Our team</h3>
            <div className='flex flex-row '>

                <div className='w-1/4 flex flex-col '>
                    <p> <span className="font-bold text-secondaryText">sapium.ai</span> was established by a team of seasoned IT professionals who bring a wealth of
                        expertise to the table.
                    </p>
                    <p>
                        Our capabilities span across strategy, consulting,
                        software development and implementation, with a specialized focus on AI-driven solutions.</p>
                </div>

                <div className='w-3/4 flex flex-row gap-4 w-full justify-between ml-10 px-10'>
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
