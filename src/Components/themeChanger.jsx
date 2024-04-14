import { useState, useEffect } from "react";

function ThemeChanger() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme]);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(theme + "-theme");
  }, [theme]);

  function change() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <div className="container">
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={change}>Change Theme</button>
        <br /><br /><br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos dolor laborum provident! Odio, asperiores similique! Libero fugit tenetur repudiandae cumque.</p>
      </div>
    </div>
  );
}

export default ThemeChanger;
