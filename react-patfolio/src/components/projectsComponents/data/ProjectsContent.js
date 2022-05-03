//Header
const websitesHeader =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982226/d_projects/websitesHeader_tqxnz1.png";
const mobileHeader =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982226/d_projects/mobileHeader_cq8w0p.png";

//Projects Main Images
const mobile_AICSChatbotMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982226/d_projects/projectsMain/mobile_AICSChatbotMain_ehqter.png";
const mobile_FilipiknowsMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982226/d_projects/projectsMain/mobile_FilipiknowsMain_rln86p.png";
const website_blogSiteMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982225/d_projects/projectsMain/website_blogSiteMain_qjx4fd.png";
const website_cssWeekendMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982227/d_projects/projectsMain/website_cssWeekendMain_lthi1z.png";
const website_reactWeekendMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982227/d_projects/projectsMain/website_reactWeekendMain_bj6kqe.png";

const website_designToHTMLMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982228/d_projects/projectsMain/website_designToHTMLMain_kiwlap.png";
const website_moneyHeistMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982228/d_projects/projectsMain/website_moneyHeistMain_azye7l.png";
const website_zodiacManiacMain =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982228/d_projects/projectsMain/website_zodiacManiacMain_ngy4ng.png";

//Project GIFS
const mobile_AICSChatbot =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982228/d_projects/projectsModalGIF/mobile_AICSChatbot_l6p0d5.gif";
// "https://res.cloudinary.com/patfolio2022/image/upload/v1651245958/d_projects/projectsModalGIF/mobile_AICSChatbot2_g6s6qj.gif";
const mobile_FilipiKnows =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982227/d_projects/projectsModalGIF/mobile_FilipiKnows_f8hm5c.gif";
const website_cssWeekend =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982226/d_projects/projectsModalGIF/website_cssWeekend_bklf2x.gif";
const website_designToHTML =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982229/d_projects/projectsModalGIF/website_designToHTML_wi6ma4.gif";
const website_moneyHeist =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982228/d_projects/projectsModalGIF/website_moneyHeist_yceojp.gif";
const website_patootiesSite =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982227/d_projects/projectsModalGIF/website_patootiesSite_pf8q93.gif";
const website_reactWeekend =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982228/d_projects/projectsModalGIF/website_reactWeekend_zlkytt.gif";
const website_zodiacManiac =
  "https://res.cloudinary.com/patfolio2022/image/upload/v1650982229/d_projects/projectsModalGIF/website_zodiacManiac_scokq7.gif";

const list_projects = [
  {
    project: "AICS Chatbot",
    caption:
      "A Capstone project for UST College of Information and Computing Sciences featuring an android-based mobile application. This project consists of 4 chatbots that were successfully delivered to cater frequently asked questions and unanswered questions of the UST CICS Community. ",
    technologies: [
      "React Native",
      "Firebase-Firestore",
      "Words API Dictionary",
      "Dialogflow",
      "Figma",
      "Adobe Photoshop",
      "GitHub",
    ],
    images: mobile_AICSChatbotMain,
    header: mobileHeader,
    projectGIFPreview: mobile_AICSChatbot,
  },

  {
    project: "Design To HTML",
    caption:
      "A Telus Internship Output where I successfully made a working and responsive website  by replicating a Figma layout.",
    technologies: ["HTML", "CSS", "Bootstrap", "Figma", "GitHub"],
    images: website_designToHTMLMain,
    header: websitesHeader,
    projectGIFPreview: website_designToHTML,
  },
  {
    project: "FilipiKnows",
    caption:
      "A successfully built Filipino inspired mobile game application focusing on Philippine history, culture and traditions.",
    technologies: ["Android Studio", "Java", "Adobe Photoshop"],
    images: mobile_FilipiknowsMain,
    header: mobileHeader,
    projectGIFPreview: mobile_FilipiKnows,
  },
  {
    project: "My Weekend",
    caption:
      "A Telus Internship Output where I successfully created a simple website featuring my Saturday and Sunday weekend activities",
    technologies: ["HTML", "CSS", "Bootstrap", "React", "GitHub"],
    images: website_reactWeekendMain,
    header: websitesHeader,
    projectGIFPreview: website_reactWeekend,
  },
  {
    project: "CSS Fundamentals",
    caption:
      "A Telus Internship Output where I successfully created a simple 'my weekend website' with the limited use of HTML and CSS for skill foundations",
    technologies: ["HTML", "CSS", "GitHub"],
    images: website_cssWeekendMain,
    header: websitesHeader,
    projectGIFPreview: website_cssWeekend,
  },
  {
    project: "Money Heist Inspired Website",
    caption:
      "A Telus Internship Output where I successfully created a simple website inspired by the Netflix series, Money Heist",
    technologies: ["React", "CSS", "Bootstrap", "GitHub"],
    images: website_moneyHeistMain,
    header: websitesHeader,
    projectGIFPreview: website_moneyHeist,
  },
  {
    project: "Patooties Blog Site",
    caption:
      "A Telus Internship Output where I successfully created a Node JS Blog Site using Mongo DB and by following Net Ninja's Node JS Tutorial.",
    technologies: ["HTML", "CSS", "Node JS", "Mongo DB", "GitHub"],
    images: website_blogSiteMain,
    header: websitesHeader,
    projectGIFPreview: website_patootiesSite,
  },
  {
    project: "Zodiac Maniac",
    caption:
      "A User-Based Web Application that provides user’s Astrological information such as Relationship, Element, Daily Horoscope through their Zodiac signs.",
    technologies: ["PHP", "PHP MySQL", "Aztro API"],
    images: website_zodiacManiacMain,
    header: websitesHeader,
    projectGIFPreview: website_zodiacManiac,
  },
];

export default list_projects;
