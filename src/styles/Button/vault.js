import { grayColor, primaryColor, infoColor, successColor, warningColor, dangerColor, roseColor, vaultColor } from "../common";

const vault = {
  vaultbutton: {
    color: "#fff",
    fontWeight: "bold",
    height: "45px",
    border: "none",
    padding: "6px 16px",
    "&:hover,&:focus": {
      boxShadow: "0 10px 20px 0 rgba(74,169,252,.5)",
      textDecoration: "none",
      cursor: "pointer",
      transform: "translateY(-5px)",
      transition: ".25s ease-in-out",
      backgroundColor: vaultColor
    }
  }
};

export default vault;
