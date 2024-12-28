export default defineAppConfig({
  appName: 'Deepa portfolio',
  appDescription: 'Made with ❤️ by Deepa',
  profilePicture: 'assets/profile-picture.jpeg',
  footerName: 'Deepa',
  email: 'kmwtdeepa02@gmail.com',
  twitterUsername: '',
  phone: '+91 9680398806',
  openGraphImage: '',
  socials: {
    github: 'https://github.com/deepa098',
    linkedin: 'https://www.linkedin.com/in/deepa-kumawat-389aa3160/',
    instagram: 'https://codepen.io/kumawatdeepa/pens/public',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
