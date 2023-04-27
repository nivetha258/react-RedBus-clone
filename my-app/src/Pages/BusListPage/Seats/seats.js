import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faWheelchairAlt}  from "@fortawesome/free-solid-svg-icons"
import seatAvailable from "../../../Assets/icons/available-seat-icon.jpg";
import seatUnavailable from "../../../Assets/icons/unavailable-seat-icon.jpg";
import femaleSeat from "../../../Assets/icons/female-seat-icon.jpg";

import "./seats.scss";

const Seats = (props) => {
  const deck1 = props.seats.lowerDeck.double;
  const deck2 = props.seats.lowerDeck.single;
  const deck3 = props.seats.upperDeck.double;
  const deck4 = props.seats.upperDeck.single;


    const bookSeat = (e,a,i)=>{
    console.log(e,a,i)
}

  return (
    <>
      <div className="row seats-box">
        <div className="col-5">
          <div className="deck">
            <div className="lowerDeck">
              <p>Lower Deck</p>
              <div className="deck row align-items-top">
                <div className="col-1">
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP.ArGnk1DZjYsI5fYV8B1gAAHaHe&pid=Api&P=0"
                    width={10}
                  />
                </div>
                <div className="lowerBox col-11">
                  <div className="row  mb-3">
                    {deck1.map((a,i) => {

                      return (
                        <div key={i} className={"col-md-2"}>                      
                          {a.available ? (
                            <img src={seatAvailable} onClick = {(e) => bookSeat(e,a,i)} title = {`seat no ${a.id } | price ${a.price}`}></img>
                          ) : a.gender == "male"?
                          (
                            <img src={seatUnavailable}></img>
                          ):(<img src={femaleSeat}></img>)}
                        </div>
                      );
                    })}
                  </div>
                  <div className="row">
                    {deck2.map((a, i) => {
                      return (
                        <div key={i} className={"col-md-2"}>
                          <img src={seatAvailable}></img>
                          {/* {deck1.Available} && <img src={seatAvailable}></img> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="upperDeck">
              <p>Upper Deck</p>
              <div className="deck row align-items-top">
                <div className="col-1"></div>
                <div className="lowerBox col-11">
                  <div className="row  mb-3">
                    {deck3.map((a, i) => {
                      return (
                        <div key={i} className={"col-md-2"}>
                          {/* <div className=""></div> */}
                          <img src={seatAvailable}></img>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row">
                    {deck4.map((a, i) => {
                      return (
                        <div key={i} className={"col-md-2"}>
                          <img src={seatAvailable}></img>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </>
  );
};

export default Seats;
