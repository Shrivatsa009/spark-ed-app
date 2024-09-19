import React from 'react'
import { Link } from 'react-router-dom'
import CommonHeading from './CommonHeading'
import '../styles/studentProf.css'
import SearchBar from './SearchBar'
import rightArrWht from '../images/rht_arr_wht.svg'

export default function StudentProfile() {
  return (
    <div className='studentprofWrppr'>
        <CommonHeading ContentHeader="Student Profile" /> 
        <div className="stuProfContntWrpr">
            <SearchBar />
            <div className="studprofStdNamePar">
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">4th std, C sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">5th std, A sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">6th std, A sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">6th std, C sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">7th std, A sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
            </div>
        </div>
    </div>
  )
}
