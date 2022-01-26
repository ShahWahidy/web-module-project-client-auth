import axios from "axios";
import React, { useEffect, useState } from "react";


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:9000/api/friends', {
            headers:{
                authorization: token
            }
        })
           .then((res) =>{
            //console.log(res);
            setFriends(res.data);
        })
    },[])
    return(<div>
            <h2>friendsList</h2>
            <ul>
                {
                    friends.map(friend => {
                        return<li>{friend.name} - {friend.email}</li>
                    })
                }
                
            </ul>
        </div>)
  }


export default FriendsList;