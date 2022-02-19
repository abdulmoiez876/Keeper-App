import React from 'react';

let year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Made by Abdul Moiez from Pakistan</p>
            <p>Copyright {year}</p>
        </footer>
    )
}

export default Footer;