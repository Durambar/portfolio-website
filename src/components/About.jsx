// components/About.jsx

import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Hello! My name is Michael, and I am an enthusiastic apprentice on the path to becoming a skilled 
                        software developer. As a lifelong learner with a passion for technology, I am dedicated to the 
                        pursuit of knowledge and growth in the ever-evolving world of programming.
                    </p>
                    <p>
                        Currently, I am honing my skills through an immersive apprenticeship program that covers a wide 
                        range of topics, including web development, data structures, algorithms, and software design principles. 
                        My experience thus far has provided me with a solid foundation in various programming languages, 
                        such as Python, JavaScript, and C#.
                    </p>
                    <p>
                        In addition to my programming language expertise, I have gained valuable experience working with 
                        SharePoint and M365. This has allowed me to develop a deeper understanding of collaboration tools 
                        and their importance in modern software development. Furthermore, my proficiency in Linux has equipped 
                        me with the ability to navigate and manage various systems effectively.
                    </p>
                    <p>
                        I strongly believe that collaboration and communication are crucial to successful software development. 
                        Working effectively in a team environment not only enhances the final product but also enriches the overall 
                        learning experience. To that end, I am always eager to engage in meaningful discussions, share knowledge, 
                        and learn from the experiences of my peers.
                    </p>
                    <p>
                        Outside of coding, I enjoy playing Dungeons & Dragons, participating in MMORPGs, and going on long walks. 
                        I find that maintaining a balanced lifestyle helps me stay energized and motivated in my pursuit of a 
                        fulfilling career in software development.
                    </p>
                    <p>
                        This portfolio will showcase my work as an when I have time to update it, if you would like to contact me 
                        to ask any questions about current or past projects, please don't hesitate to get in touch via <a href="mailto:michael@gilfred.me">email</a> or <a href="https://linkedin.com/in/mc-jackson" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                    {/* <p>
                        If you would like to connect or discuss potential opportunities, please feel free to reach out to me 
                        via [email, LinkedIn, or other preferred method of contact]. I look forward to exploring new projects 
                        and expanding my horizons in the world of software development.
                    </p>
                    <p>
                        Thank you for visiting my portfolio, and have a great day!
                    </p> */}
                </div>
                <div className="about-img">
                    {/* <Image src='/images/about.jpg' className="profile-img" width={500} height={250} /> */}
                    <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} />
                </div>
            </div>
        </div>

    )
}

export default About;