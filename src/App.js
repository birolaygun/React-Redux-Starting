import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { Route } from "react-router-dom";
import Personel from "./components/Personel";
import Depo from "./components/Depo";
import DepoGiriş from "./components/DepoGiriş";
import StokÇıkış from "./components/StokÇıkış";
import Işlemler from "./components/Işlemler";
import Yetkilendirme from "./components/Yetkilendirme";
import Kalk from "./components/Kalk";
import { Link } from "react-router-dom";

const App = (props) => {

  return (
    <div className="App">
      <nav className="navbar ">
        <div className="">

          <Link to="/">
          <button className={"btn btn-primary"}>
            <span>Depo</span>
          </button>
          </Link>


          <Link to="/alış">
            <button
              className={`btn btn-primary ${
                props.mydata.kullanıcı.giriş ? "" : "disabled"
              } `}
            >
              <span>Alış</span>
            </button>
          </Link>

          <button
            className={`btn btn-primary ${
              props.mydata.kullanıcı.çıkış ? "" : "disabled"
            } `}
          >
            <span>Satış</span>
          </button>
          <button
            className={`btn btn-primary ${
              props.mydata.kullanıcı.işlemler ? "" : "disabled"
            } `}
          >
            <span>İşlemler</span>
          </button>
          <button
            className={`btn btn-primary ${
              props.mydata.kullanıcı.yetkilendirme ? "" : "d-none"
            } `}
          >
            <span>Yetkilendirme</span>
          </button>
        </div>

        <div>{props.mydata.giriş ? <Kalk /> : <Personel />}</div>
      </nav>

      <Route path="/" exact component={Depo} />
      <Route path="/alış" component={DepoGiriş} />
      <Route path="/satış" component={StokÇıkış} />
      <Route path="/işlemler" component={Işlemler} />
      <Route path="/yetkilendirme" component={Yetkilendirme} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps)(App);
// export default connect(mapStateToProps, { sepeteEkle })(App);
