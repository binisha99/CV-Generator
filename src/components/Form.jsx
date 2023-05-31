import React from 'react'
import PersonalInfo from './form/PersonalInfo'
import PersonalEdu from './form/PersonalEdu'
import PersonalExp from './form/PersonalExp'
import ProfilePic from './form/ProfilePic'

export default function Form() {
 
  return (
    <div className = "wrapper">
      <form>
   <PersonalInfo />
<PersonalEdu />
<PersonalExp />
<ProfilePic />
      </form>
    </div>
  )
}
