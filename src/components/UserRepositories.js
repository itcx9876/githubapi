import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserRepositories({user}) {
    const [userDetails,setUserDetails]=useState(null)
    useEffect(() => {
        console.log("Rerender")

        fetchUsers()
        // return
    }, [])
    async function fetchUsers() {
        try {

            const data = await axios.get(user.repos_url, {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": "Bearer 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",
                    // "X-GitHub-Api-Version": "2022-11-28"
                }
            })

            console.log(data,"GIST")
            setUserDetails(data.data)
        } catch (e) {
            console.log(e)

        }
    }
  return (
<>
<div>Repositories:</div>
<ul>
{
    userDetails && userDetails.length>0 ? <>{userDetails.map(detail=>{
        return <li>{detail.name}</li>
    })}</>:"No details found"
}
    </ul></>
  )
}

export default UserRepositories