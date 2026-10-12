// Site content. Facts come from the verified resume content brief
// (October 12, 2026), the approved portfolio selection (portfolioData.js),
// and the existing published site. Keep it that way: anything new needs
// Luke's confirmation before it goes in this file.

export const person = {
  name: "Luke Johnston",
  headline: "I write curriculum, teach the Bible, and build Bible-study resources.",
  location: "Northeast Ohio",
  email: "luke.johnston1103@gmail.com",
  phone: "330-814-2764",
  phoneHref: "tel:+13308142764",
  site: "https://drlukejohnston.com",
  portrait: "/luke-johnston-enhanced.png",
  heroVideo: "/hero-video.mp4",
  intro:
    "I develop curriculum and teaching resources, lead youth and discipleship ministries, write and publish books, and create digital content. My experience also includes insurance account service, sales, missions preparation, and volunteer coordination.",
};

/* Navigation ------------------------------------------------------------ */

// Every older URL still works. /curriculum and /digital are new.
export const navItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Books", href: "/books" },
  { label: "Apps & Websites", href: "/digital" },
  { label: "Experience", href: "/resume" },
  { label: "Resume", href: "/documents" },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Media", href: "/show" },
  { label: "All downloads", href: "/documents" },
  { label: "Academic records", href: "/documents#records" },
];

/* Key documents --------------------------------------------------------- */

// Each document shows View and Download buttons only when its file is
// present in public/ at build time (see app/_lib/publicFiles.js).
// `pages` is optional; fill it in from the final files.
export const keyDocuments = [
  {
    id: "resume",
    label: "Professional resume",
    description: "The resume to send with an application.",
    href: "/documents/luke-johnston-resume.pdf",
    downloadName: "Luke-Johnston-Resume.pdf",
    pages: 3,
  },
  {
    id: "cv",
    label: "Comprehensive CV",
    description: "The thorough CV, for a complete record.",
    href: "/documents/luke-johnston-comprehensive-cv.pdf",
    downloadName: "Luke-Johnston-Comprehensive-CV.pdf",
    pages: 4,
  },
  {
    id: "portfolio",
    label: "Curriculum portfolio",
    description: "29 curriculum and teaching collections, including five flagship curricula, with a linked table of contents.",
    href: "/documents/luke-johnston-curriculum-portfolio.pdf",
    downloadName: "Luke-Johnston-Curriculum-Portfolio.pdf",
    pages: 1627,
  },
];

// Shown on the Resume page only if the file is present. Remove this entry if
// the file is out of date.
export const extraDocuments = [
  {
    id: "portfolio-overview",
    label: "Portfolio overview",
    description: "A seven-page introduction and linked guide to the curricula, books, and digital projects.",
    href: "/documents/luke-johnston-portfolio-overview.pdf",
    downloadName: "Luke-Johnston-Portfolio-Overview.pdf",
    pages: 7,
  },
];

/* Teaching -------------------------------------------------------------- */

// The two age-group figures are separate and may overlap.
// Never add them together.
export const teaching = {
  groups: [
    { id: "children", years: 7, label: "Teaching children", ages: "ages 6–11" },
    { id: "youth", years: 5, label: "Teaching youth", ages: "ages 12–19" },
  ],
  adults:
    "Adult teaching, evangelism training, individual discipleship, and volunteer development.",
  note: "Years are counted separately for each age group and may overlap.",
};

/* Experience ------------------------------------------------------------ */

export const currentRoles = [
  {
    title: "Youth and Discipleship Pastor",
    org: "Millheim Baptist Church",
    place: "Akron area, Ohio",
    dates: "May 2025–Present",
    points: [
      "Develop and teach biblical curriculum and mentor students.",
      "Coordinate youth activities, outreach, logistics, communication, and volunteers.",
      "Established one-to-one student discipleship and created curriculum for a churchwide one-to-one discipleship class.",
      "Collaborate with pastoral staff on classes and discipleship.",
      "Current doctoral ministry project, in progress: an intentional one-to-one discipleship process at Millheim.",
    ],
  },
  {
    title: "Account Representative",
    org: "State Farm",
    place: "North Canton, Ohio",
    dates: "October 2020–Present",
    points: [
      "Manage customer relationships and ongoing client accounts.",
      "Respond to account and service questions and coordinate issue resolution with colleagues.",
      "Provide dependable follow-through for clients.",
    ],
  },
  {
    title: "Author and Independent Publisher",
    org: null,
    place: null,
    dates: "September 2025–Present",
    points: [
      "Research, write, revise, format, publish, and promote Bible books and teaching resources.",
      "Cover Bible history, manuscripts, textual questions, and archaeological evidence, explaining complex subjects clearly.",
    ],
  },
  {
    title: "Cofounder and Content Creator",
    org: "JohnstonBros",
    place: null,
    dates: "January 2026–Present",
    dateNote: "Content creation",
    points: [
      "Plan educational podcast and video topics and organize content.",
      "Contribute to recording, editing, publication, website content, app and digital presentation, and collaborative written resources.",
    ],
  },
];

