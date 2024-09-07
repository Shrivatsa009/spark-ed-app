import React from 'react'
import timeTable from '../images/time_tbl.svg'
import markAttendance from '../images/mark.svg'
import studentProfile from '../images/stu_prof.svg'
import myprofile from '../images/my_prof.svg'
import community from '../images/community.svg'
import contactSup from '../images/support.svg'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SearchBar from './SearchBar'

export default function HomePage() {
  return (
    <div className='homePgWrappr'>
        <h3 className="schoolName">National Public School</h3>
        {/* <div className="searchbox">
            <img src="#" alt="Search Icon" />
            <input className='searchInp' type="text" name="" id="" placeholder='Search' />
        </div> */}
        <SearchBar />
        <p className="commonFntSz tchrNameWthHlo">Hello <span className="tchrNameParaTxt">Teacher's Name</span> </p>
        <div className='dtlsInfrmtnCrdPar'>
            <Link className='echDtlCrd' to="/mytimetable">
                <img src={timeTable} alt="Time Table" />
                <p className="timeTblBtnTxt">My Time Table</p>
            </Link>
            <Link className='echDtlCrd' to="/markattendance">
                <img src={markAttendance} alt="Attendance" />
                <p className="timeTblBtnTxt">Mark Attendance</p>
            </Link>
            <Link className='echDtlCrd' to="/studentprofile">
                <img src={studentProfile} alt="Std Profile" />
                <p className="timeTblBtnTxt">Student Profile</p>
            </Link>
            <Link className='echDtlCrd' to="/myprofile">
                <img src={myprofile} alt="profile" />
                <p className="timeTblBtnTxt">My Profile</p>
            </Link>
            <Link className='echDtlCrd' to="/community">
                <img src={community} alt="Time Table" />
                <p className="timeTblBtnTxt">Community</p>
            </Link>
            <Link className='echDtlCrd' to="/contactsupport">
                <img src={contactSup} alt="Time Table" />
                <p className="timeTblBtnTxt">Contact Support</p>
            </Link>
        </div>            
    </div>
  )
}
