import React from "react";

export default function PersonalInfo() {
     const[info,setInfo]= React.useState([])
  const [FirstName, setFirstName] = React.useState([]);
  const [LastName, setLastName] = React.useState([]);
  const [dateOfBirth, setdateOfBirth] = React.useState([]);
  const [phoneNumber, setPhoneNumber] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [aboutMe, setAboutMe] = React.useState([]);

  return (
    <>
    <div className="information">
{info.map((info,index)=>(
     <h2 key={index}>{info}</h2>
))}
</div>

    
      <div className="personal-info">
        <section className="info">
          Personal Information
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/about-me.png"
            alt="about-me"
          />
        </section>
        <div className="input_box">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input_box">
          <label>Last Name</label>
          <input type="text"
           name="LastName"
           onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="input_box">
          <label>Date of Birth</label>
          <input type="date"
           name="dob"
           onChange={(e) => setdateOfBirth(e.target.value)} />
        </div>
        <div className="input_box">
          <label>Phone Number</label>
          <input type="number" 
          name="phone-number" 
          inputMode="numeric"
          onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div className="input_box">
          <label>Address</label>
          <input type="text" 
          name="address" 
          onChange={(e) => setAddress(e.target.value)}/>
        </div>

        <div className="input_box">
          <label>Email</label>
          <input type="email" 
          name="email"
          onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input_box">
          <label>About me</label>
          <textarea name="description"
            cols="30"
             rows="10"
           onChange={(e) => setAboutMe(e.target.value)}></textarea>
        </div>
      </div>
    </>
  );
}
