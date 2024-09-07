import React from 'react'
import CommonHeading from './CommonHeading'
import '../styles/markAttendce.css'
import { Link } from 'react-router-dom'
import myProfile from '../images/my_prof.svg'
import editIcon from '../images/edit.svg'

export default function MarkAttendance() {
  return (
    <div className='mrkAttdnceWrppr'>
        <CommonHeading ContentHeader="Mark Attendance" />
        <div className="mrkAtdnceContnt">
            <div className="teacherDtls">
                <div className="teacherProf">
                    <img src={myProfile} alt="profile Pic" />
                </div>
                <div className="teacherName">
                    <span className="tchrNameTxt">Teacher's name</span>
                    <span className="tchrNameTxt tchrNameTxtSub">Maths, English</span>
                </div>
            </div>
            <div className="stdNameAttendcePar">
                <div className="stdNameAttdnce">
                    <div className="frstPrd stdAttdnceMxWdth">
                        <span className="commonFntSz">4th std, C sec</span>
                    </div>
                    <Link to="/markattendance/attendance" className="markAttendPic">
                        <img src={editIcon} alt="Attendance" />
                    </Link>
                </div>
                <div className="stdNameAttdnce">
                    <div className="frstPrd stdAttdnceMxWdth">
                        <span className="commonFntSz">4th std, C sec</span>
                    </div>
                    <button className="markAttendPic">
                        <img src={editIcon} alt="Attendance" />
                    </button>
                </div>
                <div className="stdNameAttdnce">
                    <div className="frstPrd stdAttdnceMxWdth">
                        <span className="commonFntSz">4th std, C sec</span>
                    </div>
                    <button className="markAttendPic">
                        <img src={editIcon} alt="Attendance" />
                    </button>
                </div>
                <div className="stdNameAttdnce">
                    <div className="frstPrd stdAttdnceMxWdth">
                        <span className="commonFntSz">4th std, C sec</span>
                    </div>
                    <button className="markAttendPic">
                        <img src={editIcon} alt="Attendance" />
                    </button>
                </div>
                <div className="stdNameAttdnce">
                    <div className="frstPrd stdAttdnceMxWdth">
                        <span className="commonFntSz">4th std, C sec</span>
                    </div>
                    <button className="markAttendPic">
                        <img src={editIcon} alt="Attendance" />
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
