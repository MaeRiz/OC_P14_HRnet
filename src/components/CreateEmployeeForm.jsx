import { useState } from "react";

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

  const handdleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeForm);
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
        <input id="birth" type="text" />

        <label htmlFor="startDate">Start Date</label>
        <input id="startDate" type="text" />

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
