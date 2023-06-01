import React from 'react'
import PersonalExp from './PersonalExp'
import PersonalInfo from './PersonalInfo'
import PersonalEdu from './PersonalEdu'

export default function ProfilePic() {
 
  return (
    <div>
      <section className="profile-pic">
     <label>Upload your photo</label>
     <input type="file" name="upload" id="uploadDp" />
</section>

    </div>
  )
}
