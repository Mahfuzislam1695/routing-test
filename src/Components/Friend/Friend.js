import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import ('./Friends.css')

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div className='style'>
            <h2>name:{name}</h2>
            <p>email:{email}</p>
            <Link to = {`/friend/${id}`}>
                <button>about id {id}</button>
                </Link>

             |<button onClick ={() => handleClick(id)}>click me</button>   

        </div>
    );
};

export default Friend;