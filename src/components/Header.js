import React from "react";

function Header ({onDarkModeClick, isDarkMode}){
    const h2 = isDarkMode ? "Light Mode" : "Dark Mode"
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {h2}
                </button>
            </header>
      </div>
    )
}

export default Header;