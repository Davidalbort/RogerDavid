import '../../assets/styles/navbar.scss'
import Heading from '../heading/heading';
import Icon from '../icon/icon';
import List from '../list/list';

function Navbar(props) {
  return (
      <nav className='container-nav'>
         <Heading/>
         <List/>
        <section className='icon-nav'>
         <Icon/>
        </section>
         

      </nav>
    
    
  );
}

export default Navbar;