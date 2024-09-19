import React from 'react'
import CommonHeading from './CommonHeading'
import '../styles/attendancePg.css'
import CommonBtn from './CommonBtn'
import right_arrWht from '../images/rht_arr_wht.svg'
import { Link } from 'react-router-dom'

export default function AttendancePage() {
  return (
    <div className='attendancePgWrrpr'>
        <div className="attndcPgContPar">
            <CommonHeading ContentHeader="4th std, C sec" />
            <div className="attPgMainContainer">
                <div className="attndcPgContntPar">
                    <Link to="myCalendar" className="dvCalendar mrkAttndceClndr">
                        <span className="commonFntSz">9th Mar 2024</span>
                        <img src={right_arrWht} alt="right icon" />
                    </Link>
                    {/* <CalendarDv /> */}
                    <div className="tbleMainWrppr">
                        <div className="tblHdng">
                            <p>Sl.No</p>
                            <p>Name</p>
                            <p>Mark Attendance</p>
                        </div>
                        <div className="tblBdyContntPar">
                            <div className="tblHdng tblpara">
                                <p>01</p>
                                <p>Name</p>
                                {/* <p>Mark Attendance</p> */}
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>02</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>03</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>04</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>05</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>06</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>07</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>08</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>09</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>10</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>11</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>12</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>13</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                            <div className="tblHdng tblpara">
                                <p>14</p>
                                <p>Name</p>
                                <p className='chckmarksFrAttndce'>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="greenChck">&#10004;</span>
                                    </label>
                                    <label className="attChckPar">
                                        <input type="checkbox" className="hidden-checkbox" />
                                        <span className="redChck">&#10006;</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="attPgFtrBtnPar">
                    <CommonBtn title="Save Attendance" />
                </div>
            </div>
        </div>
    </div>
  )
}
