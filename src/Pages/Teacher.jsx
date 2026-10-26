import React, { useContext, useState } from 'react'
import Heading3 from '../Layouts/Heading3'
import Button from '../Layouts/Button'
import AddTea from './AddTea'
import { TeacherData } from '../UseContext'

function Teacher({ teacherProccess, setTeacherAddress, teacherAddress, setTeacherPhone, teacherPhone, setTeacherName, teacherName, setTeacherId, teacherId,teacherGender,setTeacherGender }) {

  let [add, setAdd] = useState(true)

  let teacherData = useContext(TeacherData)
 


  return (
    <>
      <div style={{ width: '92%' }}>

        {
          add === true
            ?


            <>
              <div style={{ width: '105.2%', height: '70px', boxShadow: '10px 0 35px rgba(172, 232, 250, 0.82)', padding: '12px 30px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


                <input type="Search" placeholder='Search by Id' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} />
                <input type="Search" placeholder='Search by Name' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} />
                <input type="Search" placeholder='Search by Class' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} />


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
                  teacherData.map((itmes, index) => {
                    return (
                      <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)' }} key={itmes.TeacherID}>
                        <Heading3 Hea3text={index+1} className='firststuH3' />
                        <Heading3 Hea3text={itmes.TeacherID} className='firststuH3' />
                        <Heading3 Hea3text={itmes.TeacherName} className='firststuH3' />
                        <Heading3 Hea3text={itmes.TeacherPhone} className='firststuH3' />
                        <Heading3 Hea3text={itmes.TeacherAddress}className='firststuH3' />
                      </div>
                    )
                  })
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
            />

        }

      </div>
    </>
  )
}

export default Teacher
