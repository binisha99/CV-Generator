import React from 'react'
import PersonalInfo from './form/PersonalInfo'
import PersonalEdu from './form/PersonalEdu'
import PersonalExp from './form/PersonalExp'
import ProfilePic from './form/ProfilePic'
import Submit from './button/Submit'


export default function Form() {
 
  return (
    <div className = "wrapper">
      <form>
   <PersonalInfo />
<PersonalEdu />
<PersonalExp />
<ProfilePic />
<Submit />

      </form>
    </div>
  )
}
