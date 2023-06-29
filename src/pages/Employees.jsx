import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Employees = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h1>Current Employees</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Employees;
