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
    "A dynamic developer 🚀 with expertise in Audio and Image Processing from roles at Samsung and NIT Surat. Proven excellence in projects like Mono-to-Stereo Conversion and Single Shot Face Recognition, complemented by strong accolades from IIIT Naya Raipur and Kaggle. Proficient in Python, C++, and advanced frameworks like TensorFlow and PyTorch."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1x-HNAFsESViGgSEt9Es2cmeLAbUI2VFr/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "CRAZY NEURAL NETWORK DEVELOPER WHO WANTS TO OPTIMISE EVERY NEURAL NET OUT THERE",
  skills: [
    emoji(
      "⚡ Develop highly efficient Computer Vision / Natural Language Processing Models for high end Object Detection and Text Processing"
    ),
    emoji("⚡ Leveraged state-of-the-art tools and platforms like TensorFlow, PyTorch, and Kaggle GPU Accelerator for optimal results."),
    emoji(
      "⚡ Integration of Heavy Computer Vision Models with Nano-Powered GPU Accelerator such as Jetsen Nano/ Rpi"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"  // There's no dedicated TensorFlow icon in FontAwesome; using a generic AI icon as a placeholder
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire-alt"  // Similarly, using a different fire-related icon for PyTorch as a placeholder
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"  // Using an eye icon as a placeholder for OpenCV
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-calculator"  // Using calculator as a representation for mathematical calculations in NumPy
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-leaf"
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
  title: "Impactfull Projects",
  subtitle: "Project to whom I gave countless days and nights to achieve",
  projects: [
    {
      image: require("./assets/images/rover.webp"),
      projectName: "WeedPro: AI-Powered Detection Onion Fields",
      projectDesc: "We meticulously curated a dataset comprising 800 annotated images aimed at augmenting weed detection capabilities in Chhattisgarh's onion fields. We leveraged a modified U-Net Neural Network architecture to achieve advanced multi-class segmentation, a claim substantiated by a 0.65 cosine similarity during evaluations and the solution was seamlessly integrated and deployed on a rover using the Jetson Nano platform.. The technology stack underpinning this endeavor included Python, OpenCV, Kaggle GPU Accelerator, Scikit-Learn, and TensorFlow,Jetsen Nano.",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://github.com/rahulssr/Weed-Segmentation"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/textclf.webp"),
      projectName: "Patent_Classification",
      projectDesc: "In the Patent_classification project, extensive data engineering and analysis were performed on a comprehensive patent dataset, accentuating vital legal insights, stripping away superfluous information, and pinpointing inconsistencies. The project employed an advanced LLM ensemble, combining the strengths of RoBERTa and DeBERTa, to achieve nuanced legal semantic extraction. This endeavor was powered by a tech stack encompassing Python, PyTorch, the Kaggle GPU Accelerator, and Scikit-Learn.",
      footerLink: [
        {
          name: "Visit Link",
          url: "https://github.com/rahulssr/Patent_Classification"
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
