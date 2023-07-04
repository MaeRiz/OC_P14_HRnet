import { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Table } from "ka-table";
import { DataType, SortingMode, PagingPosition } from "ka-table/enums";
import "ka-table/style.css";

const Employees = () => {
  const [searchText, setSearchText] = useState("");
  const data = useSelector((state) => state.employees);

  let formatedData = [];

  data.map((item) => {
    formatedData.push({
      ...item,
      birth: new Date(item.birth).toLocaleDateString("en"),
      startDate: new Date(item.startDate).toLocaleDateString("en"),
    });
  });

  const columns = [
    {
      title: "First Name",
      key: "firstName",
      dataType: DataType.String,
    },
    {
      title: "Last Name",
      key: "lastName",
      dataType: DataType.String,
    },
    {
      title: "Start Date",
      key: "startDate",
      dataType: DataType.String,
    },
    {
      title: "Department",
      key: "department",
      dataType: DataType.String,
    },
    {
      title: "Date of birth",
      key: "birth",
      dataType: DataType.String,
    },
    {
      title: "Street",
      key: "street",
      dataType: DataType.String,
    },
    {
      title: "City",
      key: "city",
      dataType: DataType.String,
    },
    {
      title: "State",
      key: "state",
      dataType: DataType.String,
    },
    {
      title: "Zip Code",
      key: "zipCode",
      dataType: DataType.String,
    },
  ];

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <input
        placeholder="Search"
        type="search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.currentTarget.value);
        }}
        className="top-element filter-text"
      />
      <Table
        columns={columns}
        data={formatedData}
        rowKeyField={"firstName"}
        sortingMode={SortingMode.Single}
        columnResizing={true}
        paging={{
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
          pageSizes: [5, 10, 15],
          position: PagingPosition.Bottom,
        }}
        search={({ searchText: searchTextValue, rowData, column }) => {
          if (column.key === "passed") {
            return (
              (searchTextValue === "false" && !rowData.passed) ||
              (searchTextValue === "true" && rowData.passed)
            );
          }
        }}
        searchText={searchText}
        noData={{
          text: "No Data Found",
        }}
      />
      <Link to={"/"}>Home</Link>
    </div>
  );
};
export default Employees;
