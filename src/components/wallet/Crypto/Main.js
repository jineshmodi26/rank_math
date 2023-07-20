import React, {useState} from "react";
import "./Main.css";
import bitcoin from "../../../assets/Bitcoin.jpg"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Crypto = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="First-ResponsiveCard">
        <div className="crypto">
          <div className="crypto-left">
            <img src={bitcoin} height={55}/>
            <p className="crypto-text">Bitcoin</p>
          </div>
          <p className="crypto-right">BTC</p>
        </div>
        <p className="price">3.529020 BTC</p>
        <div className="price-discount">
          <p className="usd">$19.153 USD</p>
          <div className="discount-div">
            <p className="discount">-2.32%</p>
          </div>
        </div>
        <div className="arrow-button">
            <span
                style={{
                    transition: "transform 200ms linear",
                    transform: `rotateZ(${open ? 0 : "180deg"})`,
                    display: "inline-block",
                }}
            >
                <ExpandLessIcon onClick={() => {setOpen(!open)}}/>
            </span>
            {
                open ? <div className="buttons-cotainers">
                    <div><button className="buttons-buy">Buy</button></div>
                    <div><button className="buttons-sell">Sell</button></div>                        
                </div> : null
              }
        </div>
    </div>
  );
};

export default Crypto;
