const contactsStyles = () => ({
  tabsContainer: {
    paddingLeft: '2rem'
  },
  tabsIndicator: {
    display: 'none'
  },
  tab: {
    minWidth: 0, 
    color: '#b3b3b3',
    fontSize: '1rem',
    '&:first-of-type': {
      paddingLeft: 0
    },
    transition: '0.5s'
  },
  selectedTab: {
    color: 'black',
    fontSize: '1.3rem'
  },
  entry: {
    padding: '0.5rem 2rem 0.5rem 2rem'
  },
  friendModal: {
    display: 'flex', 
    justifyContent: 'center'
  },
  addFriend: {
    paddingLeft: '2rem', 
    marginBottom: '0.5rem'
  },
  friend: {
    paddingLeft: '2rem',
    cursor: 'pointer',
    margin: 0,
    '&:hover': {
      backgroundColor: '#99c3ff',
      color: 'white'
    },
    transition: '0.5s'
  },
  selected: {
    backgroundColor: '#3A8DFF',
    color: 'white'
  }
});

export default contactsStyles;