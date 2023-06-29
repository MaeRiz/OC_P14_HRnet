import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { columns } from "../data/data";

const Employees = () => {
  const data = useSelector((state) => state.employees);

  const tableData = {
    columns,
    data,
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTableExtensions
        {...tableData}
        filterPlaceholder="Search"
        export={false}
        print={false}
      >
        <DataTable
          noHeader
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default Employees;
