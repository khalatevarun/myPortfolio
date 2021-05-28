import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Varun Khalate | JS Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Varun Khalate',
  subtitle: 'I am a JS developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne:
    'I describe myself as a passionate developer who loves coding and building user centric experiences on the web platform. I like to build things that helps me to learn a ton of new stuff and grow as a developer.',
  paragraphTwo:
    'I have working knowledge of Javascript, Typscript and React ecosystem. I am currently learning MERN stack',
  paragraphThree:
    'I am currently building GradgGoggles and working as a JS developer in the team.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'GG.jpg',
    title: 'GradGoggles',
    info: 'Virtual Yearbook & Scrapbook Platform',
    info2:
      'GradGoggles is an attempt to celebrate our wonderful batchmates in this new normal, giving them a platform to close out their fantastic journeys, bid adieu to their friends and have a keepsake for their time in college.',
    url: 'https://gradgoggles.com/',
    repo: 'https://github.com/gradgoggles', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'EH.jpg',
    title: 'Entertainment Hub',
    info: 'One stop destination for movies and tv series',
    info2:
      'Entertainment Hub is a fully responsive website where you can find trending movies and tvseries, read the plot, know the cast crew and event watch the trailers of the same. You can also search for movies/tv series in the search page.',
    url: 'https://entertainment-hub.netlify.app/',
    repo: 'https://github.com/khalatevarun/entertainment-hub', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WH.jpg',
    title: 'Word Hunt',
    info: 'A 12 language dictionary website',
    info2:
      'Word Hunt is a fully responsive website where you can find meanings to words in 12 different languages and also know the pronounciations.',
    url: 'https://wordshunt.netlify.app/',
    repo: 'https://github.com/khalatevarun/WordHunt', // if no repo, the button will not show up
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