export const previousRoles = [
  {
    title: "Youth and Evangelism Director",
    org: "Greentown Baptist Church",
    place: "Uniontown, Ohio",
    dates: "April 2022–October 2025",
    dateNote: "Evangelism leadership from February 2019",
    points: [
      "Developed youth curriculum and recurring Bible studies.",
      "Designed evangelism training materials and trained hundreds of adults and students in communicating the gospel.",
      "Organized outreach, camps, retreats, activities, and volunteers.",
      "Supported individual discipleship.",
    ],
  },
];

// Describe as adapted and prepared training. Do not claim completed travel,
// delivery, or sole original authorship.
export const missions = [
  {
    title: "Portland mission preparation",
    org: null,
    place: null,
    dates: "2025",
    points: [
      "Adapted and prepared teacher and participant materials for a six-week mission-team training schedule in May and June 2025.",
      "Materials address cultural orientation, communicating the gospel, respectful conversations, A.S.K. evangelism, anticipated questions, roleplay, safety, and travel logistics.",
      "Prepared informational meeting resources, devotional and encouragement resources, and plans for daily team devotions and prayer.",
      "Held a leadership role in planning the team’s preparation.",
    ],
  },
];

export const digitalWork = {
  summary:
    "Develop and direct ministry websites and Bible-study resources: define their purpose, organize content, shape the user experience, and review the results.",
  projects: [
    { title: "JohnstonBros platform", text: null },
    {
      title: "Online Bible-study resources associated with Eternal Word",
      text: "Including handbook content and study aids.",
    },
  ],
  tools: [
    "ChatGPT",
    "Claude",
    "Codex",
    "Microsoft Office",
    "Google productivity tools",
    "VS Code",
    "GitHub",
    "Vercel",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ],
};

/* Education ------------------------------------------------------------- */

export const educationInProgress = [
  {
    title: "Doctor of Ministry",
    org: "Luther Rice College & Seminary",
    place: "Lithonia, Georgia",
    dates: "Expected Spring 2027",
    points: ["Doctoral ministry project in progress."],
  },
  {
    title: "Master of Arts in Church Ministry",
    org: "Mission University",
    place: "Springfield, Missouri",
    dates: "Expected Spring 2027",
  },
  {
    title: "Bachelor of Science in Biblical Studies",
    org: "Mission University",
    place: "Springfield, Missouri",
    dates: "Expected Spring 2027",
  },
];

export const educationCompleted = [
  {
    title: "Master of Divinity in Pastoral Leadership",
    org: "Andersonville Theological Seminary",
    place: "Camilla, Georgia",
    dates: "December 2025",
  },
  {
    title: "Doctor of Philosophy in Biblical Studies",
    org: "Queens College of Theology",
    place: "Charlotte, North Carolina",
    dates: "January 2025",
  },
  {
    title: "Doctor of Educational Ministry in Pastoral Leadership",
    org: "Andersonville Theological Seminary",
    place: "Camilla, Georgia",
    dates: "October 2024",
  },
  {
    title: "Doctor of Biblical Exposition",
    org: "Andersonville Theological Seminary",
    place: "Camilla, Georgia",
    dates: "October 2024",
  },
  {
    title: "Associate of Arts in Biblical Studies",
    org: "Baptist Bible College, now Mission University",
    place: "Springfield, Missouri",
    dates: null, // completed; no conferral date on record
  },
];

export const educationAdditional = [
  {
    title: "High school diploma",
    org: "Manchester High School",
    place: "Akron, Ohio",
    dates: "June 2018",
  },
];

/* Professional development and skills ----------------------------------- */

