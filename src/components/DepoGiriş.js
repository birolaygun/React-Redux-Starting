import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sil, giriş } from "../actions";
import Canvas from "./Canvas"

const DepoGiriş = (props) => {
  const [belgeNo, setBelgeNo] = useState("");
  const [alınanŞirket, setAlınanŞirket] = useState("");
  const [satıcı, setSatıcı] = useState("");
  const [alıcı, setAlıcı] = useState("");
  const [açıklama, setAçıklama] = useState("");
  const [tarih, setTarih] = useState("");

  return (
    <div>
      <br />
      <h2>Depoya Envanter Girişi</h2>
      <div
        style={{
          margin: "20px",
          border: "2px solid black",
          borderRadius: "3px",
        }}
      >
        <form className="m-2">
          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <span>
              <label
                for="exampleInputE1"
                class="form-label d-inline"
                style={{ text: "center" }}
              >
                Belge Numarası
              </label>
            </span>
            <span>
              <input
                type="text"
                class="form-control d-inline exampleInputEmail1"
                id="exampleInputE1"
                value={belgeNo}
                onChange={(e) => setBelgeNo(e.target.value)}
              />
            </span>
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <span>
              <label
                for="exampleInputEmail1"
                class="form-label d-inline"
                style={{ text: "center" }}
              >
                Ürünlerin Alındığı Şirket
              </label>
            </span>
            <span>
              <input
                type="text"
                class="form-control d-inline exampleInputEmail1"
                id="exampleInputEmail1"
                value={alınanŞirket}
                onChange={(e) => setAlınanŞirket(e.target.value)}
              />
            </span>
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPassword1" class="form-label">
              Satcının İsmi
            </label>
            <input
              type="name"
              class="form-control exampleInputEmail1"
              id="exampleInputPassword1"
              value={satıcı}
              onChange={(e) => setSatıcı(e.target.value)}
            />
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPassword" class="form-label">
              Alıcının İsmi
            </label>
            <input
              type="name"
              class="form-control exampleInputEmail1"
              id="exampleInputPassword"
              value={alıcı}
              onChange={(e) => setAlıcı(e.target.value)}
            />
          </div>
          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPasswo" class="form-label">
              Açıklama
            </label>
            <input
              type="name"
              class="form-control exampleInputEmail1"
              id="exampleInputPasswo"
              value={açıklama}
              onChange={(e) => setAçıklama(e.target.value)}
            />
          </div>

          <div
            className="mb-3 d-flex "
            style={{ justifyContent: "space-between" }}
          >
            <label for="exampleInputPasswo" class="form-label">
              Tarih
            </label>
            <input
              type="date"
              class="form-control exampleInputEmail1"
              id="exampleInputPasswo"
              value={tarih}
              onChange={(e) => setTarih(e.target.value)}
            />
          </div>
        </form>
          <Canvas />

        <table className="table">

          <thead>
            <tr>
              <th scope="col">Sil</th>
              <th scope="col">Seri No</th>
              <th scope="col">Ürün</th>
              <th scope="col">Fotograf</th>
              <th scope="col">Sınıf</th>
              <th scope="col">Alınan</th>
              <th scope="col">Birim</th>
            </tr>
          </thead>
          <tbody>
            {props.mydata.alınıyor.map((item) => (
              <tr key={Math.random()}>
                <th>
                  <svg
                    onClick={() => props.sil(item.id)}
                    style={{ cursor: "pointer" }}
                    color="red"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                </th>
                <th>{item.id}</th>
                <td>{item.ürün}</td>
                <td>
                  <img width={"40"} src={item.fotograf} />
                </td>
                <td>{item.sınıf}</td>
                <td>
                  <input style={{ width: "70px" }} type="number" min="1" />
                </td>
                <td>{item.birim}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            margin: "20px 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Belgeleyen:</h4>
          <div>
            <h4>{props.mydata.kullanıcı.kullanıcıAdı}</h4>
            <h5>{new Date().toLocaleDateString()} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, { sil, giriş })(DepoGiriş);
