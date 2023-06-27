import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import FreelancerRegister from "./components/FreelancerComponents/FreelancerRegister";
import GeneralDetails from "./components/FreelancerComponents/GeneralDetails";
import EducationalDetails from "./components/FreelancerComponents/EducationalDetails";
import ShowProfile from "./components/FreelancerComponents/ShowProfile";
import PortfolioTemplate from "./components/EmployerComponents/PortfolioTemplate"
import ShowAbout from "./components/GeneralComponents/ShowAbout";
import PaymentInfo from "./components/EmployerComponents/PaymentInfo";
import Skills from "./components/FreelancerComponents/Skills";
import EmployerRegister from "./components/EmployerComponents/SampleEmployerRegister";
import EmpSignUp from "./components/EmployerComponents/EmployeeRegister";
import EmpLogin from "./components/EmployerComponents/EmpLogin";
import EmpProfile from "./components/EmployerComponents/EmpProfile";
import EmployerSearch from "./components/EmployerComponents/EmployerSearch";
import ShowEmpProfile from "./components/EmployerComponents/ShowEmpProfile";
import GeneralEmpDetails from "./components/EmployerComponents/GeneralEmpDetails";
import SkillDetails from "./components/FreelancerComponents/SkillDetails";
import BrowseTalent from "./components/EmployerComponents/BrowseTalent";
import PaymentForm from "./components/FreelancerComponents/PaymentForm";
import Pay from "./components/GeneralComponents/Pay";
import BrowseEmp from "./components/FreelancerComponents/BrowseEmp";
import BrowseEmpRestricted from "./components/GeneralComponents/BrowseEmpRestricted";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<ShowAbout />} />
              <Route exact path="/about" element={<ShowAbout />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/profile" element={<ShowProfile/>} />
              <Route path="/general-details" element={<GeneralDetails />} />
              <Route path="/educational-details" element={<EducationalDetails />} />
              <Route path="/skillsEdit" element={<SkillDetails />} />
              {/* <Route path="/freelancer-register" element={<FreelancerRegister />} /> */}
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/portfolio" element={<PortfolioTemplate />} />
              <Route path="/emp-sign-up" element={<EmpSignUp />} />
              <Route path="/emp-sign-in" element={<EmpLogin />} />
              <Route path="/emp-home" element={<ShowEmpProfile />} />
              <Route path="/emp-search" element={<EmployerSearch />} />
              <Route path="/emp-general-details" element={<GeneralEmpDetails />} />
              <Route path="/emp-description-edit" element={<EmployerSearch />} />
              <Route path="/browse-talent" element={<BrowseTalent/>}/>
              <Route path="/subscribe" element={<PaymentForm/>}/>
              <Route path="/pay" element={<Pay/>}/>
              <Route path="/find-work" element={<BrowseEmp/>}/>
              <Route path="/browseEmpRestricted" element={<BrowseEmpRestricted/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;