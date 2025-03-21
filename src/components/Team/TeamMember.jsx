import github_logo from '../../assets/github-black.png'
import linkedin_logo from '../../assets/in-logo-blue.png'

const TeamMember = ({ name, role, bio, image, linkedin, github }) => {
    return (
        <div className="w-full mb-8"> {/* Added margin-bottom for increased card gap */}
            <div className="group relative">
                <img
                    src={image}
                    alt={name}
                    className="w-100 h-100 object-cover block rounded-lg"
                />
                <div className="absolute inset-0 bg-teamBioBackground rounded-lg bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                    <p className="text-teamBioText text-sm text-center">{bio}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
                <div>
                    <h4 className="text-xl font-bold">{name}</h4>
                    <p className="text-lg font-semibold text-secondaryHeading">{role}</p>
                </div>
                <div className="flex space-x-2">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={github_logo} alt="GitHub" className="w-6 h-6 ml-2" />
                        </a>
                    )}
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin_logo} alt="LinkedIn" className="w-6 h-6 ml-2" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TeamMember
