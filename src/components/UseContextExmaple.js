import { createContext, useContext, useState } from "react";


const UserContext = createContext();

function UseContextExmaple() {
    const [user, setUser] = useState('Karthi Nagamuthu');
    return (
        <>
            <h1>Hello {user}</h1>
            <UserContext.Provider value={user}>
                <Component1 user={user} />
            </UserContext.Provider>
        </>
    )
}

function Component1() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component1 {user}</h1>
            <Component2/>
        </>
    );
}

function Component2() {
    const user = useContext(UserContext);
    return <h1>Component2 {user}</h1>
}

export default UseContextExmaple;