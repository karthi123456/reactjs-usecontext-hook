import React from "react";
import { useParams } from "react-router-dom";

function User() {

    const {id} = useParams();

    return <div>
        <h1>User Profile Page</h1>
        <p>User Id is  <b>{id}</b></p>
    </div>
}

export default User;