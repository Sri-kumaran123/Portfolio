import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
    return (
        <section className="text-white relative w-full">
            <Navbar />
            <div className="w-full sm:w-2/3 textwhite position-x pt-24 flex flex-col gap-4">
                <div>
                    <h1 className="text-5xl lg:text-7xl font-semibold py-3 lg:leading-relaxed leading-snug">
                        Hi, I am &nbsp;<br />
                        <span className="text-highlight">
                            <Typewriter 
                                words={["Srikumaran", "a Developer", "a Learner", "an Innovator"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                </div>
                <div>
                    <p className="text-white/80 mt-4">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am very interested in learning new things and developing my knowledge and skills by obtaining new roles and goals. Giving me a chance to contribute to the organization’s growth will enable me to achieve my goals by facing new challenges and tasks. I consider myself a “motivated, adaptable, and disciplined person,” which helps me assist in the organization’s development.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
