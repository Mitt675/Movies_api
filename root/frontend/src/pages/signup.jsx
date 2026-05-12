// SignupPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

function SignupPage() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
   

    const handleSignup = async (e) => {
        e.preventDefault();

        
        try {
            const res = await fetch("http://localhost:5004/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    userName,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Signup failed");
            }

            alert("Signup successful");
            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", data.userName);
            navigate("/");

            setEmail("");
            setPassword("");
            setUserName("");
          
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Create Account</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignupPage;