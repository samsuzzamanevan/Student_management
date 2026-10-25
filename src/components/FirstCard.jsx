import React from 'react'
import { IoMaleSharp } from "react-icons/io5";
import { IoMdFemale } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import Heading1 from '../Layouts/Heading1';
import Heading5 from '../Layouts/Heading5';
import Span from '../Layouts/Span';


function FirstCard({text1,text2,text3,type}) {
  return (
    <>
        <div style={{ height: '150px', width: '23%', background: 'white', border: '1px solid rgba(175, 218, 233, 0.82)', borderRadius: '12px', boxShadow: '0 0 35px rgba(123, 198, 241, 0.38)',display:'flex', padding:'50px 0 0 50px', columnGap:'25px' }}>
            <div>
              {
                type === 'A'
                ?<HiUserGroup style={{ fontSize: '30px', fontWeight: '700', color: 'rgba(39, 9, 172, 0.56)', padding: '12px', background: 'rgba(115, 124, 243, 0.56)', borderRadius: '12px' }} />
                :type === 'B'
                ?<IoMaleSharp style={{ fontSize: '30px', fontWeight: '700', color: 'green', padding: '12px', background: 'rgba(201, 235, 203, 0.56)', borderRadius: '12px' }} />
                :type === 'C'
                ?<IoMdFemale style={{ fontSize: '30px', fontWeight: '700', color: 'rgba(119, 5, 119, 0.56)', padding: '12px', background: 'rgba(235, 201, 235, 0.56)', borderRadius: '12px' }} />
                :<PiChalkboardTeacherFill style={{ fontSize: '30px', fontWeight: '700', color: 'rgba(6, 41, 124, 0.56)', padding: '12px', background: 'rgba(189, 206, 238, 0.56)', borderRadius: '12px' }}/>
              }
            </div>
            <div>
              <Heading5 Hea5text={text1} className='frcardHea5'/>
              <Heading1 Hea1text={text2} className= 'frcardHea1'/>
              <Span spanText={text3} className='frcardSpan'/>
            </div>
          </div>
    </>
  )
}

export default FirstCard
