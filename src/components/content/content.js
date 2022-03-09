import '../../assets/styles/layouts/content.scss'
import Icon from '../icon/icon';
import List from '../list/list';

function Content() {

  const iconContent = ["fa-solid fa-user","fa-solid fa-envelope","fa-solid fa-location-dot"]
  const dataPersonal = ['ROGER DAVID ALBA ORTEGA','DAVIDALBORT@OUTLOOK.COM','CUCUTA, COLOMBIA']
  const titleIconContent = dataPersonal.map(data => data);
 
  return (
    <main className='content-container'>
        
        <section className='section-data-personal'>
          <Icon iconList={iconContent} />
        
       
          <List listItems={dataPersonal}/>
         
        </section>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
           dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
              </p>
    
        
    </main>


  );
}


export default Content;