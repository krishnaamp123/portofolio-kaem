// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logofinal.png";
import logo from "./assets/logo.svg";
import mail from "./assets/mail.png";
// Profile Image
import profile from "./assets/profile.jpg";
// Certificate Image
import certif1 from "./assets/certificates/memahamikotlin.jpg";
import certif2 from "./assets/certificates/mengenaljava.jpg";
import certif3 from "./assets/certificates/mengenalkotlin.jpg";
// Porject Images
import projectImage1 from "./assets/projects/outsourcing.png";
import projectImage2 from "./assets/projects/expat.png";
import projectImage3 from "./assets/projects/expat1.png";
import projectImage4 from "./assets/projects/expat2.png";
import projectImage5 from "./assets/projects/good.png";

// Logos
export const logos = {
  logogradient: logogradient,
  mail: mail,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Thank You!",
  // tagline: "Please click on the menu above more information",
  img: profile,
  about: `I’m Krishna, an IT graduate from Udayana University with a passion for creating impactful digital experiences. I specialize in web development using Laravel and mobile app development with Flutter, bringing both performance and clean design to every project. I have experience in developing employee portals, hiring management systems, and wholesale management applications, as well as maintaining retail management applications. I also have hands on experience in setting up and managing shared hosting and VPS environments. I combine technical expertise with problem solving skills to deliver solutions that work and last.`,
};

export const certifDetails = {
  certif1: {
    text: "understanding kotlin concepts for android",
    img: certif1,
  },
  certif2: {
    text: "get to know the basics of java",
    img: certif2,
  },
  certif3: {
    text: "get to know the kotlin programming language",
    img: certif3,
  },
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/krishnaamp",
  github: "https://www.github.com/krishnaamp123",
  email: "mailto:krishnamahendra1234@gmail.com",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Junior IT Developer",
    Description: "Creating mobile applications, APIs, and websites",
    Company: `Expat. Roasters`,
    Location: "Bali",
    Type: "Full Time",
    Duration: "Dec 2024 - Present",
  },
  {
    Position: "Information Technology Intern",
    Description: "Creating mobile applications, APIs, and websites",
    Company: `Expat. Roasters`,
    Location: "Bali",
    Type: "Internship",
    Duration: "Sep 2024 - Dec 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor’s Degree in Information Technology ",
    Company: "Udayana University",
    Description: "Majoring in information systems and focusing on mobile application development",
    Location: "Bali",
    Duration: "Sep 2020 - Aug 2024",
  },
  {
    Position: "Android Java for Mobile Developer SIB Kampus Merdeka",
    Company: `PT. Hacktivate Teknologi Indonesia`,
    Description: "Learning about Mobile Development, especialy Android Development using Java Native and Kotlin",
    Location: "Jakarta",
    Duration: "Aug 2022 - Dec 2022",
  },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Outsourcing Application",
    image: projectImage1,
    description: `The system allows outsourcing clients to search and order services more efficiently, providing a payment solution through a payment gateway to streamline transactions via the application. The system is built using the Software Development Life Cycle (SDLC) with a waterfall model. The system utilizes Go technology as the backend service, Flutter for creating the client application, and MySQL as the DBMS.`,
    techstack: "Flutter",
    githubLink: "https://github.com/krishnaamp123/outsourcing.git",
  },
  {
    title: "Wholesale Application",
    image: projectImage2,
    description: `The system is used to streamline the ordering process for goods from wholesale customers and then manage the stock for each wholesale customer. The system uses Laravel as the backend framework, Flutter for developing the client application, and MySQL as the DBMS.`,
    techstack: "Flutter, Laravel",
  },
  {
    title: "Hiring Management",
    image: projectImage3,
    description: 'This system is designed to streamline the recording of applicant data across all stages of the hiring process, from application submission to shortlisting, interviews, and final hiring. It is built using Laravel for both the backend and frontend, with MySQL as the database management system and Bootstrap for styling.',
    techstack: "Laravel",
    previewLink: "https://recruitment.expatroasters.com",
  },
  {
    title: "Employee Portal",
    image: projectImage4,
    description: `This system is used to store data on purchases using free of charge made by employees and monitor them, besides that it is also used to provide information to each department and newsletters for all employees. The system is made using Laravel for the frontend and backend, the database uses MySQL and Bootstrap for styling.`,
    techstack: "Laravel",
    previewLink: "https://internal.expatroasters.com",
  },
  {
    title: "Good Company Bali",
    image: projectImage5,
    description: `This system powers three integrated modules: Good Car for helping users connect and engage in trusted car buying and selling, Good Wash for professional vehicle care and detailing services, and Good Media for automotive event coverage, vlogs, and cinematic video production. Built with Laravel for both frontend and backend, it uses MySQL for the database and Tailwind CSS for styling.`,
    techstack: "Laravel",
    previewLink: "https://goodcompanybali.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};