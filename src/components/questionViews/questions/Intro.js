import React, { useContext } from "react";
import { summaryContext } from "../../../Context";


const Intro = (props) => {
  const { contactInformation, setContactInformation } =
    useContext(summaryContext);

  // const [runTestButton, setRunTestButton]=useState({disabled:true})
  const contactInput = (e) => {
    if (e.target.type === "checkbox") {
      setContactInformation({
        ...contactInformation,
        [e.target.name]: e.target.checked,
      });
    }
    if (
      e.target.type === "text" ||
      e.target.type === "email" ||
      e.target.type === "number"
    ) {
      setContactInformation({
        ...contactInformation,
        [e.target.name]: e.target.value,
      });
    }
  };
  const startingTest = () => {
    if (
      contactInformation.companyname !== "" &&
      contactInformation.phoneNumber !== "" &&
      contactInformation.email !== "" &&
      contactInformation.approved === true
    ) {
      props.setStartTest(false);
      props.setQuestionCounter({ question: 0 });
    }
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        verticalAlign: "center",
        width: "70%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3 className="headline text-center mb-3">
          Before <span className="black-span">we</span> begin
        </h3>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <h3 className="underline text-center mb-5">
          To start with, we need some information about your business. If you sumbit the test, we may contact you.
        </h3>
      </div>
      <form
      onSubmit={startingTest}
        className=""
        style={{
          backgroundColor: "rgba(32, 97, 92, 0.364)",
          borderRadius: "12px",
          padding: "2rem",
        }}
      >
        <div className="row mb-4">
          <div className="col">
            <div className="">
              <input
                required
                type="text"
                value={contactInformation.companyname}
                id="form3Example1"
                name="companyname"
                className="bg-light form-control"
                placeholder="Companyname"
                onChange={contactInput}
              />
            </div>
          </div>
          <div className="col">
            <div>
              <input
                required
                type="number"
                id="form3Example2"
                value={contactInformation.phoneNumber}
                name="phoneNumber"
                className="bg-light form-control"
                placeholder="Phone Number"
                onChange={contactInput}
              />
            </div>
          </div>
        </div>
        <div className="mb-4 form">
          <input
            required
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            id="form3Example3"
            value={contactInformation.email}
            name="email"
            className="bg-light form-control"
            placeholder="Email"
            onChange={contactInput}
           
          />
        </div>
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            required
            checked={contactInformation.approved}
            className="form-check-input me-2"
            name="approved"
            type="checkbox"
            id="form2Example33"
            onChange={contactInput}
          />
          <label
            className="form-check-label"
            htmlFor="form2Example33"
            style={{ color: "white" }}
          >
            I accept <span className="terms"    data-mdb-toggle="modal"
                  data-mdb-target="#exampleModal">terms and conditions</span>
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            // onClick={startingTest}
            // disabled={props.runTestButton.disabled}
            // disabled={false}
            style={{ width: "20em" }}
            type="submit"
            className="btn button-style"
          >
            Run test
          </button>
        </div>
      </form>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mod-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Terms and conditions
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mod-body">
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
