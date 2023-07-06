import imgslide from '../images/slide1.svg'

export const Carrousel = () => {
  return (
    <div className='w-100 p-4'>
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active opacity-0" aria-current="true" aria-label="Slide 1"></button>
                <button className="opacity-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button className="opacity-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={imgslide} className="d-block rounded img-fluid" style={{maxWidth:600, maxHeight:600}} alt="image1"/>
                <div className="carousel-caption text-black d-none d-md-block">
                    {/* <h5>First slide label</h5> */}
                    
                </div>
                </div>
                <div className="carousel-item">
                <img src={imgslide} className="d-block rounded img-fluid" style={{maxWidth:600, maxHeight:600}} alt="image2"/>
                <div className="carousel-caption text-black d-none d-md-block">
                    {/* <h5>Second slide label</h5> */}
                    
                </div>
                </div>
                <div className="carousel-item">
                <img src={imgslide} className="d-block rounded img-fluid" style={{maxWidth:600, maxHeight:600}} alt="image3"/>
                <div className="carousel-caption text-black d-none d-md-block">
                    {/* <h5>Third slide label</h5> */}
                    
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

