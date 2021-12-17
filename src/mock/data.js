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
  paragraphTwo: ' ',
  paragraphThree:
    'Previously I worked as a SDE Intern at Radien.Design. I was also selected as a fellow as part of the Github Externship Program, where I worked with the IncubateIND team.',
  resume: 'https://drive.google.com/file/d/15UACJ8rwv8_OEbNxS04rXA-3Cwap3atb/view?usp=sharing', // if no resume, the button will not show up
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
    img: 'DK.jpg',
    title: 'DanceKart',
    info: 'An ecommerce webapp for dance enthusiasts.',
    info2:
      'Entertainment Hub is a fully responsive website where you can find trending movies and tvseries, read the plot, know the cast crew and event watch the trailers of the same. You can also search for movies/tv series in the search page.',
    url: 'https://dancekart.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/DanceKart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CP.jpeg',
    title: 'CinemaPlus',
    info: 'A library catalog webapp for movies and tv series with sharing feature.',
    info2:
      'Entertainment Hub is a fully responsive website where you can find trending movies and tvseries, read the plot, know the cast crew and event watch the trailers of the same. You can also search for movies/tv series in the search page.',
    url: 'https://cinemaplus.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/CinemaPlus', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PC.jpeg',
    title: 'Precis',
    info: 'A social networking app inspired from Twitter.',
    info2:
      'Entertainment Hub is a fully responsive website where you can find trending movies and tvseries, read the plot, know the cast crew and event watch the trailers of the same. You can also search for movies/tv series in the search page.',
    url: 'https://dev.d2tvr0yuswqzh.amplifyapp.com/#/',
    repo: 'https://github.com/khalatevarun/Precis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'x.jpeg',
    title: 'CompileTabs',
    info: 'A chrome extension to Save, Manage, Group and Share links at one place',
    info2:
      'Entertainment Hub is a fully responsive website where you can find trending movies and tvseries, read the plot, know the cast crew and event watch the trailers of the same. You can also search for movies/tv series in the search page.',
    url: 'https://dev.d2tvr0yuswqzh.amplifyapp.com/#/',
    repo: 'https://github.com/khalatevarun/Precis', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'TG.jpeg',
    title: 'Typingify',
    info: 'A webapp where you can practice and test your speed typing skills.',
    info2:
      'Entertainment Hub is a fully responsive website where you can find trending movies and tvseries, read the plot, know the cast crew and event watch the trailers of the same. You can also search for movies/tv series in the search page.',
    url: 'https://typingify.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/Typingify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'WH.jpg',
    title: 'Word Hunt',
    info: 'A 12 language dictionary webapp',
    info2:
      'Word Hunt is a fully responsive website where you can find meanings to words in 12 different languages and also know the pronounciations.',
    url: 'https://wordshunt.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/WordHunt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SL.jpg',
    title: 'Shortly',
    info: 'A webapp to shorten your links',
    info2:
      'Shortly is a fully responsive website where you can shorten any website links and get copied to your clipboard.',
    url: 'https://shortlinkit.varunkhalate.me/',
    repo: 'https://github.com/khalatevarun/Shortly', // if no repo, the button will not show up
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
