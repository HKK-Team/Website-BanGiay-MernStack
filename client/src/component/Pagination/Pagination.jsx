import React from "react";
import './Pagination.css'

export default function Pagination() {
  return (
    <div id="pagination">
      <a href="#" className="prev ">Trước</a>
      <a href="" className="page_node">1</a>
      <a href="" className="page_node">2</a>
      <a href="" className="page_node">3</a>
      <span className="page_node">...</span>
      <span className="page_node">25</span>
      <a href="#" className="next">Tiếp</a>
    </div>
  );
}
