interface CardDataShape {
  title: string;
  content: string;
  footer: string[];
  externalLink: string;
  githubLink?: string;
  gitlabLink?: string;
  isActive: boolean;
  id: number;
}

export const cardData: CardDataShape[] = [
  {
    id: 1,
    title: 'Tenzies Mini Game',
    content:
      'In this project I used reactjs and other react libraries.I also added the functionality to record your top score in the device. I used local storage for this and react icon library',
    footer: ['html', 'css', 'github', 'javascript', 'react.js', 'React Icon Library'],
    githubLink: 'https://github.com/lespiritu/tenzies-game',
    externalLink: 'https://lespiritu.github.io/tenzies-game/',
    isActive: false,
  },

  {
    id: 2,
    title: 'Protfolio Template',
    content: `I'll do the frontend task for the whole project and since I don't have any knowledge for some tools like typescript, I study it myself and goodthing I can manage to learn with the basic and the usage of the tools.`,
    footer: [
      'scss',
      'gitlab',
      'react.js',
      'Story Book',
      'Framer Motion',
      'React Icon',
      'React Scroll',
    ],
    externalLink: 'https://leo.devatnight.com/',
    gitlabLink: 'https://gitlab.com/sebulinozeke.free/portfolio101',
    githubLink: 'https://github.com/lespiritu/my-portfolio-v02',
    isActive: false,
  },

  {
    id: 3,
    title: 'Memes Generator',
    content: `This Memes Generator can generate random image. I used API for this project to get image in free API website.`,
    footer: ['html', 'css', 'github', 'javascript', 'react.js', 'Fetch data from API'],
    externalLink: 'https://lespiritu.github.io/memes-generator/',
    githubLink: 'https://github.com/lespiritu/memes-generator',
    isActive: false,
  },

  // {
  //   id: 5,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   isActive: false,
  // },

  // {
  //   id: 6,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   isActive: false,
  // },

  // {
  //   id: 7,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   gitHubLink: 'https://github.com/bchiang7/octoprofile',
  //   isActive: false,
  // },
  // {
  //   id: 8,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   gitHubLink: 'https://github.com/bchiang7/octoprofile',
  //   isActive: false,
  // },
  // {
  //   id: 9,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   isActive: false,
  // },

  // {
  //   id: 10,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   isActive: false,
  // },

  // {
  //   id: 11,
  //   title: 'Time to Have More Fun',
  //   content:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequatur maiores consequuntur quos! In sunt tempore corporis possimus minima dicta.',
  //   footer: ['HTML', 'SCSS', 'React.js', 'GitHub'],
  //   externalLink: 'https://octoprofile.vercel.app/',
  //   gitHubLink: 'https://github.com/bchiang7/octoprofile',
  //   isActive: false,
  // },
];
