import React from 'react'
import laptop from "../../assets/images/photowork3.png"
import "./Seo.css"
const Seo = () => {
  return (
    <div>
    <div className="DISPLAY-FLEX">
      <div className="IMAGEDIV">
        <img src={laptop} alt="markbook" className="IMAGE2" />
      </div>
      <div className="seo-friendly">
        <h3 className="seo">SEO FRIENDLY</h3>
        <br />

        <p className="seotext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos
          velit officia ipsa, voluptatibus debitis asperiores sequi enim
          tempora similique, nobis laboriosam perferendis qui ullam. Rerum
          libero inventore voluptatem neque repellendus ducimus earum eos,
          itaque ad. Nobis, natus corrupti amet culpa, expedita tenetur esse
          repellendus cum aperiam et voluptatibus corporis.
        </p>
        <div className="readmore">READ MORE</div>
      </div>
    </div>
  </div>
  )
}

export default Seo