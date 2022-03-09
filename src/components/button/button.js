import '../../assets/styles/button.scss'

function Button({click,backgroundColor,title}) {
  return (
    <div className='buttoncontainer'>
    <button className='button' onClick={click} 
    style={{backgroundColor: backgroundColor}}>
      {title}
      </button>
    </div>
    
  );
}
Button.defaultProps ={
  title : 'soy el titulo de las props',
  backgroundColor : 'purple'
}

export default Button;
