const messageStyles = () => ({
  root: {
    display: 'flex', 
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    justifyContent: props => 
      props.username === props.message.author 
        ? 'flex-end'
        : 'flex-start'
  },
  message: {
    padding: '1rem',
    borderRadius: 10,
    color: props => 
      props.username === props.message.author 
        ? 'white'
        : 'black',
    backgroundColor: props =>
      props.username === props.message.author 
        ? '#3A8DFF'
        : '#F4F6FA'
  }
});

export default messageStyles;