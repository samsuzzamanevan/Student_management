import React, { useContext, useState } from 'react'
import Heading3 from '../Layouts/Heading3'
import Button from '../Layouts/Button'
import AddTea from './AddTea'
import { TeacherData } from '../UseContext'
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

function Teacher({ teacherProccess, setTeacherAddress, teacherAddress, setTeacherPhone, teacherPhone, setTeacherName, teacherName, setTeacherId, teacherId, teacherGender, setTeacherGender,teaDelete,TeaEdit,TeaUpdate }) {

  let [add, setAdd] = useState(true)

  let teacherData = useContext(TeacherData)

  let [searchid, setSearchid] = useState('')
  let [searchname, setSearchname] = useState('')
  let [searchphone, setSearchphone] = useState('')
  let [num, setNum] = useState(0)
  let [number, setNumber] = useState(0)
  let [index,setIndex] = useState('')


  let searchId = teacherData.filter((items, index) => {
    return items.TeacherID === searchid
  })

  let searchName = teacherData.filter((items, index) => {
    return items.TeacherName === searchname
  })

  let searchPhone = teacherData.filter((items, index) => {
    return items.TeacherPhone === searchphone
  })




  return (
    <>
      <div style={{ width: '92%' }}>

        {
          add === true
            ?


            <>
              <div style={{ width: '105.2%', height: '70px', boxShadow: '10px 0 35px rgba(172, 232, 250, 0.82)', padding: '12px 30px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


                <input type="Search" placeholder='Search by Id' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} onChange={(e) => setSearchid(e.target.value)} onInput={() => setNum(1)} />
                <input type="Search" placeholder='Search by Name' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} onChange={(e) => setSearchname(e.target.value)} onInput={() => setNum(2)}/>
                <input type="Search" placeholder='Search by Phone Number' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} onChange={(e) => setSearchphone(e.target.value)} onInput={() => setNum(3)}/>


              </div>

              <div style={{ width: '100%', padding: '20px ', margin: '10px 2%', borderRadius: '12px', boxShadow: '0 0 25px rgba(165, 174, 248, 0.2)' }}>

                <Heading3 Hea3text='All Teachers' className='allstudent' />

                <div style={{ background: 'rgba(216, 236, 250, 0.67)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', padding: '6px 0', alignItems: 'center' }}>
                  <Heading3 Hea3text='No' className='firststuH3' />
                  <Heading3 Hea3text='Id' className='firststuH3' />
                  <Heading3 Hea3text='Name' className='firststuH3' />
                  <Heading3 Hea3text='Phone' className='firststuH3' />
                  <Heading3 Hea3text='Address' className='firststuH3' />
                </div>

                {
                  num === 0
                    ?

                    teacherData.map((itmes, index) => {
                      return (
                        <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} key={itmes.TeacherID} className='studentTable'>
                          <Heading3 Hea3text={index + 1} className='firststuH3' />
                          <Heading3 Hea3text={itmes.TeacherID} className='firststuH3' />
                          <Heading3 Hea3text={itmes.TeacherName} className='firststuH3' />
                          <Heading3 Hea3text={itmes.TeacherPhone} className='firststuH3' />
                          <Heading3 Hea3text={itmes.TeacherAddress} className='firststuH3' />
                          <div className='deletebtn' onClick={()=> teaDelete(index)}><AiTwotoneDelete /></div>
                          <div className='editbtn' onClick={()=> {
                            TeaEdit(index)
                            setAdd(false)
                            setNumber(1)
                            setIndex(index)
                            }}><MdOutlineEdit /></div>
                        </div>
                      )
                    })

                    :
                    num === 1
                    ?
                    <div>

                    {
                      searchId.map((itmes, index) => {
                        return (
                          <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} key={itmes.TeacherID} className='studentTable'>
                            <Heading3 Hea3text={index + 1} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherID} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherName} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherPhone} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherAddress} className='firststuH3' />
                            <div className='deletebtn'><AiTwotoneDelete /></div>
                            <div className='editbtn'><MdOutlineEdit /></div>
                          </div>
                        )
                      })
                    }
                    <button onClick={() => setNum(0)} className='stuFobtn' style={{ marginTop: '20px' }}><FaArrowLeftLong style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Back</button>
                  </div>
                    :
                    num === 2
                    ?<div>

                    {
                      searchName.map((itmes, index) => {
                        return (
                          <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} key={itmes.TeacherID} className='studentTable'>
                            <Heading3 Hea3text={index + 1} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherID} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherName} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherPhone} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherAddress} className='firststuH3' />
                            <div className='deletebtn'><AiTwotoneDelete /></div>
                            <div className='editbtn'><MdOutlineEdit /></div>
                          </div>
                        )
                      })
                    }
                    <button onClick={() => setNum(0)} className='stuFobtn' style={{ marginTop: '20px' }}><FaArrowLeftLong style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Back</button>
                  </div>
                    :
                    <div>

                    {
                      searchPhone.map((itmes, index) => {
                        return (
                          <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} key={itmes.TeacherID} className='studentTable'>
                            <Heading3 Hea3text={index + 1} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherID} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherName} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherPhone} className='firststuH3' />
                            <Heading3 Hea3text={itmes.TeacherAddress} className='firststuH3' />
                            <div className='deletebtn'><AiTwotoneDelete /></div>
                            <div className='editbtn'><MdOutlineEdit /></div>
                          </div>
                        )
                      })
                    }
                    <button onClick={() => setNum(0)} className='stuFobtn' style={{ marginTop: '20px' }}><FaArrowLeftLong style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Back</button>
                  </div>
                 
                  
                }


            </div>

        <Button btnText='+Add' className='addbtn' onclick={() => setAdd(false)} />

      </>




      : <AddTea add={setAdd}
        teacherProccess={teacherProccess}
        setTeacherAddress={setTeacherAddress}
        teacherAddress={teacherAddress}
        setTeacherPhone={setTeacherPhone}
        teacherPhone={teacherPhone}
        setTeacherName={setTeacherName}
        teacherName={teacherName}
        setTeacherId={setTeacherId}
        teacherId={teacherId}
        teacherGender={teacherGender}
        setTeacherGender={setTeacherGender}
        number = {number}
        setNumber = {setNumber}
        TeaUpdate={TeaUpdate}
        index={index}
      />

        }

    </div >
    </>
  )
}

export default Teacher
