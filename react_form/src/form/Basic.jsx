import { useState } from "react";
import "../assets/css/basicform.css";
const Basic = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState("");
  
  const validateEmail = (somnath) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(somnath)) {
      setError("Invalid email format");
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    if (error) {
      alert(error);
      setEmail("");
      return;
    }
    if (password !== cpassword) {
      alert("Password and Confirm Password should be same");
      setPassword("");
      setCPassword("");
      return;
    }
    console.log({ name, email, password });
    alert("Form Submitted");
    setEmail("");
    setName("");
    setPassword("");
    setCPassword("");
  };
  return (
    <div>
        <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        placeholder="Enter your name"
        className="input"
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Enter your email"
        className="input"
        type="text"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="*********"
        className="input"
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        placeholder="*********"
        className="input"
        type="password"
        name="cpassword"
        value={cpassword}
        onChange={(event) => setCPassword(event.target.value)}
      />
      <input
        type="file"
        name="img"
        onChange={(event) => setImg(event.target.files[0])
        }
      />
      <button type="submit">Submit</button>
    </form>
      <div>
       {img && (
        <img
          src={URL.createObjectURL(img)}
          alt="Uploaded"
          style={{ width: "100px", height: "100px", marginTop: "20px" }}
        />
      )}
    </div>
    </div>
  );
};

export default Basic;
