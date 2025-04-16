import { useState } from "react";

import "./MessageBar.css";
import { useEffect } from "react";

export default function MessageBar(props) {
    const [active, setActive] = useState(1);
    const handleClick = (branch) => {
        setActive(branch);
        console.log(branch);
        
        props.setSelectedBranch(branch);
        props.setMessageBarStatus(!props.messageBarStatus);   
    }
    return(
        <section className={ props.messageBarStatus ? "hide_msg_bar py-4" : "message_bar py-4" }>
            <button onClick={ () => props.setMessageBarStatus(!props.messageBarStatus) } className="x btn w-100 d-none justify-content-end"><i className="fa-solid fa-x me-3"></i></button>
            {
                props.branches.map((branch) => (
                    <button onClick={ () => handleClick(branch.id) } className={ `btn d-flex justify-content-start align-items-center py-2 ps-2 pe-4 w-100 ${active === branch.id ? "active" : ""}`} key={ branch.id }>
                        <div><img src={ branch.img } className="rounded-circle branch_dp" /></div>
                        <h6 className="ms-2 fw-bold">{ branch.branch }</h6>
                    </button>
                )) 
            }
        </section>
    );
}