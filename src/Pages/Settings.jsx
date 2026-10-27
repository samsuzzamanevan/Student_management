import React, { useContext, useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import Profile from './Profile';
import { Setting } from '../UseContext';


export default function Settings({AdminPro,setAdmin,setImage,admin,image,editUpdate}) {



  let [num, setNum] = useState(0)
  let main = useContext(Setting)
  


  return (
    <>
      {
        num === 0
          ? <div>
            <div style={{ width: '100%', padding: '30px 0', boxShadow: '0 0 25px rgba(172, 227, 255, 0.98)' }}>
              <h1 style={{ fontFamily: 'raleway', fontSize: '30px', fontWeight: '700', color: 'rgba(5, 18, 112, 0.57)', padding: '0 0 0 30px' }}>Settings</h1>
            </div>


            <div style={{ padding: '40px 30px', boxShadow: '0 0 15px rgba(149, 201, 241, 0.77)', margin: ' 30px auto', width: '95%', borderRadius: '12px' }}>
              <h3 style={{ fontFamily: 'raleway', fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>Your Profile</h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '35px' }}>


                <div>
                  <div style={{ display: 'flex', columnGap: '12px', alignItems: 'center' }}>
                    <div style={{ width: '60px', height: '60px',  }}>
                      <img src={main[0]?.Image || ''} alt="" style={{borderRadius: '100%',height:'100%', width:'100%', objectFit:'cover', objectPosition:'center Top'}}/>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'roboto', fontSize: '20px', fontWeight: '500', marginBottom: '5px' }}>Admin</h4>
                      <p style={{ fontFamily: 'roboto', fontSize: '16px', fontWeight: '400' }}>{main[0]?.Admin || ''}</p>
                    </div>
                  </div>
                </div>


                <div>
                  <button style={{ padding: '15px 25px', fontFamily: 'roboto', fontSize: '16px', fontWeight: '500', border: 'none', borderRadius: '8px', background: '#499afcdd', color: 'white', cursor: 'pointer' }} onClick={()=> {
                    setNum(1)
                    editUpdate()
                    }}> <MdModeEdit style={{ verticalAlign: 'middle', marginRight: '8px' }} />Edit Your Profile</button>
                </div>


              </div>


            </div>
          </div>

          :
          <Profile num = {num} setNum={setNum} AdminPro={AdminPro} setAdmin={setAdmin} setImage={setImage} admin={admin} image={image}/>
      }




    </>
  )
}
