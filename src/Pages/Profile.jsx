import React, { useState } from 'react'

function Profile({num,setNum,AdminPro,setAdmin,setImage,admin,image}) {
   



  return (
    <>
      <div style={{width:'500px', boxShadow:'0 0 25px rgba(0,0,0,0.2)', borderRadius:'12px' , display:'flex', flexDirection:'column', alignItems:'center', rowGap:'50px', padding:'50px', margin:'100px auto'}}>

            <div style={{height:'150px', width:'150px'}}>
                <img src={image} alt="" style={{width:'100%', height:'100%', borderRadius:'100%', objectFit:"cover", objectPosition:'center Top'}}/>
            </div>

           <div style={{margin:'30px 0 0'}}>
            <label htmlFor="Name" style={{fontFamily:'roboto', fontSize:'16px', fontWeight:'400', width:'80px', display:'inline-block'}}>Name : </label>
           <input type="text" name='name' style={{width:'300px', height:'30px', fontSize:'16px', padding:'8px 15px', border:'none', outline:'none', boxShadow:'0 0 25px rgba(146, 197, 208, 0.52)', borderRadius:'12px' }} id='Name' placeholder='Write Your Name' 
            onChange={(e)=> setAdmin(e.target.value) }
            value={admin}
           />
           </div>

           <div >
            <label htmlFor="image" style={{padding:'12px 30px', background:"#c1e1fbd9", color:'#1c2929', fontFamily:'roboto', fontSize:'16px', fontWeight:'400', borderRadius:'50px', cursor:'pointer'}}>Choose a Photo</label>
           <input type="file" name='image' id='image' style={{display:'none'}}
            onChange={setImage}
           />
           </div>



            <div style={{alignSelf:'end'}}>
            <button style={{ padding:'10px 20px', border:"none", fontFamily:'roboto', fontSize:'16px', fontWeight:'400', background:'#cfeef0', borderRadius:'6px', color:'#29373a', cursor:'pointer', margin:'0 10px 0 0'}} onClick={()=> setNum(0)}>Cencel</button>
            <button style={{ padding:'10px 20px', border:"none", fontFamily:'roboto', fontSize:'16px', fontWeight:'400', background:'#cfeef0', borderRadius:'6px', color:'#29373a', cursor:'pointer'}} onClick={()=>{
                AdminPro()
                setNum(0)
            }}>Submit</button>
            </div>

      </div>
    </>
  )
}

export default Profile
