import github from '../assets/github-black.png'
import linkedin from '../assets/in-logo-blue.png'

export default function Footer() {
    return (
        <footer className="w-full mx-auto py-10 bg-footerBackground mt-12 border-t border-footerBorder">
            <div className="container mx-auto">
                <div className="flex flex-row justify-between">
                    <div>
                        <p>&copy; {new Date().getFullYear()} <span className='text-footerSecondaryText font-bold'>sapium.ai</span>  -  All rights reserved.</p>
                    </div>
                    <div className="flex flex-row">
                        <a href="https://github.com/sapiumai" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub" className="w-6 h-6 mr-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/sapiumai" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
