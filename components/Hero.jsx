import Image from "next/image";
import TypewriterEffect from "./ui/typewriter-effect";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src="/images/CBD91381-F755-46D1-B39C-D7C8A59385BF_1_105_c.jpeg" className="profile-img" width={200} height={300} alt="my pic" />
        <div className="hero-text">
            <TypewriterEffect text={["Hey, I'm Ramish 👋🏻", "I'm a Software Engineer", "I do web dev!"]} speed={150} />
            <p> I'm a btech cse student and a web developer in Bangalore, India. I make reactjs and nextjs models websites</p>
            <div className="social-icons">
                <a href="https://x.com/ramishsyd05"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/syedramish7"
                aria-label="github"
                target="_blank"
                rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                 </a>
                 <a href="https://www.linkedin.com/in/syed-ramish-a91a93371/"
                 aria-label="LinkedIn"
                 target="_blank"
                 rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                 </a>
            </div>
        </div>
        </div>
    )
}
    export default Hero;
