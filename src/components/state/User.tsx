import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const[user, setUser] = useState<AuthUser>({} as AuthUser)

    // handler
    const handleLogin = () => {
        setUser({
            name: 'lcube',
            email: 'info@lcube.fr'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}