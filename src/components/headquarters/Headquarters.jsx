import React from "react";
import { Link } from "react-router-dom";

function Headquarters({ illustration, heading, link }) {
  return (
    <>
      <div className="headquarter">
        <img className="headquarter__illustration" src={illustration} alt="" />
        <div className="headquarter__container">
          <h3 className="headquarter__heading">{heading}</h3>
          <Link className="headquarter__button button button--alt" to={link}>
            See Location
          </Link>
        </div>
      </div>
    </>
  );
}

export default Headquarters;
