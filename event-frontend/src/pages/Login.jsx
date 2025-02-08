import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in...", { email, password });
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col w-80">
        <input className="border p-2 mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="border p-2 mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-blue-500 text-white p-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
