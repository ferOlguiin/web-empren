import { Carrousel } from "./components/Carrousel"
import cafecito from './images/cafecito_logo.svg'
import onlyfans from './images/onlyfans_logo.svg'
import telegram from './images/telegram_logo.svg'
import twitter from './images/twitter_logo.svg'
import instagram from './images/instagram_logo.svg'
import paypal from './images/paypal_logo.svg'
import mercadopago from './images/mercadopago_logo.png'
import tiktok from './images/tiktok.svg'
import tiktokwhite from './images/tiktokwhite.svg'
import img1 from './images/banner2.jpg'
import img2 from './images/img2.jpg'

function App() {

  return (
    
    <div className="fondo-general">

      <nav className="p-10 d-flex flex-column img-fondo">
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <h1 className="m-0 p-0 fs-3 fw-bold text-white">NE</h1>
          <a type="button" href="#c" className="m-0 py-1 px-2 rounded-pill fs-5 text-white text-decoration-none btn btn-danger">Contacto</a>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <span className="display-1 pt-5 text-center text-white fw-bold titulo border-bottom border-5 border-danger">Nombre Ejemplo</span>
        </div>
      </nav>

      <main className="d-flex flex-column align-items-center">
        
        <div className="d-flex justify-content-center align-items-center my-5">
          <img src={cafecito} alt="cafecito" className="img-fluid border border-2 border-secondary bg-dark p-1 icon-contacts rounded-circle mx-3" style={{height:40, width:40}}/>
          {/* <img src={onlyfans} alt="onlyfans" className="img-fluid border border-2 border-secondary bg-dark p-1 icon-contacts rounded-circle mx-3" style={{height:40, maxWidth:40}}/> */}
          <img src={instagram} alt="instagram" className="img-fluid border border-2 border-secondary bg-dark p-1 icon-contacts rounded-circle mx-3" style={{maxHeight:40, maxWidth:40}}/>
          <img src={twitter} alt="twitter" className="img-fluid border border-2 border-secondary bg-dark p-1 icon-contacts rounded-circle mx-3" style={{maxHeight:40, maxWidth:40}}/>
          <img src={telegram} alt="telegram" className="img-fluid border border-2 border-secondary bg-dark p-1 icon-contacts rounded-circle mx-3" style={{maxHeight:40, maxWidth:40}}/>
          <img src={tiktokwhite} alt="tiktok" className="img-fluid border border-2 border-secondary bg-dark p-1 icon-contacts rounded-circle mx-3" style={{maxHeight:40, maxWidth:40}}/>
        </div>

        <div className="d-flex flex-column mt-4 mb-2">
          <h2 className="text-center display-5 text-white">Título de sección</h2>
        </div>
      
        <div className="d-flex flex-column">
          <div className=" d-flex justify-content-around ps-5 py-3 flex-lg-nowrap flex-wrap">
            <Carrousel/>
            <div className="px-5 d-flex flex-column text-black justify-content-center text-white">
              <h3>Título</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam quo totam eveniet, expedita quas adipisci voluptatem, quod dolor necessitatibus consectetur, quia hic? Laboriosam iure suscipit nisi quam a temporibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam quo totam eveniet, expedita quas adipisci voluptatem, quod dolor necessitatibus consectetur, quia hic? Laboriosam iure suscipit nisi quam a temporibus?</p>
              <button className="btn btn-danger btn-lg rounded-pill">Solicitar</button>
            </div>
          </div>
        </div>

        <div className="py-5 container rounded">
          <div className="row bg-galeria p-1 rounded">
            <div className="col-lg-6 p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
            <div className="col-lg-6 p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
            <div className="col-lg-4 bg-danger p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
            <div className="col-lg-8 p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
            <div className="col-lg-4 p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
            <div className="col-lg-4 p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
            <div className="col-lg-4 p-0">
              <img src={img1} alt="img1" className="img-fluid"/>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column py-5 container-fluid">
          <div className="container-fluid my-5 px-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 img-card bg-white mx-2 p-5 rounded text-white">
                <h2 className="display-1 pt-5">-40%</h2>
                <h3 className="fs-3 fw-bold">Subtitulo de servicio</h3>
                <p className="text-break">descripcion de servicio o paquete de servicios ofrecidos</p>
                <button className="btn btn-danger btn-lg rounded-pill mb-5 mt-4 fs-4">Comprar</button>
              </div>
              <div className="col-lg-3 img-card-2 bg-white mx-2 p-5 rounded text-white">
                <h2 className="display-1 pt-5">-30%</h2>
                <h3 className="fs-3 fw-bold">Subtitulo de servicio</h3>
                <p className="text-break">descripcion de servicio o paquete de servicios ofrecidos</p>
                <button className="btn btn-danger btn-lg rounded-pill mb-5 mt-4 fs-4">Comprar</button>
              </div>
              <div className="col-lg-3 img-card-3 bg-white mx-2 p-5 rounded text-white">
                <h2 className="display-1 pt-5">-20%</h2>
                <h3 className="fs-3 fw-bold">Subtitulo de servicio</h3>
                <p className="text-break">Descripcion de servicio o paquete de servicios ofrecidos</p>
                <button className="btn btn-danger btn-lg rounded-pill mb-5 mt-4 fs-4">Comprar</button>
              </div>
              
            </div>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="display-5 text-center text-white mt-5 mb-4">Métodos de pago</h2>
          <div className="mb-5 d-flex justify-content-around align-items-center">
            <img src={mercadopago} alt="mercadopago" className="bg-white rounded-pill p-3 img-fluid mx-4"/>
            <img src={paypal} alt="paypal" className="img-fluid mx-4 bg-white rounded-circle"/>
          </div>
        </div>
        
      </main>

      <footer className="d-flex flex-column fondo-footer pt-5 pb-2">
        <div id="c" className="p-2 my-4 d-flex justify-content-center align-items-center">
          <img src={cafecito} alt="cafecito" className="img-fluid border border-2 border-light p-1 icon-contacts rounded-circle mx-2" style={{height:35, width:35}}/>
          {/* <img src={onlyfans} alt="onlyfans" className="img-fluid border border-2 border-light p-1 icon-contacts rounded-circle mx-2" style={{height:35, maxWidth:35}}/> */}
          <img src={instagram} alt="instagram" className="img-fluid border border-2 border-light p-1 icon-contacts rounded-circle mx-2" style={{maxHeight:35, maxWidth:35}}/>
          <img src={twitter} alt="twitter" className="img-fluid border border-2 border-light p-1 icon-contacts rounded-circle mx-2" style={{maxHeight:35, maxWidth:35}}/>
          <img src={telegram} alt="telegram" className="img-fluid border border-2 border-light p-1 icon-contacts rounded-circle mx-2" style={{maxHeight:35, maxWidth:35}}/>
          <img src={tiktok} alt="tiktok" className="img-fluid border border-2 border-light p-1 icon-contacts rounded-circle mx-2" style={{maxHeight:35, maxWidth:35}}/>
        </div>
        <div>
          <p className="text-center text-white">Copyright 2023 Nombre Ejemplo. | Todos los Derechos Reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
