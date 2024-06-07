import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Homework03</h1>
            <nav className="main-nav" style={{display: "flex", justifyContent: "center", gap: "10vw"}}>
                <Link className="link" to="conversion">Conversion (Task01)</Link>
                <Link className="link" to="todolist">TodoList (Task02)</Link>
            </nav>
        </div>
    );
}