import '../../assets/styles/icon.scss'

function Icon ({iconList,titleIcon}) {

  let iconsLogost = iconList.map( icon => <i className={icon}>{titleIcon}</i>)
  

  return (

    <div   data-icon={iconList} className='icon-container'>

      {iconsLogost}

    </div>
    
  )


}
Icon.defaultProps ={
  iconList : ["fa-brands fa-facebook","fa-brands fa-twitter", "fa-brands fa-linkedin", "fa-brands fa-instagram", "fa-solid fa-phone", "fa-solid fa-envelope"],
  titleIcon: ''

}

export default Icon;
//map, forEach, filter