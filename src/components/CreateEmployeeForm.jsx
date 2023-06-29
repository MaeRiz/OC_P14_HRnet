import { useState } from "react";

import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employees.slice";

import { STATES_OPTIONS, DEPARTEMENTS_OPTIONS } from "../data/data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();

  const [employeeForm, setEmployeeForm] = useState({
    firstName: null,
    lastName: null,
    birth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    departement: null,
  });

  const handdleChange = (id, value) => {
    setEmployeeForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeForm);
    dispatch(addEmployee(employeeForm));
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => handdleChange(e.target.id, e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => handdleChange(e.target.id, e.target.value)}
        />

        <label htmlFor="birth">Date of Birth</label>
        <DatePicker
          id="birth"
          selected={employeeForm.birth ? new Date(employeeForm.birth) : null}
          onChange={(date) => {
            handdleChange("birth", date.toLocaleDateString("en"));
          }}
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id="startDate"
          selected={
            employeeForm.startDate ? new Date(employeeForm.startDate) : null
          }
          onChange={(date) => {
            handdleChange("startDate", date.toLocaleDateString("en"));
          }}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) => handdleChange(e.target.id, e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => handdleChange(e.target.id, e.target.value)}
          />

          <label htmlFor="state">State</label>
          <Dropdown
            options={STATES_OPTIONS}
            placeholder="Select State"
            onChange={(e) => {
              handdleChange("state", e.value);
            }}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            onChange={(e) => handdleChange(e.target.id, e.target.value)}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Dropdown
          options={DEPARTEMENTS_OPTIONS}
          placeholder="Select Departement"
          onChange={(e) => {
            handdleChange("departement", e.value);
          }}
        />
      </form>
      <button onClick={(e) => handdleSubmit(e)}>Save</button>
    </div>
  );
};

export default CreateEmployeeForm;
