import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full fixed top-0 z-20 flex flex-row justify-between items-center pt-3 px-6 text-textcolor 
        transition-all duration-300 ${scrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="flex flex-row items-center gap-4">
                <img
                    src="./portfolio.ico"
                    alt="logo"
                    className="rounded-full h-[70px] w-[70px]"
                />
                <div className="flex flex-col md:flex-row items-center">
                    <h1 className="font-semibold md:text-3xl text-2xl">
                        Srikumaran &nbsp;
                    </h1>
                    <p className="text-xl lg:text-2xl">
                        <span className="hidden md:inline">| &nbsp;</span>Developer
                    </p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
