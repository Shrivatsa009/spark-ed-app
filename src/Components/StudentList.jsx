import React from 'react'
import CommonHeading from './CommonHeading'
import '../styles/studentList.css'
import SearchBar from './SearchBar'
import studentListProf from '../images/stu_list_prof.svg'

export default function StudentList() {
  return (
    <div className='studentListWrppr'>
        <CommonHeading ContentHeader='4th std, C sec' />
        {/* <div className="searchbox">
            <img src="#" alt="Search Icon" />
            <input className='searchInp' type="text" name="" id="" placeholder='Search' />
        </div> */}
        <SearchBar />
        <div className="stdListTbleWrpr">
            <table className='clsStdListTbl'>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>View Profile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>05</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>06</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>07</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>08</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>04</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>05</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>06</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>07</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                    <tr>
                        <td>08</td>
                        <td>Name</td>
                        <td><img src={studentListProf} alt="profile" /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}
