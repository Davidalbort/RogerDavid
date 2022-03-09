import '../../assets/styles/header.scss'
import Heading from '../heading/heading';
import Icon from '../icon/icon';
import Navbar from '../navbar/nabvar';
function Header({children}) {
    return (
      <header className='header-container'>
          
            <Navbar/>
            
      </header>
      
    );
  }
  
  export default Header;

/*la tarea para mañana es separar un poco los iconos8
*/