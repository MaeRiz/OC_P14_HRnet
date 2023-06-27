import { Link } from "react-router-dom";
import CreateEmployeeForm from "../components/CreateEmployeeForm";

const Home = () => {
  return (
    <div className="homepage">
      <div className="title">
        <h1>HRnet</h1>
        <Link to={"/employees"}>View Current Employees</Link>
      </div>
      <CreateEmployeeForm />
    </div>
  );
};

export default Home;
