import { useState } from "react";
import { Link } from "react-router-dom";

import "./HumanResource.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import Table from "./Table";
import Dashboard from "./HrDashboard";

export default function HumanResource() {
    const [active, setActive] = useState("Table");

    const employees = [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@company.com",
          phone_number: "09171234567",
          date_of_birth: "1990-05-20",
          gender: "Male",
          address: "123 Main Street, Cavite",
          position: "Software Engineer",
          hire_date: "2020-01-15",
          employment_status: "Active",  
          img: "/images/okotok.png",
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Smith",
          email: "jane.smith@company.com",
          phone_number: "09181234567",
          date_of_birth: "1988-10-02",
          gender: "Female",
          address: "456 Elm Street, Tagaytay",
          position: "HR Manager",
          hire_date: "2018-03-10",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
        {
          id: 3,
          first_name: "Michael",
          last_name: "Tan",
          email: "michael.tan@company.com",
          phone_number: "09991234567",
          date_of_birth: "1995-12-11",
          gender: "Male",
          address: "789 Oak Street, Dasmariñas",
          position: "Marketing Specialist",
          hire_date: "2021-06-01",
          employment_status: "Probationary",
          img: "/images/okotok.png",
        },
        {
          id: 4,
          first_name: "Alyssa",
          last_name: "Reyes",
          email: "alyssa.reyes@company.com",
          phone_number: "09193456789",
          date_of_birth: "1992-04-05",
          gender: "Female",
          address: "101 Pine St, Silang",
          position: "UI/UX Designer",
          hire_date: "2019-09-23",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
        {
          id: 5,
          first_name: "Carlos",
          last_name: "Dela Cruz",
          email: "carlos.delacruz@company.com",
          phone_number: "09221234567",
          date_of_birth: "1985-07-07",
          gender: "Male",
          address: "202 Mango Ave, Indang",
          position: "Finance Officer",
          hire_date: "2016-05-18",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
        {
          id: 6,
          first_name: "Carlos",
          last_name: "Dela Cruz",
          email: "carlos.delacruz@company.com",
          phone_number: "09221234567",
          date_of_birth: "1985-07-07",
          gender: "Male",
          address: "202 Mango Ave, Indang",
          position: "Finance Officer",
          hire_date: "2016-05-18",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
        {
          id: 7,
          first_name: "Carlos",
          last_name: "Dela Cruz",
          email: "carlos.delacruz@company.com",
          phone_number: "09221234567",
          date_of_birth: "1985-07-07",
          gender: "Male",
          address: "202 Mango Ave, Indang",
          position: "Finance Officer",
          hire_date: "2016-05-18",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
        {
          id: 8,
          first_name: "Carlos",
          last_name: "Dela Cruz",
          email: "carlos.delacruz@company.com",
          phone_number: "09221234567",
          date_of_birth: "1985-07-07",
          gender: "Male",
          address: "202 Mango Ave, Indang",
          position: "Finance Officer",
          hire_date: "2016-05-18",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
        {
          id: 9,
          first_name: "Carlos",
          last_name: "Dela Cruz",
          email: "carlos.delacruz@company.com",
          phone_number: "09221234567",
          date_of_birth: "1985-07-07",
          gender: "Male",
          address: "202 Mango Ave, Indang",
          position: "Finance Officer",
          hire_date: "2016-05-18",
          employment_status: "Active",
          img: "/images/okotok.png",
        },
    ];

    const hrCount = 100
    return(
        <div className="hr_lg d-flex w-100">
            <NavigationBar />

            <div className="ms-lg-4 overflow-x-auto">
                <div className="d-flex justify-content-between mx-4">
                    <div className="hr_nav d-flex justify-content-between rounded-pill mt-2" style={{ background: "#fff" }}>
                            <button onClick={ () => setActive("Table") } className={`btn rounded-pill font-sm ${active === "Table" ? "active" : ""}`}>Tables</button>
                            <button onClick={ () => setActive("Dashboard") } className={`btn rounded-pill font-sm ${active === "Dashboard" ? "active" : ""}`}>Dashboard</button>
                    </div>
                    <div className="mt-2">
                        <Link to="/dashboard" className="home_btn me-4 d-none"><img src="/images/home.png" width="15px" /></Link>
                    </div>
                </div>

                {
                    active === "Table" ? (
                        <Table employees={ employees }/>
                    ) : <Dashboard employees={ employees }/>
                    
                }

            </div>
        </div>
    );
}