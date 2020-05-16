module.exports = {
  siteTitle: 'Harshith Pabbati',
  siteDescription:
    'A Fullstack Web Developer, and a team player dedicated in building and optimizing the performance of user-centric, high-impact websites with 2 years of experience in designing and developing user interfaces, testing, debugging.',
  siteUrl: 'https://harshithpabbati.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  name: 'Harshith Pabbati',
  location: 'Kerela, India',
  email: 'pabbatiharshith@gmail.com',
  github: 'https://github.com/harshithpabbati',
  twitterHandle: '@harshith1304',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/harshithpabbati',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/harshithpabbati',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/harshith_pabbati',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/harshith1304',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
