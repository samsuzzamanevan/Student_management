import React from 'react'
import Heading1 from '../Layouts/Heading1'
import Button from '../Layouts/Button'

function AddStu({ add, studentProccess, sreny, address, phone, name, fname, id, Id, Name, FName, Sreny, Address, Phone, gender, Gender }) {

    return (
        <>
            <div style={{ width: '550px', boxShadow: '0 0 15px rgba(182, 222, 245, 0.75)', margin: '50px auto', padding: '50px', borderRadius: '12px' }}>
                <Heading1 Hea1text='Student Input Field' className='stuFoHea1' />

                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '35px', padding: '50px 20px' }}>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Name : </label>
                        <input type="text" name='name' id='name' placeholder='Name' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => name(e.target.value)} value={Name} required />
                    </div>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Father's Name : </label>
                        <input type="text" name='name' id='name' placeholder="Father's Name" style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => fname(e.target.value)} value={FName} />
                    </div>



                    <div>
                        <label htmlFor="gender" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Gender : </label>
                        <select name="" id="gender" style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '370px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => gender(e.target.value)}>
                            <option value="">Gender</option>
                            <option value={`male`} >Male</option>
                            <option value={`female`}>Female</option>
                        </select>
                    </div>




                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>ID No : </label>
                        <input type="text" name='name' id='name' placeholder='ID No' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => id(e.target.value)} value={Id} required />
                    </div>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Address : </label>
                        <input type="text" name='name' id='name' placeholder='Address' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => address(e.target.value)} maxLength={10} value={Address} required />
                    </div>

                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Phone : </label>
                        <input type="tel" name='name' id='name' placeholder='Phone Number' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => phone(e.target.value)} value={Phone} required />
                    </div>
                    <div>
                        <label htmlFor="name" style={{ fontSize: '16px', fontFamily: 'roboto', width: '130px', display: 'inline-block' }}>Class : </label>
                        <input type="number" name='name' id='name' placeholder='Class' style={{ fontSize: '16px', fontFamily: 'roboto', padding: '12px 8px 12px 10px', width: '350px', border: 'none', outline: 'none', boxShadow: '0 0 15px rgba(146, 171, 207, 0.68)', borderRadius: '10px' }} onChange={(e) => sreny(e.target.value)} value={Sreny} required />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '18px' }}>
                        <Button btnText='Back' className='stuFobtn' onclick={() => add(true)} />
                        <Button btnText='Save' className='stuFobtn' onclick={() => studentProccess()} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStu
