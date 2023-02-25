import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'
import "./Greet.css";
// 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
function Greet({ name, secondName }) {
    const message = `Hello, ${name}`
    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState("james")
    const [isLoading,setIsLoading]=useState(false)
    useEffect(() => {
        console.log("Rerender")
        document.title = `Searching, ${userName}`
        fetchUsers()
        // return
    }, [userName])
    async function fetchUsers() {
        try {
            setIsLoading(true)
            const data = await axios.get("https://api.github.com/search/users?q=" + userName, {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": "Bearer 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",
                    // "X-GitHub-Api-Version": "2022-11-28"
                }
            })
            setIsLoading(false)
            console.log(data)
            setUsers(data.data.items)
        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    }
    async function search() {
        if (userName) {
            setIsLoading(true)
            try {
                const response = await axios.get("https://api.github.com/search/users?q=" + userName, {
                    headers: {
                        "Accept": "application/vnd.github+json",
                        "Authorization": "Bearer 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",
                        // "X-GitHub-Api-Version": "2022-11-28"
                    }
                })
                console.log(response.data.items)
                setIsLoading(false)
                setUsers(response.data.items)
            } catch (e) {
                console.log(e)
                setIsLoading(false)
            }
        }
    }
    return (
        <div>
            <input name="user"
                onKeyUp={(event) => {
                    setUserName(event.target.value)
                }}
                onChange={(event) => {
                    console.log(event)
                    setUserName(event.target.value)
                }} />


            <button onClick={search}>Submit/Search</button>
{/* {condition? user:} */}
{users.length>0?<div>Found {users.length}</div>:""}
            <div className='user-list'>
                {isLoading?"Loading.........":users.length > 0 ? users.map(user => {
                    return <User user={user}/>
                }) : "No Users Found"}
            </div>
        </div>
    )
}




export default Greet