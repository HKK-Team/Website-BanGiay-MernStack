import React from 'react'
import './Titlebar.css'

export default function Titlebar(props) {
    return (
        <div className="" id="Titlebar">
        <div className="container">
          <div className="row">
            {/* titlebar_list */}
            <ol className="titlebar_list">
              <li className="titlebar_list-item">
              <i className="fas fa-home"></i>{" Trang Chủ > "}
                <span>
                  {props.name}
                </span>
              </li>
            </ol>
            {/* titlebar_list */}     
          </div>
        </div>
      </div>
    )
}
