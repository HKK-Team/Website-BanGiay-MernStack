import React ,{Link}from "react";
import './Pagination.css'

export default function Pagination() {
  return (
    <div id="pagination">
      <Link to="#" className="prev ">Trước</Link>
      <Link to="" className="page_node">1</Link>
      <Link to="" className="page_node">2</Link>
      <Link to="" className="page_node">3</Link>
      <span className="page_node">...</span>
      <span className="page_node">25</span>
      <Link to="#" className="next">Tiếp</Link>
    </div>
  );
}
