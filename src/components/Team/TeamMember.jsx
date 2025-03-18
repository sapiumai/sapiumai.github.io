import github_logo from '../../assets/github-black.png'
import linkedin_logo from '../../assets/in-logo-blue.png'

const TeamMember = ({ name, role, bio, image, github, linkedin }) => (
    <div className='w-[30%] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col'>
        <img
            src={image}
            alt={name}
            className='w-full aspect-[7/8] object-cover'
        />

        <div className='p-4'>
            <div className='flex justify-between items-start'>
                <div className='mt-1'>
                    <h3 className='text-2xl font-bold text-primaryHeading'>{name}</h3>
                    <h4 className='text-xl font-semibold text-secondaryText -mt-3'>{role}</h4>
                </div>
                <div className='flex gap-4 mt-1'>
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <img src={github_logo} className="w-7 h-7" />
                        </a>
                    )}
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_logo} className="w-7 h-7" />
                        </a>
                    )}
                </div>
            </div>
            <p className='text-sm text-primaryText mt-4'>{bio}</p>
        </div>
    </div>
)

export default TeamMember
