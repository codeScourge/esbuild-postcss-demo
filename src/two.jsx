import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <h1>This might be the second page</h1>
        <a href="/templates/one.html">switch page</a>
    </React.StrictMode>
)