import './App.css';
import myWonderfulImage  from "./myimage.jpg" ;
import './style.css';

function App() {
  return (
    <div className="App">
    <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red"> My Name Is Awatef kadri </h1>
    <img src="/myImage.jpg" alt="myimage"width={300} height={250} />  
    <img className="myimage"    src={myWonderfulImage } alt ='myImage'width={300} height={250}  />
    
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
    </div>
  );
}

export default App;
