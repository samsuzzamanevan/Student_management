import React, { useEffect, useState } from 'react'
import './index.css'
import Home from './Pages/Home'
import Student from './Pages/Student'
import Teacher from './Pages/Teacher'
import Settings from './Pages/Settings'
import UnorderedList from './Layouts/UnorderedList'
import Heading5 from './Layouts/Heading5'
import Addstu from './Pages/AddStu'
import { Data, TeacherData } from './UseContext'





function Pages() {






    let [info, setInfo] = useState([])
    let [name, setName] = useState('')
    let [Fname, setFname] = useState('')
    let [id, setId] = useState('')
    let [phone, setPhone] = useState('')
    let [gender, setGender] = useState('')
    let [address, setAddress] = useState('')
    let [sreny, setSreny] = useState('')







    function studentProccess() {

        if (name === '' || id === '' || phone === '' || address === '' || sreny === '' || Fname === '') {
            return
        }

        setInfo(oldvalue => {
            let newvalue = [...oldvalue, {
                Name: name,
                FName: Fname,
                Id: id,
                Phone: phone,
                Gender: gender,
                Address: address,
                Sreny: sreny
            }]
            return newvalue
        })
        setName('')
        setFname('')
        setId('')
        setPhone('')
        setAddress('')
        setSreny('')
    }








    let [teacher, setTeacher] = useState([])

    let [teacherId, setTeacherId] = useState('')
    let [teacherName, setTeacherName] = useState('')
    let [teacherPhone, setTeacherPhone] = useState('')
    let [teacherAddress, setTeacherAddress] = useState('')
    let [teacherGender, setTeacherGender] = useState('')




    function teacherProccess() {
        setTeacher(oldvalue => {
            let newvalue = [...oldvalue, {
                TeacherID: teacherId,
                TeacherName: teacherName,
                TeacherPhone: teacherPhone,
                TeacherAddress: teacherAddress,
                TeacherGender: teacherGender
            }]
            return newvalue
        })

        setTeacherAddress('')
        setTeacherName('')
        setTeacherId('')
        setTeacherPhone('')
        setTeacherGender('')

    }



    function deleteproccess(id) {
        setInfo((oldvalue) => {
            return oldvalue.filter((items, index) => {
                return id !== items.Id
            })
        })
    }



    function Update(i) {
        setInfo((oldvalue) => {
         return   oldvalue.map((itmes, index) => {
                if (i === index) {
                    return {
                        ...itmes,
                        Name: name,
                        FName: Fname,
                        Id: id,
                        Phone: phone,
                        Gender: gender,
                        Address: address,
                        Sreny: sreny
                    }
                }
                return itmes
            })
        }
        )
        setName('')
        setFname('')
        setId('')
        setPhone('')
        setAddress('')
        setSreny('')
    }


    function editProccess(id) {
        setName(() => {
            return info[id].Name
        })
        setFname(() => {
            return info[id].FName
        })
        setId(() => {
            return info[id].Id
        })
        setPhone(() => {
            return info[id].Phone
        })
        setGender(() => {
            return info[id].Gender
        })
        setAddress(() => {
            return info[id].Address
        })
        setSreny(() => {
            return info[id].Sreny
        })
    }




    let pages = [<Home />,
    <Student name={setName} id={setId} phone={setPhone} fname={setFname} address={setAddress} sreny={setSreny} studentProccess={studentProccess} Name={name} FName={Fname} Id={id} Phone={phone} Address={address} Sreny={sreny} gender={setGender} Gender={gender} deleteproccess={deleteproccess} editProccess={editProccess} Update={Update} />,
    <Teacher teacherProccess={teacherProccess} setTeacherId={setTeacherId} teacherId={teacherId} setTeacherName={setTeacherName} teacherName={teacherName} setTeacherPhone={setTeacherPhone} teacherPhone={teacherPhone} setTeacherAddress={setTeacherAddress} teacherAddress={teacherAddress} teacherGender={teacherGender} setTeacherGender={setTeacherGender} />,
    <Settings />]
    let [page, setPage] = useState(0)



    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '16%', height: '96vh', background: 'white', boxShadow: '0 0 25px rgba(113, 210, 255, 0.2)', borderRadius: '8px', padding: '12px' }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '35px', fontFamily: 'roboto', fontSize: '20px', fontWeight: '600px' }}>
                        <Heading5 Hea5text='Student Management' className='SideH5' />
                        <UnorderedList ListText='Home' className='SideLi' onclick={() => setPage(0)} />
                        <UnorderedList ListText='Students' className='SideLi' onclick={() => setPage(1)} />
                        <UnorderedList ListText='Teachers' className='SideLi' onclick={() => setPage(2)} />
                        <UnorderedList ListText='Settings' className='SideLi' onclick={() => setPage(3)} />
                    </ul>
                </div>

                <div style={{ width: '84%' }}>

                    <TeacherData.Provider value={teacher}>
                        <Data.Provider value={info}>
                            {pages[page]}
                        </Data.Provider>
                    </TeacherData.Provider>


                </div>

            </div>

        </>
    )
}

export default Pages

