import React from "react";

export default function PersonalEdu() {
  const [educations, setEducations] = React.useState([]);
  const [schoolName, seSchoolName] = React.useState([]);
  const [degree, setDegree] = React.useState("");
  const [address, setAddress] = React.useState("");
  return (

    <>
    <div className="eeducation">
      {educations.map((education,
        index) =>(
          <h2 key={index}>{educations}</h2>
        ))}
    </div>
    <div className="personal-education">
      <section className="education">
        Education
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/teaching.png"
          alt="teaching"
        />
      </section>
      <div className="input_box">
        <label>School Name</label>
        <input type="text"
         name="SchoolName" 
         onChange={(e) => seSchoolName(e.target.value)}/>
      </div>
      <div className="input_box">
        <label>Degree</label>
        <select name="degree" 
        id="degree"
        onChange={(e) => setDegree(e.target.value)}>
          <option value="slc" selected>
            Select an option
          </option>
          <option value="slc">SLC</option>
          <option value="bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="phd">PHD</option>
        </select>
      </div>
      <div className="input_box">
        <label>Address</label>
        <input type="text"
         name="scl-address" 
         onChange={(e) => setAddress(e.target.value)}/>

        <section className="add-more">
          <button 
          type="button"
          onClick={() => {
            setEducations([
              ...educations,
              schoolName + "" + degree + "" + address
            ]);
            seSchoolName("");
setDegree("");
setAddress("");
          }}>
            Add</button>
        </section>
      </div>
    </div>
    </>
  );
}
