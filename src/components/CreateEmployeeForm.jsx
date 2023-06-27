import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEmployeeForm = () => {
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    birth: "",
    startDate: "",
    street: "",
    City: "",
    state: "",
    zipCode: "",
    departement: "",
  });

  const handdleChange = (e) => {
    setEmployeeForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const handdleChangeDate = (id, date) => {
    setEmployeeForm((prevState) => ({
      ...prevState,
      [id]: date,
    }));
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeForm);
    console.log(employeeForm.birth.toLocaleDateString("en"));
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={(e) => handdleChange(e)} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={(e) => handdleChange(e)} />

        <label htmlFor="birth">Date of Birth</label>
        <DatePicker
          id="birth"
          selected={employeeForm.birth}
          onChange={(date) => {
            handdleChangeDate("birth", date);
          }}
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id="startDate"
          selected={employeeForm.startDate}
          onChange={(date) => {
            handdleChangeDate("startDate", date);
          }}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" onChange={(e) => handdleChange(e)} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={(e) => handdleChange(e)} />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            onChange={(e) => handdleChange(e)}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <button onClick={(e) => handdleSubmit(e)}>Save</button>
    </div>
  );
};

export default CreateEmployeeForm;
