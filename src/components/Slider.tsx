import "./Slider.css";
import { useState } from "react";
import check from "../assets/icon-check.svg";

interface Props {
  views: string[];
}
export default function Slider(props: Props) {
  const [sliderValue, setSliderValue] = useState(16);
  const [views, setViews] = useState("100k");
  const [toggle, setToggle] = useState(true);

  const updateViews = function (num: number) {
    setViews(props.views[(32 - num) / 4]);
  };
  console.log(sliderValue);

  return (
    <div className="container">
      <div className="slider-cont">
        <div className="views">
          <h2>{views}k PAGEVIEWS</h2>
          <p className="price">
            <span className="dollars">
              ${toggle ? sliderValue : sliderValue * 0.75}.00
            </span>
            {toggle ? "/month" : "/year"}
          </p>
        </div>
        <div className="slider-cont">
          <input
            style={{
              background: `linear-gradient(to right, rgb(164, 243, 235) 0%, rgb(164, 243, 235) ${
                sliderValue * 3.125
              }%,  rgb(236, 240, 251) 0% , rgb(236, 240, 251) 100%`,
            }}
            onChange={(e) => {
              updateViews(e.target.valueAsNumber);
              setSliderValue(e.target.valueAsNumber);
            }}
            name="slider"
            className="slider"
            type="range"
            min={0}
            max={32}
            value={sliderValue}
            step={4}
          />
        </div>
        <div className="month">
          <span className="dollars">
            ${toggle ? sliderValue : sliderValue * 0.75}.00
          </span>{" "}
          <p className="month-p">{toggle ? "/month" : "/year"}</p>
        </div>
      </div>
      <div className="payment-plan">
        <p>Monthly Billing</p>
        <div
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
          className="toggle"
          style={{ justifyContent: `flex-${toggle ? "start" : "end"}` }}
        >
          <div className="toggle-button"></div>
        </div>
        <p>Yearly billing</p>
        <div className="sale mob">
          <p>-25%</p>
        </div>
        <div className="sale tab">
          <p>-25% discount</p>
        </div>
      </div>
      <div className="features-container">
        <div className="features">
          <div className="features-texts">
            <div>
              {" "}
              <img src={check} className="check" alt="check"></img>
            </div>
            <p>Unlimited websites</p>
          </div>
          <div className="features-texts">
            <div>
              <img src={check} className="check" alt="check"></img>
            </div>
            <p>100% data ownership </p>
          </div>
          <div className="features-texts">
            <div>
              {" "}
              <img src={check} className="check" alt="check"></img>
            </div>
            <p>Email reports</p>
          </div>
        </div>
        <div className="start">Start my trial</div>
      </div>
    </div>
  );
}
