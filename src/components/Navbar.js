import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUserCircle, FaChartPie, FaBook, FaSignInAlt, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";
import { BsPersonPlusFill } from "react-icons/bs";

const Navbar = ({ onLogout }) => {
    return (
        <div className="setShadow" style={{backgroundColor:'#184d47', color:'#fff'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className='container-fluid'>
                    <NavLink exact to='/' className="navbar-brand text-white">
                        <h3 className="mt-1 monefy">MONEFY</h3>
                        {/* <img src = "MONEFY.png" atler="image not visible" height="50px" width ="50px"></img> */}
                    </NavLink>
                    <ul className='navbar-nav d-flex'>
                        <li className='nav-item'>
                            <NavLink exact to='/resources' className='nav-link text-white setBold'>
                                <FaBook className="mb-1" /> Investment Resources
                            </NavLink>
                        </li>
                        {localStorage.getItem('token') ?
                            <>
                                <li className='nav-item'>
                                    <NavLink exact to='/budgetBreakdown' className='nav-link text-white setBold'>
                                        <FaChartPie className="mb-1" /> Budget Breakdown
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact to='/addExpense' className='nav-link text-white setBold'>
                                        <RiAddCircleLine className="mb-1" /> Add Expense
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white setBold" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FaUserCircle className="mb-1" /> {localStorage.getItem('userName')}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <NavLink className="dropdown-item" to={{ pathname: '/editProfile', aboutProps:{isAfterRegister: false} }} >
                                            <FaUserEdit className="mb-1" /> Edit / Delete Account
                                        </NavLink>
                                        <div className="dropdown-divider"></div>
                                        <div className='mx-1'>
                                            <button className='form-control btn btn-danger btn' onClick={() => onLogout()}>
                                                <FaSignOutAlt className="mb-1" /> Logout
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                
                            </>
                            : <>
                                <li className='nav-item'>
                                    <NavLink exact to='/register' className='nav-link text-white setBold'>
                                        <BsPersonPlusFill className="mb-1 " /> Register
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact to='/login' className='nav-link text-white setBold' >
                                        <FaSignInAlt className="mb-1" /> Login
                                    </NavLink>
                                </li>
                            </>
                        }</ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
