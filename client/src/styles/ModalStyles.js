const modalStyles = () => ({
  root: {
    backgroundColor: 'white',
    width: 500,
    height: 'auto',
    marginTop: '6rem',
    position: 'absolute',
    padding: '3rem',
    borderRadius: 10
  },
  item: {
    width: '100%'
  },
  flexItem: {
    display: 'flex', 
    alignItems: 'center', 
    width: '100%'
  },
  customInput: {
    flex: 1, 
    border: '1px solid #e6e6e6', 
    padding: '1rem', 
    borderRadius: 10
  },
  customInputButton: {
    color:'#3A8DFF', 
    marginLeft: 5
  }
});

export default modalStyles;