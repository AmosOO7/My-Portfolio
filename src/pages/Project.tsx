import Projects from "../components/Projects";
import ecom from "../assets/ecom.png";
import pic from "../assets/pic.png";
import cal from "../assets/calgame.png";
import ecomm from "../assets/ecomm.png";
import cube from "../assets/cube.png";
import ifeoma from "../assets/ifeoma.png";
import EcommApp from "../assets/10.jpeg";
const Project = () => {
  return (
    <div>
      <Projects
        number="1"
        box="60vw"
        tech="React-Native, TypeScript, JavaScript, Clerk, Tailwind Css, React Navigation, icons expo, firebase, formik, picker, image picker, momentjs"
        link="https://github.com/AmosOO7/ShoppingApp"
        image={EcommApp}
        content="E-Commerce App is a modern mobile shopping platform built with React Native and Expo. It features secure user authentication with Clerk, real-time data management via Firebase, and smooth navigation using React Navigation. The app's responsive design is powered by Tailwind CSS, with additional functionality for image handling (Image Picker), form management (Formik), and date formatting (Moment.js). Enhanced with Expo Icons and custom pickers, it offers a seamless and intuitive online shopping experience."
      />
      <Projects
        number="1"
        box="30vw"
        tech="React, HTML, CSS, TypeScript, JavaScript"
        link="https://ifeoma-uchefunah.netlify.app/"
        image={ifeoma}
        content="A portfolio website serves as a digital showcase of an individual’s skills, work, and achievements. It is often used by professionals like designers, developers, photographers, writers, and other creatives to present their expertise, attract clients, or secure job opportunities.

"
      />
      <Projects
        number="2"
        box="10vw"
        tech="React, HTML, CSS, TypeScript, JavaScript"
        link="https://cubessquares.netlify.app/"
        image={cube}
        content="Cubessquares is a fast-paced arcade game where players control a character that must evade falling cubes for as long as possible. The longer the player survives, the more challenging the game becomes, with increasing cube speed and density. The game tests reflexes, strategy, and precision."
      />
      <Projects
        number="3"
        box="50vw"
        tech="React, HTML, CSS, TypeScript, JavaScript"
        link="https://commerca.netlify.app"
        image={ecom}
        content="The mockup showcases a sleek, modern, and user-friendly design for an e-commerce platform. The goal is to provide a seamless shopping experience, emphasizing aesthetics, usability, and functionality. The mockup is tailored to reflect the branding of the business and highlights features that drive conversions and user engagement."
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="4"
        box="20vw"
        link="https://nostalgic-gates-9b466c.netlify.app/thegame"
        image={cal}
        content="The game is designed to make learning and practicing math fun and interactive. It helps players, especially children and students, improve their math skills, such as addition, subtraction, multiplication, and division, as well as number recognition and sequencing. The game combines engaging visuals, sound effects, and gamified elements to encourage continuous learning."
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="5"
        box="1vw"
        link="https://nostalgic-gates-9b466c.netlify.app/saes"
        image={ecomm}
        content="The website is designed to sell mobile phones, laptops, and related accessories. It combines sleek, modern design with a focus on showcasing product features and specifications, catering to both tech-savvy shoppers and casual buyers. The platform emphasizes ease of navigation, detailed product information, and trust-building elements like customer reviews and secure payment options."
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="6"
        box="60vw"
        link="https://nostalgic-gates-9b466c.netlify.app/lo"
        image={pic}
        content="The website is designed to provide users with a platform for discovering and downloading high-quality images. It caters to a diverse audience, including graphic designers, photographers, marketers, and casual users. The platform emphasizes ease of use, fast downloads, and a well-organized library of photos across various categories."
      />
    </div>
  );
};

export default Project;
