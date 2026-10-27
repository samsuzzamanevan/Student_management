import React, { useEffect, useState } from 'react'
import './index.css'
import Home from './Pages/Home'
import Student from './Pages/Student'
import Teacher from './Pages/Teacher'
import Settings from './Pages/Settings'
import UnorderedList from './Layouts/UnorderedList'
import Heading5 from './Layouts/Heading5'
import Addstu from './Pages/AddStu'
import { Data, Setting, TeacherData } from './UseContext'





function Pages() {


    let [main, setMain] = useState(
        JSON.parse(localStorage.getItem('main')) || []
    )


    useEffect(() => {
        localStorage.setItem('main', JSON.stringify(main))
    }, [main])


    let [image, setImage] = useState(null)
    let [admin, setAdmin] = useState('')

    function changeImg(e){
        let file = e.target.files[0]
        if(file){
            let reader = new FileReader();

            reader.onload = () => {
                setImage(reader.result);
            };
    
            reader.readAsDataURL(file);
        }
    }



    function AdminPro() {
        setMain((oldvalue) => {
            let newvalue = [{
                Image: image,
                Admin: admin
            }]
            return newvalue
        })
        setAdmin('')
        setImage('')
    }



    function editUpdate(){
        setAdmin(()=>{
            return main[0]?.Admin || ''
        })
        setImage(()=>{
            return main[0]?.Image || ''
        })
    }




    let [info, setInfo] = useState(
        JSON.parse(localStorage.getItem('info')) || []
    )

    let [name, setName] = useState('')
    let [Fname, setFname] = useState('')
    let [id, setId] = useState('')
    let [phone, setPhone] = useState('')
    let [gender, setGender] = useState('')
    let [address, setAddress] = useState('')
    let [sreny, setSreny] = useState('')



    useEffect(() => {
        localStorage.setItem('info', JSON.stringify(info))
    }, [info])




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








    let [teacher, setTeacher] = useState(
        JSON.parse(localStorage.getItem('teacher')) || []
    )

    useEffect(() => {
        localStorage.setItem('teacher', (JSON.stringify(teacher)))
    }, [teacher])

    let [teacherId, setTeacherId] = useState('')
    let [teacherName, setTeacherName] = useState('')
    let [teacherPhone, setTeacherPhone] = useState('')
    let [teacherAddress, setTeacherAddress] = useState('')
    let [teacherGender, setTeacherGender] = useState('')




    function teacherProccess() {
        if (teacherId === '' || teacherName === '' || teacherPhone === '' || teacherAddress === '' || teacherGender === '') {
            return
        }
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
            return oldvalue.map((itmes, index) => {
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




    function teaDelete(inde) {
        setTeacher((oldvalue) => {
            let newvalue = oldvalue.filter((items, index) => {
                return index !== inde
            })
            return newvalue
        })
    }




    function TeaEdit(inde) {
        setTeacherName(() => {
            return teacher[inde].TeacherName
        })
        setTeacherAddress(() => {
            return teacher[inde].TeacherAddress
        })
        setTeacherGender(() => {
            return teacher[inde].TeacherGender
        })
        setTeacherPhone(() => {
            return teacher[inde].TeacherPhone
        })
        setTeacherId(() => {
            return teacher[inde].TeacherID
        })
    }



    function TeaUpdate(inde) {
        setTeacher((oldvalue) => {
            let newvalue = oldvalue.map((itmes, index) => {
                if (inde === index) {
                    return {
                        ...itmes,
                        TeacherGender: teacherGender,
                        TeacherAddress: teacherAddress,
                        TeacherPhone: teacherPhone,
                        TeacherName: teacherName,
                        TeacherID: teacherId
                    }
                    return itmes
                }
            })
            return newvalue
        }
        )

        setTeacherAddress('')
        setTeacherName('')
        setTeacherId('')
        setTeacherPhone('')
        setTeacherGender('')
    }








    let pages = [<Home />,
    <Student name={setName} id={setId} phone={setPhone} fname={setFname} address={setAddress} sreny={setSreny} studentProccess={studentProccess} Name={name} FName={Fname} Id={id} Phone={phone} Address={address} Sreny={sreny} gender={setGender} Gender={gender} deleteproccess={deleteproccess} editProccess={editProccess} Update={Update} />,
    <Teacher teacherProccess={teacherProccess} setTeacherId={setTeacherId} teacherId={teacherId} setTeacherName={setTeacherName} teacherName={teacherName} setTeacherPhone={setTeacherPhone} teacherPhone={teacherPhone} setTeacherAddress={setTeacherAddress} teacherAddress={teacherAddress} teacherGender={teacherGender} setTeacherGender={setTeacherGender} teaDelete={teaDelete} TeaEdit={TeaEdit} TeaUpdate={TeaUpdate} />,
    <Settings AdminPro={AdminPro} setAdmin={setAdmin} setImage={changeImg} admin={admin} image={image} editUpdate={editUpdate}/>]
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
                            <Setting.Provider value={main}>
                                {pages[page]}
                            </Setting.Provider>
                        </Data.Provider>
                    </TeacherData.Provider>


                </div>

            </div>

        </>
    )
}

export default Pages

