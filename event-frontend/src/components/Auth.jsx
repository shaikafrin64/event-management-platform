import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", email, password);
    } else {
      console.log("Registering with:", name, email, password);
    }
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl mb-4">{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        {!isLogin && (
          <input className="border p-2 mb-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        )}
        <input className="border p-2 mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="border p-2 mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="bg-blue-500 text-white p-2">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button className="text-blue-500 mt-2" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default Auth;
