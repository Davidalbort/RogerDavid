

function Heading({typeHeading,title}) {
    let createHeading = typeHeading === 'h1' ? <h1>{title}</h1> :
                        typeHeading === 'h2' ? <h2>{title}</h2> :
                        typeHeading === 'h3' ? <h3>{title}</h3> :
                                                <h4>{title}</h4>
    return (
      <div className="heading-container">

       {createHeading} 

      </div>
      
    );
  }
  Heading.defaultProps={
      typeHeading : 'h3',
      title : "Portafolio"
  }

  
  
  export default Heading;