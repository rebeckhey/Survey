import React, {useContext} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {summaryContext} from '../../../Context'


ChartJS.register(ArcElement, Tooltip, Legend);

const PlatinaResponse = () => {
  const { summary } = useContext(summaryContext);

  const sum= 60-summary
  const data = {
    labels: [],
    datasets: [
      {
        // label: "# of Votes",
        data: [summary, sum],
        backgroundColor: ["rgba(0, 144, 125, 0.5)", "rgba(218, 218, 218, 0.2)"],
        borderColor: ["rgba(0, 144, 125, 0.7)", "rgba(218, 218, 218, 0.4)"],
        borderWidth: 1,
        cutout: "60%",
      },
    ],
  };
  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 140).toFixed(2);
        ctx.font = fontSize + "em Montserrat";
        ctx.fillStyle="rgba(0, 144, 125, 0.5)"
        ctx.textBaseline = "middle";
        var text = `${summary}/60`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  return (
    <div className="container p-3">
      <h1 className="text-center headline pt-3 m-0">
        Your business reach gold level!
      </h1>
      <h4 className="text-center pb-5">
       
      </h4>
      <div>
        <div>
     
       
          <div className="mb-5" >
            <Doughnut
              height="300px"
              width="300px"
              // style={{position:"relative"}}
              data={data}
              options={{ maintainAspectRatio: false }}
              plugins={plugins}
             
            />

          </div>
              <div style={{height:"200px", backgroundColor:"white", width:"200px"}}>
      <small>Certificate</small>
        </div>
        <button>Download pdf</button>
         
        </div>
      </div>
    </div>
  );
};

export default PlatinaResponse;
