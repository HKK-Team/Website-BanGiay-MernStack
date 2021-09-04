import React from 'react'
import { Link } from 'react-router-dom'
import './SortBy.css'

export default function SortBy() {
    return (
        <div className="sort_by">
            <div className="sort_by-wrapper">
                <label htmlFor="">LỌC THEO : </label>
                <Link href="#">Xanh dương đậm <i class="fas fa-times"></i></Link>
                <Link href="#">26 <i class="fas fa-times"></i></Link>
            </div>
        </div>
    )
}
