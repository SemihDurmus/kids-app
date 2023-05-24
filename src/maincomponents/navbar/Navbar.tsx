import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/multiplication")}>
        Multiplication
      </button>
      <button onClick={() => navigate("/points")}>Points</button>
    </div>
  );
};

export default NavBar;
