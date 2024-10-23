import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        width="200px"
        height="200px"
        src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
