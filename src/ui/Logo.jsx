import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        width="130px"
        height="130px"
        src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
