import bg from '../assets/messenger-bg-img.png';

const landingStyles = () => ({
  root: {
    height: '100vh',
    width: '100%',
    margin: -16
  },
  sidebar: {
    backgroundImage: 'linear-gradient(#3A8DFF, #9BC1FB)',
    color: 'white',
    height: '100%',
    width: '100%',
    opacity: 0.92,
    margin: 0
  },
  sidebarBackground: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: '101%',
    width: '100%',
    margin: 0
  },
  sidebarText: {
    width: '70%'
  },
  sidebarIcon: {
    marginTop: '35%'
  }
});

export default landingStyles;