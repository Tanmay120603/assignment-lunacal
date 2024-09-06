import { useState } from "react"
import "../styles/galleryWidget.css"
import  addMark from "../assests/addMark.png"
import arrow from "../assests/arrow.png"
import questionMark from "../assests/questionMark.png"
import sidebox from "../assests/sidebox.png"
import { imagesArr} from "../utils/constant"

function GalleryWidget(){
    const [galleryImages,setGalleryImages]=useState(imagesArr)
    function handleAdd(){
       const imageObj={id:galleryImages.length+1,src:`https://picsum.photos/id/${galleryImages.length+1}/200/300`}
       setGalleryImages([...galleryImages,imageObj])
    }
    return(
        <div className="gallery-container">
            <div className="gallery-header">
            <img src={questionMark} alt="question-mark-img" className="question-img" />
                <div className="gallery-header-left-section">
                <p>Gallery</p>
                </div>
                <div className="gallery-header-right-section">
                <button className="add-img-btn" onClick={handleAdd}>
                    <img src={addMark} alt="Add-Mark" />
                    <span>Add Image</span>
                </button>
                <div className="carousel-btn-container">
                <button className="carousel-btn">
                    <img src={arrow} alt="arrow-prev" className="prev-img" />
                </button>
                <button className="carousel-btn">
                    <img src={arrow} alt="arrow-next" />
                </button>
                </div>
                </div>
            </div>
            <div className="gallery-images-container">
            <img src={sidebox} alt="sidebox-img" className="sidebox-img" />
                {galleryImages.map(galleryImage=><div key={galleryImage.id}><img src={galleryImage.src} alt="gallery-image"/></div>)}
            </div>
        </div>
    )
}
export default GalleryWidget