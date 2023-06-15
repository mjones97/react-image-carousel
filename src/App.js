import React from "react";
import ImageCarousel from "./components/ImageCarousel";
import jkImage from "./assets/jk.png";
import objImage from "./assets/obj.jpeg";
import ljImage from "./assets/lj.jpeg"
import marloImage from "./assets/marlo.jpeg"

const images = [jkImage, objImage, ljImage, marloImage];

function App() {
  return (
    <div className="App">
      <ImageCarousel images={images}/>
    </div>
  );
}

export default App;