import React, { useEffect } from "react";
import "./banner.scss";
import EmojiTransportationOutlinedIcon from "@mui/icons-material/EmojiTransportationOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  startLocation,
  endLocation,
  dateUpdate,
} from "../../../Store/location_Slice";
import axios from "axios";
const Banner = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  let [list, setList] = useState([]);
  const [from, setFrom] = useState(state.from);
  const [to, setTo] = useState(state.to);
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      let res = await fetch(
          "https://run.mocky.io/v3/c06fe63c-7773-4bf4-be5b-489c9bc3b359"
        )             
        res = await res.json()
        setList(res.data);
    };
    getLocation();
  }, []);

  // let list = [
  //   "namakkal",
  //   "chennai",
  //   "trichy",
  //   "salem",
  //   "erode",
  //   "coimbatore",
  //   "thuraiyur",
  // ];

     console.log(list);
  let fromOption = list.filter((a) => to !== a);
  let toOption = list.filter((a) => from !== a);

  const search = () => {
    dispatch(startLocation(from));
    dispatch(endLocation(to));
    dispatch(dateUpdate(startDate));
    navigate("/buses");
  };

  return (
    <div className="banner-section">
      <div className=" banner">
        <div className="container">
          <div className="bannerInput d-flex justify-content-center ">
            <div className="fromto form-floating">
              <span>
                <EmojiTransportationOutlinedIcon />
              </span>

              <input
                className="from form-control"
                list="from"
                // value={from}
                name="from"
                onChange={(e) => setFrom(e.target.value)}
                // onChange={(e)=>search(e)}
                placeholder="from"
              ></input>
              <datalist id="from">
                {fromOption.map((a, i) => {
                  return <option key={i} value={a}></option>;
                })}
              </datalist>
              <label htmlFor="floatingInput">FROM</label>
            </div>
            <div className="fromto form-floating">
              <span>
                <EmojiTransportationOutlinedIcon />
              </span>
              <input
                className="to form-control"
                // type={"text"}
                // value={to}
                list="to"
                onChange={(e) => setTo(e.target.value)}
                placeholder="to"
              ></input>
              <datalist id="to">
                {toOption.map((a, i) => {
                  return <option key={i} value={a}></option>;
                })}
              </datalist>
              <label htmlFor="floatingInput">TO</label>
            </div>
            <div className="fromto form-floating">
              <span>
                <CalendarMonthOutlinedIcon />
              </span>
              <DatePicker
                className="to form-control"
                selected={startDate}
                value={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                placeholderText="Date"
                // maxDate={addMonths(new Date(), 5)}
                showDisabledMonthNavigation
              />
              {/* <label for="floatingInput">Date</label> */}
            </div>
            <div className="search">
              <button type="button" onClick={search}>
                Search Buses
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-section">
        <div className="container">
          <div className="discount">
            <div className="col-11 d-flex discount-offer text-start first-offer align-items-center ">
              <div className="col-3 ">
                <img src="https://st.redbus.in/Images/RHSS/2022/hero/100x100.png"></img>
              </div>
              <div className="text-start">
                <h4>SAVE UPTO RS 250* ON YOUR BUS TICKETS.</h4>
                <p>Book your favourite seat now.</p>
              </div>
            </div>
            <div className="row  justify-content-center ">
              <div className="col-5 ">
                <div className="discount-offer offer">
                  <p className="para">Save upto Rs 300 on Ap and TS route</p>
                  <img src="https://st.redbus.in/images/offers/superhit_rav/1_1.png"></img>

                  <h6>Use Code SUPERHIT</h6>
                </div>
              </div>
              <div className="col-5 ">
                <div className="discount-offer offer">
                  <p className="para">
                    Save upto Rs 200 on Delhi and North routes
                  </p>
                  <img src="	https://st.redbus.in/Images/INDOFFER/RB200/274x148.png"></img>
                  <h6>Use code RB200</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="useAPP-section position-relative">
        <div className="position-absolute top-0 bottom-0 start-0 bg-img">
          <img
            src="	https://s2.rdbuz.com/web/images/home/city_scape_app_download.png"
            className="d-block"
          ></img>
        </div>
        <div className="container">
          <div className="row useAPP justify-content-center">
            <div className="col-5">
              <div className="content">
                <h3>CONVENIENCE ON-THE-GO.</h3>
                <p>Enjoy the following exclusive features on the redBus app</p>
                <p>
                  Last Minute Booking - In a hurry to book a bus at the last
                  minute? Choose the bus passing from your nearest boarding
                  point and book in a few easy steps.
                </p>
                <p>
                  Boarding Point Navigation - Never lose your way while
                  travelling to your boarding point!
                </p>
                <p>
                  Comprehensive Ticket Details- Everything that you need to make
                  the travel hassle free - rest stop details, boarding point
                  images, chat with co-passengers, wake-up alarm and much more!
                </p>
                <p>
                  Enter your mobile number below to download the redBus mobile
                  app.
                </p>
                <form>
                  <select name="pincode" id="pincode">
                    <option value={"+91"}>+91</option>
                    <option value={"+22"}>+22</option>
                    <option value={"+80"}>+80</option>
                    <option value={"+924"}>+924</option>
                  </select>
                  <input
                    type={"tel"}
                    placeholder="Enter your mobile number"
                    size={25}
                  ></input>
                  <br></br>
                  <button>SMS ME THE LINK</button>
                </form>
              </div>
            </div>
            <div className="col-7">
              <div className="image">
                <img src="https://s1.rdbuz.com/web/images/home/IOS_Android_device.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deliver-section pb-5 ">
        <div className="container">
          <div className="promise-img">
            <img src="https://s1.rdbuz.com/web/images/home/promise.png"></img>
            <h3>WE PROMISE TO DELIVER</h3>
          </div>
          <div className="deliver-types">
            <div className="row ">
              <div className="col-4 promise-border">
                <div className="promise">
                  <img src="	https://s2.rdbuz.com/web/images/home/benefits.png"></img>
                  <p className="uppercase">UNMATCHED BENEFITS</p>
                  <p>
                    We take care of your travel beyond ticketing by providing
                    you with innovative and unique benefits.
                  </p>
                </div>
              </div>
              <div className="col-4 promise-border">
                <div className="promise">
                  <img src="https://s1.rdbuz.com/web/images/home/customer_care.png"></img>
                  <p className="uppercase">SUPERIOR CUSTOMER SERVICE</p>
                  <p>
                    {" "}
                    We put our experience and relationships to good use and are
                    available to solve your travel issues.
                  </p>
                </div>
              </div>
              <div className="col-4 promise-border">
                <div className="promise">
                  <img src="https://s1.rdbuz.com/web/images/home/lowest_Fare.png"></img>
                  <p className="uppercase">LOWEST PRICES</p>
                  <p>
                    We always give you the lowest price with the best partner
                    offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="awards-section ">
        <div className="container">
          <div className="heading text-center p-4 mb-4">
            <h2>AWARDS & RECOGNITION</h2>
          </div>
          <div className="awards pt-4">
            <div className="row text-center justify-content-center align-items-center">
              <div className="col-4">
                <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png"></img>
                <p>Most Innovative Company</p>
              </div>
              <div className="col-4">
                <img src="https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png"></img>
                <p>Most Trusted Brand</p>
              </div>
              <div className="col-4">
                <img src="	https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png"></img>
                <p>Mobile Innovation Award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="countries-section text-center pb-4">
        <div className="container">
          <div className="heading mt-5 mb-2">
            <h2>OUR GLOBAL PRESENCE</h2>
          </div>
          <div className="countries">
            <div className="row">
              <div className="col-4">
                <img src="https://tse1.mm.bing.net/th?id=OIP.McjTJelFA_APue30Qcu5vAHaE8&pid=Api&P=0"></img>
                <p>COLOMBIA</p>
              </div>
              <div className="col-4">
                <img src="https://tse2.mm.bing.net/th?id=OIP.9YtAsanlFMBU3PoImltJpwHaFP&pid=Api&P=0"></img>
                <p>INDIA</p>
              </div>
              <div className="col-4">
                <img src="https://tse4.mm.bing.net/th?id=OIP.ymGpBZe7noDyxFYu7yhawQHaD6&pid=Api&P=0"></img>
                <p>INDONESIA</p>
              </div>
              <div className="col-4">
                <img src="https://pixelz.cc/wp-content/uploads/2018/11/malaysia-flag-uhd-4k-wallpaper.jpg"></img>
                <p>MALAYSIA</p>
              </div>
              <div className="col-4">
                <img src="https://wallpapercave.com/wp/wp1844678.jpg"></img>
                <p>PERU</p>
              </div>
              <div className="col-4">
                <img src="https://tse3.mm.bing.net/th?id=OIP.YlxHg--0FsEJXyDcEnTjIQHaE7&pid=Api&P=0"></img>
                <p>SINGAPORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="people-section text-center pb-5">
        <div className="container ">
          <div className="heading mt-5 mb-5">
            <h2>THE NUMBERS ARE GROWING!</h2>
          </div>
          <div className="people">
            <div className="row">
              <div className="col-4">
                <p>CUSTOMERS</p>
                <h3>36 M</h3>
                <p>
                  redBus is trusted by over 36 million happy customers globally
                </p>
              </div>
              <div className="col-4">
                <p>OPERATORS</p>
                <h3>3500</h3>
                <p>network of over 3500 bus operators worldwide</p>
              </div>
              <div className="col-4">
                <p>BUS TICKETS</p>
                <h3>220+ M</h3>
                <p>Over 220 million trips booked using redBus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topcollection-section">
        <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <h6>Top Bus Routes</h6>
                    <ul>
                      <li><a href="#">Hyderabad to Bangalore Bus</a></li>
                      <li><a href="#">Bangalore to Chennai Bus</a></li>
                      <li><a href="#">Mumbai to Bangalore Bus</a></li>
                      <li><a href="#">Pune to Bangalore Bus</a></li>
                      <li><a href="#">More </a></li>

                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6>Top Cities</h6>
                    <ul>
                      <li><a href="#">Hyderabad Bus Tickets</a></li>
                      <li><a href="#">Bangalore Bus Tickets</a></li>
                      <li><a href="#">Chennai Bus Tickets</a></li>
                      <li><a href="#">Pune Bus Tickets</a></li>
                      <li><a href="#">More </a></li>

                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6>Top RTC's</h6>
                    <ul>
                      <li><a href="#">APSRTC</a></li>
                      <li><a href="#">GSRTC</a></li>
                      <li><a href="#">MSRTC</a></li>
                      <li><a href="#">TNSTC</a></li>
                      <li><a href="#">More </a></li>

                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6>Other</h6>
                    <ul>
                      <li><a href="#">TSRTC</a></li>
                      <li><a href="#">SBSTC</a></li>
                      <li><a href="#">RSRTC</a></li>
                      <li><a href="#">KeralaRTC</a></li>
                      <li><a href="#">More </a></li>

                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6>Tempo Traveller in Cities</h6>
                    <ul>
                      <li><a href="#">Tempo traveller in Bangalore</a></li>
                      <li><a href="#">Tempo traveller in Chennai</a></li>
                      <li><a href="#">Tempo traveller in Mumbai</a></li>
                      <li><a href="#">Tempo traveller in Hyderabad</a></li>
                      <li><a href="#">Tempo traveller in Ahmedabad </a></li>

                    </ul>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
