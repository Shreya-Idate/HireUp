import React, { Component } from "react";
import { AboutNav } from "../GeneralComponents/AboutNav";
import { Row, Col } from "react-bootstrap";
import { EmpNav } from "./EmpNav";
import { Footer } from "../GeneralComponents/Footer";

export default class EmpLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-emp", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./emp-home";
        }
      });
  }
  render() {
    return (
      <div className="area">
        <AboutNav />
        <Row className="emp-sign-up">
          {/* <Col xs={12} md={5} xl={5} >
            <img className="sign-up-bg-img" src={signUpImg}/>
          </Col> */}
          <Col xs={12} md={12} xl={12}>
            <div>
              <form className="form" onSubmit={this.handleSubmit}>

                <div className="emp-form-box">
                  <h3>Sign In</h3>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right">
                    <a href="/emp-sign-up">Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}