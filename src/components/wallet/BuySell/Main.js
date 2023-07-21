import React from "react";
import "./Main.css";
import buy from "../../../assets/Buy.png";
import sell from "../../../assets/Sell.png";

const Button = ({src, text, className}) => {
  return <>
    <div className={className}>
      <div className="buy-sell-image">
        <img src={src} height={40} className="buy-sell-image"/>
      </div>
      <p className="btc-text">{text}</p>
    </div>
  </>
}

const BuySell = () => {

  const data = [
    {
      src : buy,
      text : "Buy BTC",
      action : ""
    },
    {
      src : sell,
      text : "Sell BTC",
      action : ""
    }
  ]

  return (
    <div className="Third-ResponsiveCard">
      <Button src={data[0].src} text={data[0].text} className="squareDivision1"/>
      <Button src={data[1].src} text={data[1].text} className="squareDivision2"/>
    </div>
  );
};

export default BuySell;
