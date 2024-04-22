import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <h1>This should be the first page</h1>
        <a href="/templates/two.html">switch page</a>
    </React.StrictMode>
)