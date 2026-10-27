import React, { useContext, useState } from 'react'
import Button from '../Layouts/Button'
import Heading3 from '../Layouts/Heading3'
import Heading1 from '../Layouts/Heading1'
import AddStu from './AddStu'
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import {Data} from '../UseContext'
import { FaArrowLeftLong } from "react-icons/fa6";




export default function Student({ studentProccess, sreny, address, phone, name, fname, FName, id, Name, Id, Address, Phone, Sreny, gender, Gender,deleteproccess,editProccess,Update }) {


  let informations = useContext(Data)

  let [searchId,setSearchId] = useState('')
  let [searchName,setSearchName] = useState('')
  let [searchClass,setSearchClass] = useState('')

  let [index,setIndex] = useState('')
  let [Num,setNum] = useState(0)


  let searchid = informations.filter((items,index)=>{
    return items.Id === searchId
  })

  let searchname = informations.filter((items,index)=>{
    return items.Name === searchName
  })

  let searchclass = informations.filter((items,index)=>{
    return items.Sreny === searchClass
  })



  let [search,setsearch] = useState(0)
  let [add, setAdd] = useState(true)

  
  return (
    <>
      <div style={{ width: '92%' }}>

        {
          add === true
            ?
            <>
              <div style={{ width: '105.2%', height: '70px', boxShadow: '10px 0 35px rgba(172, 232, 250, 0.82)', padding: '12px 30px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


                <input type="Search" placeholder='Search by Id' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} onInput={(e)=> setSearchId(e.target.value)}  value={searchId} onChange={()=> setsearch(1)}/>
                
                <input type="Search" placeholder='Search by Name' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} onInput={(e)=> setSearchName(e.target.value)}  value={searchName} onChange={()=> setsearch(2)}/>

                <input type="Search" placeholder='Search by Class' style={{ width: '400px', height: '40px', padding: '12px', fontFamily: 'roboto', fontSize: '16px', borderRadius: '10px', border: 'none', outline: 'none', background: 'rgba(199, 201, 228, 0.4)' }} onInput={(e)=> setSearchClass(e.target.value)}  value={searchClass} onChange={()=> setsearch(3)}/>


              </div>


              <div style={{ width: '100%', padding: '20px ', margin: '10px 2%', borderRadius: '12px', boxShadow: '0 0 25px rgba(165, 174, 248, 0.2)' }}>

                <Heading3 Hea3text='All Students' className='allstudent' />

                <div style={{ background: 'rgba(216, 236, 250, 0.67)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', padding: '6px 0', alignItems: 'center' }}>
                  <Heading3 Hea3text='No' className='firststuH3' />
                  <Heading3 Hea3text='Id' className='firststuH3' />
                  <Heading3 Hea3text='Name' className='firststuH3' />
                  <Heading3 Hea3text='Class' className='firststuH3' />
                  <Heading3 Hea3text='Phone' className='firststuH3' />
                  <Heading3 Hea3text='Address' className='firststuH3' />
                </div>

              
              
              
              
                {

                  search === 0
                  ?informations.map((items, index) => {

                    return (
                      <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} className='studentTable' key={items.Id}>
                        <Heading3 Hea3text={index + 1} className='firststuH3' />
                        <Heading3 Hea3text={items.Id} className='firststuH3' />
                        <Heading3 Hea3text={items.Name} className='firststuH3' />
                        <Heading3 Hea3text={items.Sreny} className='firststuH3' />
                        <Heading3 Hea3text={items.Phone} className='firststuH3' />
                        <Heading3 Hea3text={items.Address} className='firststuH3' />
                        <div className='deletebtn' onClick={()=> deleteproccess(items.Id)}><AiTwotoneDelete /></div>
                        <div className='editbtn' onClick={()=> {
                          editProccess(index)
                          setAdd(false)
                          setIndex(index)
                          setNum(1)
                          }}><MdOutlineEdit /></div>
                      </div>
                    )

                  })
                  
                  :
                    search === 1
                    ?  <div>
                    {
                    searchid.map((items, index) => {
  
                      return (
                        <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} className='studentTable' key={items.Id}>
                          <Heading3 Hea3text={index + 1} className='firststuH3' />
                          <Heading3 Hea3text={items.Id} className='firststuH3' />
                          <Heading3 Hea3text={items.Name} className='firststuH3' />
                          <Heading3 Hea3text={items.Sreny} className='firststuH3' />
                          <Heading3 Hea3text={items.Phone} className='firststuH3' />
                          <Heading3 Hea3text={items.Address} className='firststuH3' />
                          <div className='deletebtn'><AiTwotoneDelete /></div>
                          <div className='editbtn'><MdOutlineEdit /></div>
                        </div>
                      )
  
                    })
                    }
                    <button onClick={()=> setsearch(0)} className='stuFobtn' style={{marginTop:'20px'}}><FaArrowLeftLong style={{verticalAlign:'middle', marginRight:'8px'}}/> Back</button>
                    </div>
                    :
                    search === 2
                    ?  <div>
                    {
                    searchname.map((items, index) => {
  
                      return (
                        <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} className='studentTable' key={items.Id}>
                          <Heading3 Hea3text={index + 1} className='firststuH3' />
                          <Heading3 Hea3text={items.Id} className='firststuH3' />
                          <Heading3 Hea3text={items.Name} className='firststuH3' />
                          <Heading3 Hea3text={items.Sreny} className='firststuH3' />
                          <Heading3 Hea3text={items.Phone} className='firststuH3' />
                          <Heading3 Hea3text={items.Address} className='firststuH3' />
                          <div className='deletebtn'><AiTwotoneDelete /></div>
                          <div className='editbtn'><MdOutlineEdit /></div>
                        </div>
                      )
  
                    })
                    }
                    <button onClick={()=> setsearch(0)} className='stuFobtn' style={{marginTop:'20px'}}><FaArrowLeftLong style={{verticalAlign:'middle', marginRight:'8px'}}/> Back</button>
                    </div>
                    :<div>
                    {
                    searchclass.map((items, index) => {
  
                      return (
                        <div style={{ background: 'rgba(224, 232, 236, 0.53)', height: '40px', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '6px 0', borderTop: '1px solid rgba(233, 222, 222, 0.61)', position: 'relative' }} className='studentTable' key={items.Id}>
                          <Heading3 Hea3text={index + 1} className='firststuH3' />
                          <Heading3 Hea3text={items.Id} className='firststuH3' />
                          <Heading3 Hea3text={items.Name} className='firststuH3' />
                          <Heading3 Hea3text={items.Sreny} className='firststuH3' />
                          <Heading3 Hea3text={items.Phone} className='firststuH3' />
                          <Heading3 Hea3text={items.Address} className='firststuH3' />
                          <div className='deletebtn'><AiTwotoneDelete /></div>
                          <div className='editbtn'><MdOutlineEdit /></div>
                        </div>
                      )
  
                    })
                    }
                    <button onClick={()=> setsearch(0)} className='stuFobtn' style={{marginTop:'20px'}}><FaArrowLeftLong style={{verticalAlign:'middle', marginRight:'8px'}}/> Back</button>
                    </div>
                    
                

               
                }





              </div>
              <Button btnText='+Add' className='addbtn' onclick={() => setAdd(false)} />
            </>
            : <AddStu add={setAdd} name={name} phone={phone} id={id} address={address} sreny={sreny} studentProccess={studentProccess} Name={Name} Id={Id} Phone={Phone} Address={Address} Sreny={Sreny} fname={fname} FName={FName} gender={gender} Gender={Gender} Update= {Update} index={index} Num={Num} setNum = {setNum}/>

        }




      </div>
    </>
  )
}

