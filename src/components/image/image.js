import '../../assets/styles/image.scss'

function Image({imageUrl}) {
  return (
    <figure className='image-container'>
        <img src= {imageUrl}>

        </img>
    </figure>
    
    
  );
}
Image.defaultProps ={
  imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXZ3TFS2nVmjV_FT9hmMb-gIsmPCaUEGE7w&usqp=CAU"
}

export default Image;


