import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${"http://textspot.io/wp-content/uploads/2020/09/Doctor-Appointment-Reminder-Texts_-Everything-You-Need-to-Know-1.png"})`,
        backgroundPosition: "center",
        height: "100%",
        weidth: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">
            <i>Login Form</i>
          </h3>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            {" "}
            Not Registered-Click here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
