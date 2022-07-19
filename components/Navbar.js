import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/assets/shared/logo.svg" width={48} height={48} />
            </div>
            <div className="nav-links__wrapper">
                <a><b>00</b> Home</a>
                <a><b>01</b> Destination</a>
                <a><b>02</b> Crew</a>
                <a><b>03</b> Technology</a>
            </div>

        </nav>
    );
}

export default Navbar