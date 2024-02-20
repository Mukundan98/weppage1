"use client"
import React, { useEffect, useState } from 'react'

function page() {
  const [Mail,setMail]=useState("");
  const [Remarks,setRemarks]=useState("");

  const submit= () => {
    console.log("submitted");
    alert(`success £ Email:${Mail} £ Remark:${Remarks}`)
    setRemarks("");
    setMail("");
    }


  return (
    <>
    <h1>contact us</h1>
    <div>
    <label>Email</label>
    <input value={Mail} onChange={(e:any)=> setMail (e.target.value)}/>
    <label>Remarks</label>
    <input type='text' value= {Remarks} onChange={(e:any)=> setRemarks (e.target.value)}/>
    <button style={{ backgroundColor: 'green', color: 'white' }} onClick={submit}>submit</button>
 </div>
</>
  )
  }

export default page

