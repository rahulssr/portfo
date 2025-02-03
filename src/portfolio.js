/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Shukla",
  title: "Hi all, I'm Rahul",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building dynamic Web applications using JavaScript, React.js, Node.js[MERN]. Previously an intern NIT Surat and IIITM Gwalior, I have worked on innovative projects, blending Full Stack Development with AI-driven solutions. Skilled in Python and C++, with hands-on experience in frameworks like TensorFlow and PyTorch, I bring a problem-solving mindset and a deep understanding of modern development practices."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DZit1BAMC1W5f87uTiQJ8x0dE3QgvpMC/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rahulssr",
  linkedin: "http://linkedin.com/in/rahulssr1/",
  gmail: "rahuls20101@iiitnr.edu.in",
  
  twitter: "https://twitter.com/ShuklaJi_16",
  kaggle: "https://www.kaggle.com/rahulssr",
  stackoverflow: "",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER WHO BUILDS SCALABLE AND EFFICIENT SOLUTIONS",
  skills: [
    emoji(
      "⚡ Develop full-stack web applications using React, Node.js, Express, MongoDB, and Socket.io to create seamless and responsive user experiences."
    ),
    emoji("⚡ Design and implement scalable backend architectures using Node.js, Express, and MongoDB, ensuring high performance and easy maintenance."),
    emoji(
      "⚡ Leverage AI frameworks like TensorFlow and PyTorch to build models in Computer Vision and Natural Language Processing."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "socket.io",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      UniversityName: "International Institute of Information Technology Naya Raipur",
      logo: require("./assets/images/iiitnr.png"),
      subHeader: "B. Tech - Electronics & Communication Engineering",
      duration: "December 2020 - 2024",
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PyTorch",
      progressPercentage: "85%"
    },
    {
      Stack: "Python",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
   
    {
      role: "AI Research Intern",
      company: "NIT Surat",
      companylogo: require("./assets/images/Nit_Surat.png"),
      date: "July 2022 - Oct 2022",
      descBullets: [
        "Developed the  Single Shot Face Recognition  system, a face recognition model based on Siamese Neural Network technology.",
        "Implemented Triplet Loss with anchors in conjunction with the Siamese Model for single-shot recognition, achieving an impressive accuracy of 96.30%."
      ]
    },
    {
      role: "Summer Research Intern",
      company: "IIITM Gwalior",
      companylogo: require("./assets/images/iiitm.jpeg"),
      date: "Jan 2015 – Sep 2015",
      descBullets: [
        "Overview: Constructed an NLP model proficient in summarizing news articles while accurately capturing their essence.",
        "Implementation: Utilized the InShorts news dataset for training and employed the T5 transformer—a comprehensive text-to-text framework—for the model."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Impactful Projects",
  subtitle: "Projects to which I dedicated countless days and nights to achieve",
  projects: [
    {
      image: require("./assets/images/Portal.webp"),
      projectName: "NxtHire - A Seamless & Scalable Job Portal",
      projectDesc: "Engineered a sophisticated job portal optimizing hiring workflows, integrating real-time notifications, seamless job applications, and enterprise-grade authentication to elevate user engagement and operational agility. Built using React, Node.js/Express, and MongoDB, fortified with Clerk authentication and Cloudinary for media handling.",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://job-portal-client-wine-nine.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Chattify.webp"),
      projectName: "Chattify - A Real-time Chat Application",
      projectDesc: "Developed a cutting-edge real-time messaging application that ensures instantaneous and frictionless communication, utilizing advanced web technologies for a highly responsive and immersive user experience. Integrated Socket.io for low-latency messaging, JWT for secure authentication, and Cloudinary for media handling.",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://chattify-8jyl.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/rover.webp"),
      projectName: "Deep Learning-Based Weed Detection System",
      projectDesc: "Developed a specialized weed detection system for Chhattisgarh’s onion fields, leveraging a dataset of 800 images and a modified U-Net model to achieve 94% segmentation accuracy. Integrated the solution with hardware to facilitate precise weed identification and removal in agricultural fields.",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://github.com/rahulssr/Weed-Segmentation"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
   // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8839660079",
  email_address: "rahuls20101@iiitnr.edu.in"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
