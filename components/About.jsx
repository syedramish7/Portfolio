import Image from "next/image";

const About = () => {
    return(

        <section id="about" className="about-container">
            <h2> About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p> As a web developer,I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML,CSS and JavaScript. </p>
                    <p>
                        I am currently studying at Jain College , Bangalore.I am Cse student so I did some experiments in different web models.
                        
                        <p>I enjoy working on Frontend and 
                        Backend applications.
 </p>                   </p>
</div>
          <div className="about-img">
              <Image src="/images/B9EDCF21-0574-4EA5-A955-9F88AB51C338.jpeg" className="profile-img" width={300} height={500} alt="Profile Image" />
            </div>
            </div>
        </section>
    )
}
export default About;