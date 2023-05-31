import React from "react";

export default function PersonalExp() {
  const [experience, setExperienece] = React.useState([]);
  const [companyname, setCompanyname] = React.useState([]);
  const [position, setPosition] = React.useState([]);
  const [starting, setStartingDate] = React.useState([]);
  const [ending, setEndingDate] = React.useState([]);
  return (
    <>
      <div className="experienece">
        {experience.map((experience, index) => (
          
          <h2  key={index}>{experience}</h2>
          
        ))}
      </div>

      <div className="personal-experience">
        <section className="experienece">
          Experience
          <img
            width="80"
            height="80"
            src="https://img.icons8.com/dotty/80/customer-insight.png"
            alt="customer-insight"
          />
        </section>
        <div className="input_box">
          <label>Company name</label>
          <input
            type="text"
            name="company_name"
            onChange={(e) => setCompanyname(e.target.value)}
          />
        </div>

        <div className="input_box">
          <label>Position</label>
          <input
            type="text"
            name="position"
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>

        <div className="input_box">
          <label>From</label>
          <label>To</label>
          <section className="dates">
            <input
              type="date"
              name="from-date"
              className="from-date"
              onChange={(e) => setStartingDate(e.target.value)}
            />

            <input
              type="date"
              name="from-date"
              className="to-date"
              onChange={(e) => setEndingDate(e.target.value)}
            />
          </section>

          <section className="add-more">
            <button
              type="button"
              onClick={() => {
                setExperienece([
                  ...experience,
                  companyname + " " + position + "" + starting + "" + ending
                ]);
                setCompanyname("");
                setPosition("");
                setStartingDate("");
                setEndingDate("");
              }}
            >
              Add
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
