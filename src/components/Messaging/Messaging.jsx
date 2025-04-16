import NavigationBar from "../NavigationBar/NavigationBar";
import MessageBar from "./MessageBar";
import MessagePanel from "./MessagePanel";

import { useState } from "react";

export default function Messaging() {
    const loggedId = 1;
    const [selectedBranch, setSelectedBranch] = useState(1);
    const [messageBarStatus, setMessageBarStatus] = useState(false);

    const branches = [
        { id: 1, img: "/images/okotok.png", branch: "Naic Branch" },
        { id: 2, img: "/images/okotok.png", branch: "Tanza Branch" },
        { id: 3, img: "/images/okotok.png", branch: "Trece Martires Branch" },
        { id: 4, img: "/images/okotok.png", branch: "Indang Branch" },
        { id: 5, img: "/images/okotok.png", branch: "Dasmariñas Branch" },
        { id: 6,img: "/images/okotok.png", branch: "General Trias Branch" },
        { id: 7, img: "/images/okotok.png", branch: "Imus Branch" },
        { id: 8, img: "/images/okotok.png", branch: "Silang Branch" },
        { id: 9, img: "/images/okotok.png", branch: "Tagaytay Branch" },
        { id: 10, img: "/images/okotok.png", branch: "Maragondon Branch" },
        { id: 11, img: "/images/okotok.png", branch: "Rosario Branch" },
        { id: 12, img: "/images/okotok.png", branch: "Cavite City Branch" }
    ];

    return(
        <section className="d-flex w-100 position-relative">
            <NavigationBar />

            <MessageBar branches={ branches } selectedBranch={ selectedBranch } setSelectedBranch={ setSelectedBranch } messageBarStatus={ messageBarStatus } setMessageBarStatus={ setMessageBarStatus } />

            <MessagePanel branches={ branches } branch={ selectedBranch } loggedId={ loggedId } messageBarStatus={ messageBarStatus } setMessageBarStatus={ setMessageBarStatus } />
        </section>
    );
}