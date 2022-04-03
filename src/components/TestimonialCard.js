import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialCard(props) {
  return (
    <>
      <div
        className="testimonialCardContainer bg-dark rounded-top m-auto"
        style={{ width: "30rem", height: "7rem" }}
      ></div>
      <div
        className="testimonialCardContainer border shadow m-auto  bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div className="d-flex justify-content-around  flex-column">
          <div className="position-relative">
            <img // eslint-disable-line
              className="rounded-circle border border-light border-5 position-absolute top-0 start-50 translate-middle"
              style={{ width: "10rem", height: "10rem" }}
              alt="Profile Picture"
              src={props.pictureUrl}
            />
          </div>
          <div style={{ height: "5rem" }}></div>
          <div className="d-flex justify-content-center align-items-center flex-column my-3">
            <div className="d-flex">
              <label className="h5 fw-bold mx-2"> {props.name}</label>
            </div>
            <div className="d-flex">
              <label className=" mx-2"> {props.position} </label>
            </div>
            <div className="d-flex my-4 mx-4">
              <label className="text-center mx-2 text-wrap">
                <FontAwesomeIcon icon={faQuoteLeft} /> {props.about}{" "}
                <FontAwesomeIcon icon={faQuoteRight} />{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
