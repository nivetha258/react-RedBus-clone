import React from "react";
import { useSelector } from "react-redux";
import "./busListPage.scss";
import buses from "../../JSON/bUSData.json";
import Seats from "./Seats/seats";

const BusListPage = () => {
  const state = useSelector((value) => value.travel);
  console.log(state, state.from, state.to);

  const availableBuses = buses.filter(
    (a) => a.startPoint === state.from && a.endPoint === state.to
  );
  console.log(availableBuses);


  const viewSeats = (i) => {
    console.log(i)
    document.getElementsByClassName("displaySeats")[i].style.display = "block";
     
  };

  return (
    <div className=" busListPage">
      <div className=" container">
        <div className="breadcrumbs">
          <p>
            <b>Home </b> <span>Bus Tickets </span>
          </p>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="row filters ">
              <div className="col-md-4 ">
                <div className="row">
                  <div className="col-6">
                    <b>{availableBuses.length} Buses</b> found
                  </div>
                  <div className=" col-6 text-end">
                    <b className="">SORT BY:</b>
                  </div>
                </div>
              </div>
              <div className="col-md-1">Depature</div>
              <div className="col-md-1">Duration</div>
              <div className="col-md-1">Arrival</div>
              <div className="col-md-1">Ratings</div>
              <div className="col-md-2">Fare</div>
              <div className="col-md-2">Seats Available</div>
            </div>
            <div>
              {availableBuses.map((a, i) => {
                return (
                  <div key={i} className="row bus">
                    <div className="col-12">
                        <img src="https://www.redbus.in/images/reviews/primo_logo.svg" alt="primeLogo img"></img>
                    </div>
                    <div className="col-md-4">
                      <p>
                        <b>{a.name}</b>
                      </p>
                      <p>{a.seatType}</p>
                    </div>
                    <div className="col-md-1">{a.time}</div>
                    <div className="col-md-1">{a.travelDuration}</div>
                    <div className="col-md-1">{a.travelDuration}</div>
                    <div className="col-md-1">{a.rating}</div>
                    <div className="col-md-2">{a.price}</div>
                    <div className="col-md-2">{a.seatsAvailable}</div>
                    <div className="col-md-12 view-seats">
                      <button onClick={()=>viewSeats(i)}>view seats</button>
                    </div>
                    <div>
                      <div className ="displaySeats">
                        <div className="bookseats">
                          <div className="row">
                            <div>
                              <Seats seats={a.deck} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusListPage;
