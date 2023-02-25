import React from 'react'
import "./User.css"
import UserRepositories from './UserRepositories'
function User({user}) {
    
  return (
    <div>
        <img className='user-profile-img' src={user.avatar_url} width="100" height={"100"} alt={user.login+"-avatar of user"}/><br></br>
          <strong>Name:</strong> 
    <p>
 {user.login}
</p>
<strong>URL:</strong><p><a href={user.html_url} target="_blank">Visit Profile</a></p>
<div><strong>Organizations</strong><a href={user.organizations_url} target="_blank">Organizations</a></div>
<UserRepositories user={user}/>
    </div>
  )
}

export default User