import React from 'react'

export default function Form() {
 
  return (
    <div className = "wrapper">
      <form>
     <div className="personal-info">
<section className= "info">
    Personal Information
    <img width="50" height="50" src="https://img.icons8.com/ios/50/about-me.png" alt="about-me"/>
</section>
<div className="input_box">
<label>First Name</label>
     <input type="text" name="firstName"/>
</div>
     
     <div className="input_box">
     <label>Last Name</label>
     <input type="text" name="LastName"/>
     </div>
     
     <div className="input_box">
     <label >Date of Birth</label>
<input type="date" name="dob"/>
</div>
<div className="input_box">
     <label >Phone Number</label>
<input type="number" name="phone-number" inputMode= "numeric"/>
</div>

<div className="input_box">
     <label >Address</label>
<input type="text" name="address"/>
</div>

<div className="input_box">
     <label >Email</label>
<input type="email" name="email"/>
</div>

<div className="input_box">
    <label>About me</label>
     <textarea name="description" id="" cols="30" rows="10"></textarea>
</div>
</div>

<div className="personal-experience">
    <section className="experienece">
        Experience
        <img width="80" height="80" src="https://img.icons8.com/dotty/80/customer-insight.png" alt="customer-insight"/>
    </section>
    <div className="input_box">
<label>Company name</label>
<input type="text" name="company_name"/>
</div>

<div className="input_box">
<label>Position</label>
<input type="text" name="position"/>
</div>

<div className="input_box">
<label>From</label><label>To</label>
<section className="dates">
<input type="date" name="from-date" className='from-date'/>
<input type="date" name="from-date" className='to-date'/>
</section>

 <section className="add-more">
<button>Add</button>
</section>
 
</div>
</div>

<div className="personal-education">
<section className= "education">
   Education
     <img width="50" height="50" src="https://img.icons8.com/ios/50/teaching.png" alt="teaching"/>
</section>
<div className="input_box">
<label>School Name</label>
     <input type="text" name="SchoolName"/>
</div>
<div className="input_box">
<label>Degree</label>
<select name="degree" id="degree">
<option value="slc" selected>Select an option</option>
  <option value="slc">SLC</option>
  <option value="bachelors">Bachelors</option>
  <option value="Masters">Masters</option>
  <option value="phd">PHD</option>
</select>
</div>
<div className="input_box">
<label>Address</label>
     <input type="text" name="scl-address"/>
     
 <section className="add-more">
<button>Add</button>
</section> 

</div>
</div>

<section className="profile-pic">
     <label>Upload your photo</label>
     <input type="file" name="upload" id="uploadDp" />
</section>
<button type="submit" className="submit">
     submit
</button>
      </form>
    </div>
  )
}
