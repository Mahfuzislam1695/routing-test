import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const FriendDetails = () => {
    let {friendId} = useParams();
    const [friend,setFriend] = useState({});

    useEffect( () => {
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data))

    },[])
    return (
        <div>
            <h1>friend details{friendId}</h1> 
            <h3>name:{friend.name}</h3>
            <p>email:{friend.email}</p>
        </div>
    );
};

export default FriendDetails;