export const professionalDevelopment = [
  {
    title: "Ohio insurance continuing education",
    org: "WebCE",
    place: null,
    dates: "October 2024",
    points: [
      "24 documented hours covering health savings accounts, ethics, annuity suitability and best-interest standards, homeowners insurance, personal auto insurance, anti-money laundering, and final expense insurance.",
    ],
  },
];

// Items are written in sentence case so a group reads as one list.
export const skillGroups = [
  {
    title: "Curriculum and teaching",
    items: [
      "curriculum development",
      "lesson planning",
      "student and teacher resources",
      "Bible exposition",
      "adult training",
      "public speaking",
    ],
  },
  {
    title: "Ministry and leadership",
    items: ["discipleship", "mentoring", "volunteer and event coordination", "missions preparation"],
  },
  {
    title: "Writing and research",
    items: [
      "biblical research",
      "long-form writing",
      "editing",
      "document formatting",
      "independent publishing",
    ],
  },
  {
    title: "Service and sales",
    items: ["customer and account service", "sales", "issue resolution"],
  },
  {
    title: "Digital",
    items: ["podcast and video planning", "website content", "digital resource organization"],
  },
];

/* Media (supporting /show route) ---------------------------------------- */

export const mediaProjects = [
  {
    id: "johnstonbros",
    title: "JohnstonBros",
    text: "Educational podcast and video content. I plan topics, organize content, and contribute to recording, editing, and publication.",
    links: [
      {
        label: "JohnstonBros on YouTube",
        href: "https://www.youtube.com/channel/UCeFimD5XDt6i9LATwWVXSBg",
      },
      { label: "Watch a featured series", href: "https://youtu.be/b8YelGLYFH4" },
    ],
    image: {
      src: "/why-kjv-thumbnail.png",
      alt: "Thumbnail for a JohnstonBros video series",
      ratio: "16 / 9",
      fit: "cover",
    },
  },
  {
    id: "podcast",
    title: "How To Study the Bible",
    text: "A Millheim Baptist Church podcast that helps listeners approach Scripture with confidence and care.",
    links: [
      {
        label: "Listen on Spotify",
        href: "https://open.spotify.com/show/033ti3d3jH6yt4xdqginSC?si=0a847f544a594aa6",
      },
    ],
  },
  {
    id: "oldest-and-best",
    title: "Oldest & Best",
    text: "An interactive evidence database for examining contested New Testament passages through Greek witnesses, ancient versions, and church fathers.",
    links: [{ label: "Visit Oldest & Best", href: "https://oldestandbest.com/" }],
  },
  {
    id: "app",
    title: "Johnston Bros app",
    text: "Brings JohnstonBros website content and media together in one mobile app. I contribute to its content and digital presentation.",
    links: [
      {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/johnston-bros/id6763349676",
      },
    ],
    image: { src: "/johnston-bros-app.webp", alt: "Johnston Bros app preview", ratio: "4 / 5", fit: "contain" },
  },
];

/* Academic records (supporting /documents#records) ---------------------- */

// Same files and paths as before. Descriptions no longer quote hours or GPAs.
export const academicRecords = [
  {
    title: "Doctor of Ministry transcript",
    text: "Luther Rice College & Seminary. Unofficial transcript for the degree in progress.",
    href: "/documents/luther-rice-dmin-transcript.pdf",
  },
  {
    title: "Doctor of Ministry status sheet",
    text: "Luther Rice College & Seminary. Program status sheet.",
    href: "/documents/luther-rice-status-sheet.pdf",
  },
  {
    title: "Master of Divinity transcript",
    text: "Pastoral Leadership. Andersonville Theological Seminary.",
    href: "/documents/mdiv-transcript.pdf",
  },
  {
    title: "Doctor of Philosophy transcript",
    text: "Biblical Studies. Queens College of Theology.",
    href: "/documents/queens-college-phd-transcript.pdf",
  },
  {
    title: "Doctor of Educational Ministry transcript",
    text: "Pastoral Leadership. Andersonville Theological Seminary.",
    href: "/documents/andersonville-dedmin-transcript.pdf",
  },
  {
    title: "Doctor of Biblical Exposition transcript",
    text: "Andersonville Theological Seminary.",
    href: "/documents/andersonville-dbexposition-transcript.pdf",
  },
];
