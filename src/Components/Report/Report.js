import React , {useState}from 'react'
import { useTable } from "react-table";
import './report.css'
import { Link } from 'react-router-dom';
const Report = () => {
  const columns = [
    {
      id: "demobilizationRequestId",
      Header: "Demobilization Request ID",
    },
    {
      id: "applicantName",
      Header: "Applicant Name",
    },
    {
      id: "applicantContactInfo",
      Header: "Applicant Contact Information",
    },
    {
      id: "demobilizationRequestDate",
      Header: "Demobilization Request Date",
    },
    {
      id: "demobilizationRequestCategory",
      Header: "Demobilization Request Category",
    },
    {
      id: "demobilizationRequestStatus",
      Header: "Demobilization Request Status",
    },
    {
      id: "approvalDate",
      Header: "Approval Date",
    },
    {
      id: "rejectionReason",
      Header: "Rejection Reason",
    },
  ];
  const data = [
    {
      demobilizationRequestId: 1,
      applicantName: "John Doe",
      applicantContactInfo: "john.doe@example.com, 123-456-7890",
      demobilizationRequestDate: "2023-03-08",
      demobilizationRequestCategory: "Medical",
      demobilizationRequestStatus: "Pending",
      approvalDate: null,
      rejectionReason: null,
    },
    {
      demobilizationRequestId: 2,
      applicantName: "Jane Doe",
      applicantContactInfo: "jane.doe@example.com, 987-654-3210",
      demobilizationRequestDate: "2023-03-09",
      demobilizationRequestCategory: "Family",
      demobilizationRequestStatus: "Approved",
      approvalDate: "2023-03-10",
      rejectionReason: null,
    },
    {
      demobilizationRequestId: 2,
      applicantName: "Jane Doe",
      applicantContactInfo: "jane.doe@example.com, 987-654-3210",
      demobilizationRequestDate: "2023-03-09",
      demobilizationRequestCategory: "Family",
      demobilizationRequestStatus: "Approved",
      approvalDate: "2023-03-10",
      rejectionReason: null,
    },
    {
      demobilizationRequestId: 2,
      applicantName: "Jane Doe",
      applicantContactInfo: "jane.doe@example.com, 987-654-3210",
      demobilizationRequestDate: "2023-03-09",
      demobilizationRequestCategory: "Family",
      demobilizationRequestStatus: "Approved",
      approvalDate: "2023-03-10",
      rejectionReason: null,
    },
  ];
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const handleApplyFilters = () => {
    // Construct an object with filter values
    const filters = {
      dateRange,
      category,
      status,
      name,
    };

    // Pass the filters to the parent component for data filtering
    console.log(filters);
  };
  return (
    <div className='dashboard-cont report_page_container'>
        <h1 className='cont-title' >Report Page</h1>
      <div className='report_page_task_bar_cont'>
      <div className="filter-form">
      <h3>Filter Data</h3>
      <div className="form-group">
        <label>Date Range:</label>
        <input
          type="date"
          value={dateRange.startDate}
          onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
        />
        <span> to </span>
        <input
          type="date"
          value={dateRange.endDate}
          onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Medical">Medical</option>
          <option value="Family">Family</option>
          {/* Add more category options */}
        </select>
      </div>
      <div className="form-group">
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          {/* Add more status options */}
        </select>
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>
      </div>
      <div className='report_page_body'>
        <h3>Report</h3>
        <p> 4 Result found.</p>
       {data?.length > 0  ? <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.id}>{column?.Header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
                 <Link to={`/home/Request/${row[0]}`}>
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => {
                  console.log(row[column.id])
                  return(
                    <td key={columnIndex}>{row[column.id]}</td>
                  )
                })}
              </tr></Link>
            ))}
          </tbody>
        </table> : <p className='feedcak-paragraph'>Enter filters to generate a report.</p>}
      </div>
    </div>
  )
}

export default Report