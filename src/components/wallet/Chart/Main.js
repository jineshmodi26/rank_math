import React, { useState } from "react";
import "./Main.css";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = {
    day: [
      {
        name: '14/07',
        uv: 1000,
      },
      {
        name: '17/07',
        uv: 1550,
      },
      {
        name: '18/07',
        uv: 1320,
      },
      {
        name: '19/07',
        uv: 1350,
      },
      {
        name: '20/07',
        uv: 1400,
      }
    ],
    week: [
      {
        name: '19/06-23/06',
        uv: 1850,
      },
      {
        name: '26/06-30/07',
        uv: 1500,
      },
      {
        name: '03/07-07/07',
        uv: 1450,
      },
      {
        name: '10/07-15/07',
        uv: 1600,
      },
      {
        name: '17/07-21/07',
        uv: 1890,
      }
    ],
    month: [
      {
        name: 'Mar',
        uv: 1500,
      },
      {
        name: 'Apr',
        uv: 2000,
      },
      {
        name: 'May',
        uv: 1800,
      },
      {
        name: 'Jun',
        uv: 1900,
      },
      {
        name: 'Jul',
        uv: 1890,
      }
    ],
    year: [
      {
        name: '2019',
        uv: 1000,
      },
      {
        name: '2020',
        uv: 2000,
      },
      {
        name: '2021',
        uv: 1800,
      },
      {
        name: '2022',
        uv: 2780,
      },
      {
        name: '2023',
        uv: 1890,
      }
    ]
  };
  const [selected, setSelected] = useState(1)

  return (
    <div className="chart-main">
      <div className="dropdown__content">
        <p className={selected == 1 ? "dropdown-item-active" : "dropdown-item"} onClick={() => setSelected(1)}>Day</p>
        <p className={selected == 2 ? "dropdown-item-active" : "dropdown-item"} onClick={() => setSelected(2)}>Week</p>
        <p className={selected == 3 ? "dropdown-item-active" : "dropdown-item"} onClick={() => setSelected(3)}>Month</p>
        <p className={selected == 4 ? "dropdown-item-active" : "dropdown-item"} onClick={() => setSelected(4)}>Year</p>
      </div>
      <div className="Second-ResponsiveCard">
        <div className="chart">
          <div className="range">
            <p className="range-price"><div className="dot1"></div>Lower: $4.895</p>
            <p className="range-price"><div className="dot2"></div>Higher: $6.857</p>
          </div>
          <ResponsiveContainer>
            <AreaChart
              data={selected == 1 ? data.day : selected == 2 ? data.week : selected == 3 ? data.month : selected == 4 ? data.year : data.day}
              margin={{
                top: 30,
                right: 0,
                left: -60,
                bottom: -30,
              }}
            >
              <XAxis dataKey="name" style={{ fontSize: "10px" }} className="x-axis"/>
              <YAxis style={{ fontSize: "10px", margin: 0 }} className="y-axis"/>
              <Tooltip label="Hello" />
              <Area type="monotone" dataKey="uv" stroke="rgb(252,97,0)" fill="rgba(250,223,187,0.4)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart
  ;
