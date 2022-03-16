import React from "react";
import "./Footer.css";

function Footer({children}) {
    return (
        <>
            <footer>
                <div className="footer__content">
                    <p><strong>Copyright &copy; 2022 ~ Renske Smith-Nauta</strong></p>
                </div>
            </footer>
        </>
    );
}

export default Footer