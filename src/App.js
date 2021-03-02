import react, {Fragment} from 'react'
import { FaBeer, FaArrowLeft, FaPlus } from 'react-icons/fa';
import img1 from "./assets/image/img1.png"
import img2 from "./assets/image/img2.png"
import img3 from "./assets/image/img3.png"
import img4 from "./assets/image/img4.png"
import img5 from "./assets/image/img5.png"
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="container-header">
          <nav className="icon-header">
            <FaArrowLeft />
          </nav>
          <div>
            <h1 className="title">Helsinki</h1>
            <p className="sub-title">Finland's southem capital sits on <br/> a peninsula in the Gulf of Finland.</p>
          </div>
        </div>
        <div className="card">
          <h2>Companions</h2>
          <div className="card-image">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <img src={img4} alt="img4" />
            <img src={img5} alt="img5" />
          </div>
          <button className="card-button">+ Add New Companion</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
