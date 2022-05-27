import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { summaryContext } from "../../../Context";
import { jsPDF } from "jspdf";
import cert from "../../images/G-digitcertifikat1024_1.jpg";
import SendBuyMail from "../../SendBuyEmail";

ChartJS.register(ArcElement, Tooltip, Legend);
const PlatinaResponse = (props) => {
  const { summary, contactInformation } = useContext(summaryContext);
  function addWaterMark(doc) {
    var totalPages = doc.internal.getNumberOfPages();
    let i;
    for (i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setTextColor(140);
      doc.setFontSize(80);
      doc.saveGraphicsState();
      doc.setGState(new doc.GState({ opacity: 0.7 }));
      doc.text(50, doc.internal.pageSize.height - 150, "Your eyes only");
      doc.restoreGraphicsState();
    }
    return doc;
  }
  function addCompanyName(doc) {
    var totalPages = doc.internal.getNumberOfPages();
    let i;
    for (i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setTextColor(0);
      doc.setFontSize(20);
      doc.setFont("Time-BoldItalic");
      doc.text(
        110,
        doc.internal.pageSize.height - 85,
        contactInformation.companyname
      );
    }
    return doc;
  }

  const pdfmakedownload = () => {
    var img = new Image();
    img.src = cert;
    var doc = new jsPDF("l", "mm", [275, 200]);
    doc.addImage(img, "JPEG", 1, 2);
    doc = addWaterMark(doc);
    doc = addCompanyName(doc);
    doc.save("certificate.pdf");
  };

  const sum = 72 - summary;
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
        ctx.fillStyle = "rgba(0, 144, 125, 0.5)";
        ctx.textBaseline = "middle";
        var text = `${summary}/72`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  const contactMe = () => {
    const { companyname, phoneNumber, email } = contactInformation;
    SendBuyMail(companyname, phoneNumber, email);
  };
  return (
    <div className="container p-3">
      <h1 className="text-center headline pt-3 m-0 mb-5">{props.text}</h1>
      <div>
        <div>
          <div className="mb-5">
            <Doughnut
              height="300px"
              width="300px"
              data={data}
              options={{ maintainAspectRatio: false }}
              plugins={plugins}
            />
          </div>
          {summary >= 10 ? (
            <div>
              <div className="text-center">
                <small
                  onClick={() => {
                    pdfmakedownload();
                  }}
                  className="text-center green-text"
                >
                  Click here to show the certificate!
                </small>
              </div>
              <div className="text-center mb-5">
                <small
                  className="text-center green-text"
                  data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal"
                >
                  Click here if you are interested in buying the certificate!
                </small>
              </div>
            </div>
          ) : (
            <div>
              Need some help to improve your business climate footprint? contact
              us at info@g-digit.com and we are happy to help you!
            </div>
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Buy our certificate to impress your clients!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-center">{contactInformation.companyname}</p>
              <p className="text-center">{contactInformation.email}</p>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="button-style btn"
                data-mdb-dismiss="modal"
                onClick={contactMe}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatinaResponse;
