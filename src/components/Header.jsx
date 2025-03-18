import logo from '../assets/logo.png';

function Header({ onPageChange, currentPage }) {
    const getLinkStyle = (page) => {
        return `cursor-pointer px-4 py-2 hover:text-headerSecondaryText ${currentPage === page ? 'border-b-2 border-headerBorder' : ''}`;
    };

    return (
        <header className="bg-headerBackground">
            <div className="container mx-auto">

                <div className="mx-auto py-6 flex justify-between items-center">
                    <div className="flex">
                        <img src={logo} alt="Logo" className="w-60 h-15" />
                    </div>
                    <nav className="flex justify-center space-x-4 text-headerPrimaryText">
                        <span className={getLinkStyle('home')} onClick={() => onPageChange('home')}>Home</span>
                        <span className={getLinkStyle('contact')} onClick={() => onPageChange('contact')}>Contact</span>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;