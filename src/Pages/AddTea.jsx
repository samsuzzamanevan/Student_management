import React from 'react'
import Button from '../Layouts/Button'
import Heading1 from '../Layouts/Heading1'

function AddTea({add,teacherProccess,setTeacherAddress,teacherAddress,setTeacherPhone,teacherPhone,setTeacherName,teacherName,setTeacherId,teacherId}) {
  return (
    <>
                  <div style={{ width: '550px', boxShadow: '0 0 15px rgba(182, 222, 245, 0.75)', margin: '50px auto', padding: '50px', borderRadius: '12px' }}>
                <Heading1 Hea1text='Teacher Input Field' className='stuFoHea1' />

                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '35px', padding: '50px 20px' }}>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Name : </label>
                        <input type="text" name='name' id='name' placeholder='Name' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }}  onChange={(e)=> setTeacherName(e.target.value)} value={teacherName}/>
                    </div>

                    





                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>ID No : </label>
                        <input type="text" name='name' id='name' placeholder='ID No' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e)=> setTeacherId(e.target.value)} value={teacherId}/>
                    </div>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Address : </label>
                        <input type="text" name='name' id='name' placeholder='Address' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e)=> setTeacherAddress(e.target.value)} value={teacherAddress} maxLength={10}/>
                    </div>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Phone : </label>
                        <input type="tel" name='name' id='name' placeholder='Phone Number' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e)=> setTeacherPhone(e.target.value)} value={teacherPhone}/>
                    </div>
                   
                    <div style={{ textAlign: 'center', marginTop: '18px' }}>
                        <Button btnText='Back' className='stuFobtn' onclick={()=> add(true)}/>
                        <Button btnText='Save' className='stuFobtn' onclick={()=> teacherProccess()}/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AddTea
