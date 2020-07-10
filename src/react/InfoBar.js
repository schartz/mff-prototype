import React from "react";

export default function InfoBar(props) {
    return (
        <div
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                fontSize: "14px",
                padding: "20px 10px",
                background: "#333",
                color: "#bbb",
                letterSpacing: "0.5px"
            }}
        >
            Running in React!{" "}
            <a
                href="https://github.com/mildlyautistic/"
                target="_blank"
                style={{
                    color: "#40A8F3",
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "0 0 3px",
                    borderBottom: "2px solid #40A8F3"
                }}
            >
                Check out the repo here.
            </a>
        </div>
    );
}
