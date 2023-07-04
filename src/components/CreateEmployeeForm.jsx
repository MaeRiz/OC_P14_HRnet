import { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employees.slice";

import { STATES_OPTIONS, DEPARTMENTS_OPTIONS } from "../data/data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Modal from "modal-react-lib";
import "modal-react-lib/dist/index.css";

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const refForm = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    firstName: null,
    lastName: null,
    birth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null,
  });

  const modal_content = {
    title: "Perfect !",
    text: `Employee ${employeeForm.firstName} created successfully !`,
  };

  const handdleChange = (id, value) => {
    setEmployeeForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    refForm.current.reset();
    dispatch(addEmployee(employeeForm));
    setOpenModal(true);
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee" ref={refForm}>
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
            handdleChange("birth", date.toJSON());
          }}
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id="startDate"
          selected={
            employeeForm.startDate ? new Date(employeeForm.startDate) : null
          }
          onChange={(date) => {
            handdleChange("startDate", date.toJSON());
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
          options={DEPARTMENTS_OPTIONS}
          placeholder="Select Department"
          onChange={(e) => {
            handdleChange("department", e.value);
          }}
        />
      </form>
      <button onClick={(e) => handdleSubmit(e)}>Save</button>
      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content={modal_content}
      />
    </div>
  );
};

export default CreateEmployeeForm;
