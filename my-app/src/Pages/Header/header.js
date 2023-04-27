import React from "react";
//import busimg from "../../Assets/images/redbus.svg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./header.scss";

const Header = () => {

  console.log("header")

  return (
    <div className="header">
      <div className="container">
        <nav className="row align-items-center justify-content-center">
          {" "}
          <div className="col-1">
          <a href="#">
            <img
              src={
                "https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"
              }
              alt="image"
            />
          </a>
          </div>
          <ul className="col-4 leftNav">
            <li>
              <a href="#" className="busTickets" ><b>BUS TICKETS</b></a>
            </li>
            <li>
              <a href="#" className="new"> rYde <sup><b>New</b></sup></a>
            </li>
            <li>
              <a href="#" className="new"> redRail <sup><b>New</b></sup></a>
            </li>
          </ul>
          <ul className="col-6 rightNav text-end">
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">
                Manage Booking
                <ExpandMoreIcon />
              </a>
            </li>
            <li className="peopleIcon">
              <a href="#"><AccountCircleOutlinedIcon className="person"/><ExpandMoreIcon /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
