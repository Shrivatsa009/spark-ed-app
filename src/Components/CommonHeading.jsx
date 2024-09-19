import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/commonheading.css'
import leftArr from '../images/right_arr.svg'

export default function CommonHeading(props) {
  const navigate = useNavigate();
    const BackClick = () => {
        navigate(-1)
    };
  return (
    <div className='eachPageHdng'>
        <img className='backBtnPic' src={leftArr} alt="Arrow" onClick={BackClick} />
        <p className="eachPgeContntHdr">{props.ContentHeader}</p>
    </div>
  )
}
