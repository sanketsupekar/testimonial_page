import React, { useEffect, useState, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "../App";

export default function SlideCard() {
  const cardData = [
    {
      pictureUrl: "https://randomuser.me/api/portraits/women/72.jpg",
      name: "THEO SOREL",
      position: "DESIGNER",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate voluptatibus numquam. Commodi a magnam dolor iure",
    },
    {
      pictureUrl: "https://randomuser.me/api/portraits/women/73.jpg",
      name: "THEO SOREL",
      position: "DESIGNER",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate voluptatibus numquam. Commodi a magnam dolor iure",
    },
    {
      pictureUrl: "https://randomuser.me/api/portraits/women/74.jpg",
      name: "THEO SOREL",
      position: "DESIGNER",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate voluptatibus numquam. Commodi a magnam dolor iure",
    },
    {
      pictureUrl: "https://randomuser.me/api/portraits/women/75.jpg",
      name: "THEO SOREL",
      position: "DESIGNER",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate voluptatibus numquam. Commodi a magnam dolor iure",
    },
  ];
  const [index, setIndex] = useState(0);
  const [leftSlide, setLeftSlide] = useState(true);
  const [rightSlide, setRightSlide] = useState(true);

  useEffect(() => {
    index < 1 ? setLeftSlide(false) : setLeftSlide(true);
    index >= cardData.length - 1 ? setRightSlide(false) : setRightSlide(true);
  }, [index]);
  return (
    <>
      <div className="position-relative m-auto">
        <div className="slideshowContainer d-flex flex-column w-50 m-auto mt-5 overflow-hidden position-relative ">
          <div>
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {cardData.map((user, index) => (
                <div className="d-inline-block w-100 m-auto" key={index}>
                  <TestimonialCard {...user}></TestimonialCard>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            {cardData.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${
                  index === idx ? " active" : ""
                } m-2 my-4 d-inline-block border rounded-circle ${
                  index === idx ? "bg-dark" : ""
                }`}
                style={{ width: "0.5rem", height: "0.5rem" }}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary bg-dark align-self-center position-absolute"
          onClick={() => {
            setIndex(index - 1);
          }}
          style={{
            visibility: leftSlide ? "visible" : "hidden",
            top: "35%",
            right: "90%",
          }}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>

        <button
          type="button"
          className="btn btn-primary bg-dark align-self-center position-absolute "
          style={{
            visibility: rightSlide ? "visible" : "hidden",
            top: "35%",
            left: "90%",
          }}
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
    </>
  );
}
