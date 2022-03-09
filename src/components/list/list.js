import '../../assets/styles/list.scss'
function List({listItems}) {
    let createListItems = listItems.map (item => <li>{item}</li>)
    return (
      <div className='list-container'>
         <ul data-i={listItems}>
             {createListItems}
         </ul>
                  
      </div>
      
    )
  }
  List.defaultProps ={
      listItems : ['Datos personales','Habilidades','Estudios','Contacto']
  }
  
  export default List;

  