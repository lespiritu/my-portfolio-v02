interface featuredProjectShade {
  title: string;
  variant?: 'primary' | 'secondary';
  descriptionText: string;
  usedTools: string[];
  externalLink: string;
  imageLink: string;
  githubLink?: string;
  gitlabLink?: string;
  learnMoreLink?: string;
}
export const featuredProjectData: featuredProjectShade[] = [
  {
    title: 'Tenzies Mini Game',
    variant: 'primary',
    descriptionText:
      'In this project I used reactjs and other react libraries.I also added the functionality to record your top score in the device. I used local storage for this and react icon library',
    usedTools: ['html', 'css', 'github', 'javascript', 'react.js', 'React Icon Library'],
    githubLink: 'https://github.com/lespiritu/tenzies-game',
    externalLink: 'https://lespiritu.github.io/tenzies-game/',
    imageLink: 'https://lespiritu.github.io/web-porfolio/images/project-1.jpg',
  },

  {
    title: 'Protfolio Template',
    variant: 'secondary',
    descriptionText: `I used to work with my dev ops cousin to this project. I'll do the frontend task for the whole project and since I don't have any knowledge for some tools like typescript, I study it myself and goodthing I can manage to learn with the basic and the usage of the tools.`,
    usedTools: [
      'scss',
      'gitlab',
      'javascript',
      'react.js',
      'Nx Monorepo ',
      'Story Book',
      'Framer Motion',
      'React ClassName',
      'tippyjs/react',
      'React Icon',
      'React Scroll',
    ],
    externalLink: 'https://leo.devatnight.com/',
    imageLink: 'https://lespiritu.github.io/web-porfolio/images/project-2.jpg',
    gitlabLink: 'https://gitlab.com/sebulinozeke.free/portfolio101',
    githubLink: 'https://github.com/lespiritu/my-portfolio-v02',
  },

  {
    title: 'Memes Generator',
    variant: 'primary',
    descriptionText:
      'This Memes Generator can generate random image. I used API for this project to get image in free API website.',
    usedTools: ['html', 'css', 'github', 'javascript', 'react.js', 'Fetch data from API'],
    githubLink: 'https://github.com/lespiritu/memes-generator',
    externalLink: 'https://lespiritu.github.io/memes-generator/',
    imageLink: 'https://lespiritu.github.io/web-porfolio/images/project-3.jpg',
  },
];
