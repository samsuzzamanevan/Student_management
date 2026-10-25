import React, { useContext } from 'react'
import Admin from '../assets/Admin.png'
import Images from '../Layouts/Images'
import Heading5 from '../Layouts/Heading5'
import Heading1 from '../Layouts/Heading1'
import Heading3 from '../Layouts/Heading3'
import Peragraph from '../Layouts/Peragraph'
import Span from '../Layouts/Span'
import FirstCard from "../components/FirstCard";
import { IoSchool } from "react-icons/io5";
import {Data, TeacherData} from '../UseContext'








function Home() {

  let data = useContext(Data)
  let teacherData = useContext(TeacherData)

  let male = data.filter((items, index) => {
    return items.Gender == 'male'
  })

  let female = data.filter((items, index) => {
    return items.Gender == 'female'
  })


  return (
    <>
      <div style={{ width: '92%' }}>

        <div style={{ width: '105.2%', height: '70px', boxShadow: '10px 0 35px rgba(172, 232, 250, 0.82)', padding: '12px 30px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: 'rgba(5, 18, 112, 0.57)', height: '40px', fontFamily: 'raleway', fontSize: '30px', padding: '8px 20px' }}>
            <IoSchool style={{ verticalAlign: 'middle', marginRight: '10px', fontSize: '30px' }} />
            Student Management Dashboard</h1>

          <div style={{ display: 'flex', columnGap: '15px', alignItems: 'center' }}>
            <div className='Admin'>
              <Images src={Admin} className='adminImg' />
            </div>
            <div style={{ fontFamily: 'roboto' }}>
              <Heading5 Hea5text='Md.Evan' className='admintext1' />
              <Peragraph pText='Admin' className='admintext2' />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: '40px 0.8%', padding: '50px', border: 'none', borderRadius: '12px' }} className='hobannar'>
          <div>
            <Span spanText='Welcom back,' className='hobaspan' />
            <Heading1 Hea1text='Md.Evan' className='hobaHea1' />
            <Peragraph pText='Here you can manage your students, add new records, and keep everything organized' className='hobaPera' />
          </div>
        </div>

        <div>

          <Heading1 Hea1text='Overview' className='overview' />
          <div style={{ display: 'flex', columnGap: '15px', padding: '10px 20px 20px', width: '105.5%' }}>
            <FirstCard text1=' Students' text2={data.length} text3='Total Student' type='A' />
            <FirstCard text1='Male Students' text2={male.length} text3='Total Male Student' type='B' />
            <FirstCard text1='Female Students' text2={female.length} text3='Total Female Student' type='C' />
            <FirstCard text1='Teachers' text2={teacherData.length} text3='Total Teachers' type='D' />
          </div>
        </div>





        <div style={{ width: '100%', padding: '20px ', margin: '10px 2%', borderRadius: '12px', boxShadow: '0 0 25px rgba(165, 174, 248, 0.2)' }}>
          <Heading3 Hea3text='Student of the year' className='firststu' />
          <div style={{ background: 'rgba(216, 236, 250, 0.67)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', padding: '6px 0', alignItems: 'center' }}>
            <Heading3 Hea3text='No' className='firststuH3' />
            <Heading3 Hea3text='Id' className='firststuH3' />
            <Heading3 Hea3text='Name' className='firststuH3' />
            <Heading3 Hea3text='Class' className='firststuH3' />
            <Heading3 Hea3text='Phone' className='firststuH3' />
            <Heading3 Hea3text='Address' className='firststuH3' />
          </div>
          <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)' }}>
            <Heading3 Hea3text='01' className='firststuH3' />
            <Heading3 Hea3text='1250' className='firststuH3' />
            <Heading3 Hea3text='Md.Evan' className='firststuH3' />
            <Heading3 Hea3text='11' className='firststuH3' />
            <Heading3 Hea3text='01839056885' className='firststuH3' />
            <Heading3 Hea3text='Dhaka' className='firststuH3' />
          </div>
          <div style={{ background: 'rgba(227, 235, 240, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(226, 213, 213, 0.61)' }}>
            <Heading3 Hea3text='01' className='firststuH3' />
            <Heading3 Hea3text='1250' className='firststuH3' />
            <Heading3 Hea3text='Md.Samsuzzaman Evan' className='firststuH3' />
            <Heading3 Hea3text='11' className='firststuH3' />
            <Heading3 Hea3text='01839056885' className='firststuH3' />
            <Heading3 Hea3text='Dhaka' className='firststuH3' />
          </div>
        </div>







      </div>

    </>
  )
}

export default Home
