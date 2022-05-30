import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Varun Khalate | Frontend Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Varun Khalate',
  subtitle: 'I am a Frontend developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'I am a passionate frontend engineer proficient in JavaScript and the React ecosystem. I enjoy developing well-designed, responsive, and functional web applications.',
  paragraphThree:
  'Previously I worked as a SDE Intern at Radien.Design. I was also selected as a fellow as part of the Github Externship Program, where I worked with the IncubateIND team.',
  paragraphTwo: 
  'Currently I am working as an SDE intern at Groww as a frontend developer. My responsibilities includes building and maintaing the Groww website.',
  resume: 'https://drive.google.com/file/d/1LY-5NhcwDEL7XIYKY3GvoND32KdxmgkH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'GG.jpg',
    title: 'GradGoggles',
    info: 'Virtual Yearbook & Scrapbook Platform',
    info2: 'Tech Stack: ReactJS, Material UI, Python Flask, Peewee, Flask-Restful, Postgres.',
    url: 'https://gradgoggles.com/',
    repo: 'https://github.com/gradgoggles', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DK.jpg',
    title: 'DanceKart',
    info: 'An ecommerce webapp for dance enthusiasts.',
    info2:
      'Tech stack: ReactJS, Context API, Firebase Cloud FireStore, Firebase Authentication, Express JS, Material UI, Stripe API, Axios, Moment, React Router.',
    url: 'https://dancekart.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/DanceKart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CP.jpeg',
    title: 'CinemaPlus',
    info: 'A library catalog webapp for movies and tv series with sharing feature.',
    info2:
      'Tech stack: ReactJS, Redux API, REST(Movies) API, Firebase Cloud Firestore, Firebase Authentication, Material UI',
    url: 'https://cinemaplus.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/CinemaPlus', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PC.jpeg',
    title: 'Precis',
    info: 'A social networking app inspired from Twitter.',
    info2:
      'Tech stack: ReactJS, Material UI, GraphQL API, AWS Cognito, Amazon DynamoDB, AWS AppSync, AWS Lambda, Amazon Elasticsearch Service',

    url: 'https://dev.d2tvr0yuswqzh.amplifyapp.com/#/',
    repo: 'https://github.com/khalatevarun/Precis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'x.jpeg',
    title: 'CompileTabs',
    info: 'A chrome extension to Save, Manage, Group and Share links at one place',
    info2: 'Tech stack: Chrome API, Javascript, HTML, CSS',
    url: 'https://dev.d2tvr0yuswqzh.amplifyapp.com/#/',
    repo: 'https://github.com/khalatevarun/Precis', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'TG.jpeg',
    title: 'Typingify',
    info: 'A webapp where you can practice and test your speed typing skills.',
    info2: 'Tech stack: Javascript, HTML, CSS',
    url: 'https://typingify.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/Typingify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WH.jpg',
    title: 'Word Hunt',
    info: 'A 12 language dictionary webapp',
    info2: 'Tech stack: ReactJS, Material UI, REST API',
    url: 'https://wordshunt.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/WordHunt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SL.jpg',
    title: 'Shortly',
    info: 'A webapp to shorten your links',
    info2: 'Tech stack: ReactJS, Styles component, REST API',
    url: 'https://shortlinkit.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/Shortly', // if no repo, the button will not show up
  },
];

export const blogsData = [
  {
    title: 'useAsync: A cleaner way to fetch data from APIs',
    url: 'https://varunkhalate.hashnode.dev/useasync-a-cleaner-way-to-fetch-data-from-apis',
    image: '',
    date: 'May 11, 2022',
    tag: '',
    description:
      'Building a custom hook that makes fetching data from APIs cleaner',
  },
  {
    title: 'Memoization in React',
    url: 'https://varunkhalate.hashnode.dev/memoization-in-react',
    image: '',
    date: 'Sep 25, 2021',
    tag: '',
    description:
      'In this post we will learn about memoization and how do we use React.memo(), useMemo() and useCallback() to implement the memoization technique in React.',
  },

  {
    title: 'User Authentication in ReactJS using Firebase',
    image: '',
    url: 'https://varunkhalate.hashnode.dev/user-authentication-in-reactjs-using-firebase',
    date: 'Sep 15, 2021',
    tag: '',
    description:
      'This is an attempt to give you a step by step tutorial to handle user authentication in ReactJS using Firebase.',
  },
  {
    title: 'Ways to clone an object in Javascript',
    image: '',
    url: 'https://varunkhalate.hashnode.dev/ways-to-clone-an-object-in-javascript',
    date: 'May 14, 2022',
    tag: '',
    description: 'Diving deeper into the concept of object cloning and exploring different ways and their limitations.',
  },
  {
    title: 'Implicit Coercion in Javascript',
    image: '',
    url: 'https://varunkhalate.hashnode.dev/implicit-coercion-in-javascript',
    date: 'Oct 16, 2021',
    tag: '',
    description: 'Demystifying implicit coercion in javascript with examples.',
  },
  {
    title: 'Making a simple social network app using AWS services',
    image: '',
    url: 'https://varunkhalate.hashnode.dev/making-a-social-simple-network-app-using-aws-services',
    date: 'Nov 15, 2021',
    tag: '',
    description:
      'This post is a quick walkthrough of some quintessential services offered by AWS Amazon to build a scalable and complex application, rather than a tutorial.',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'khalatevarun@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/varunhnk',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/varun-khalate-441a99182/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/khalatevarun',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
