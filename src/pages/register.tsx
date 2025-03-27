import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "./form.css"

const Register = () => {
    const { register } = useAuth(); // ✅ register TypeScript tomonidan to‘g‘ri tan olinadi
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        bio: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formValues.fullName || !formValues.email || !formValues.bio) {
            alert("Barcha maydonlarni to‘ldiring!");
            return;
        }

        register(formValues);
        navigate("/");
    };

    return (
        <div className="formContainer">
            <div className="forms">
                <form onSubmit={handleSubmit}>

                    <div className="insadeForm">
                        <h2>Mohirdevga xush kelibsiz</h2>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="To‘liq ismingiz"
                            value={formValues.fullName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="bio"
                            placeholder="O‘zingiz haqida qisqacha"
                            value={formValues.bio}
                            onChange={handleChange}
                        />
                        <button type="submit">Ro‘yxatdan o‘tish</button>
                    </div>
                </form>
            </div>
            <div className="formLogo">
                <img src="./src\assets\mohirdev-auth-logo.png" alt="" />
            </div>
        </div>
    );
};

export default Register;
