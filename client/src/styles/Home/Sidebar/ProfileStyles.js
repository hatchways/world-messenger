const profileStyles = () => ({
  root: {
    padding: '2rem'
  },
  modal: {
    display: 'flex', 
    justifyContent: 'center'
  },
  avatar: {
    height: '3rem', 
    width: '3rem', 
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      border: '3px solid #3A8DFF'
    }
  }
});

export default profileStyles;