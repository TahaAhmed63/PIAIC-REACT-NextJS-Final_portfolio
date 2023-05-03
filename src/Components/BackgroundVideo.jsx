import myvideo from "./../assets/video1.mp4"

const BackgroundVideo = () => {
    return (
      <div className="container">
        <video  src={require('./../assets/video1.mp4')} muted autoPlay loop className="video"/>
    
      
      </div>
    );
  };
  
  export default BackgroundVideo;

  
  
  
  
  
  