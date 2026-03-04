import React from 'react'

export default function AboutMe() {
  return (
    <main style={{fontFamily:"Arial", background:"#f5f5f5", minHeight:"100vh", padding:"60px 20px"}}>
      <div style={{background:"white", maxWidth:"600px", margin:"0 auto", padding:"50px", borderRadius:"12px", boxShadow:"0 2px 15px rgba(0,0,0,0.1)"}}>

        <img
          src="/profile.png"
          alt="Jeffrey Collins"
          style={{width:"150px", height:"150px", borderRadius:"50%", objectFit:"cover", display:"block", margin:"0 auto 20px", boxShadow:"0 0 0 5px #222, 0 0 20px rgba(0,0,0,0.4)"}}
        />

        <h1 style={{color:"#2c3e50", marginBottom:"4px", textAlign:"center"}}>Jeffrey Collins</h1>
        <p style={{color:"#3498db", fontWeight:"bold", fontSize:"18px", marginTop:"0", textAlign:"center"}}>🩺 Registered Nurse (RN)</p>
        <hr style={{border:"1px solid #eee", margin:"20px 0"}} />

        <h2 style={{color:"#2c3e50"}}>About Me</h2>
<p style={{color:"#555", lineHeight:"1.8"}}>
  I am Jeffrey Collins, a general nurse with a strong commitment to
  patient-centered care. I thrive in fast-paced environments and I am passionate
  about combining modern healthcare technology with genuine human compassion.
  Outside of healthcare, I enjoy staying updated on medical advancements and
  advocating for free and accessible healthcare for all Filipinos.
</p>

        <h2 style={{color:"#2c3e50"}}>Details</h2>
        <p style={{color:"#555"}}>📍 Location: Little Saint James</p>
        <p style={{color:"#555"}}>💼 Profession: Registered Nurse (RN)</p>
        <p style={{color:"#555"}}>🏥 Specialization: General Nursing</p>

        <hr style={{border:"1px solid #eee", margin:"30px 0"}} />

        <h2 style={{color:"#2c3e50"}}>📬 Contact</h2>
        <p style={{color:"#555", lineHeight:"2"}}>📧 jeffreycollins511@email.com </p>
        <p style={{color:"#555", lineHeight:"2"}}>🔵 LinkedIn: linkedin.com/in/JeffreyCollins</p>
        <p style={{color:"#555", lineHeight:"2"}}>📘 Facebook: facebook.com/JeffreyCollins511</p>
        <p style={{color:"#555", lineHeight:"2"}}>📸 Instagram: @jeffrey.collin511 </p>
        
<div style={{background:"#ffeeba", padding:"20px", borderRadius:"10px", marginTop:"20px"}}>
  <h3 style={{color:"#856404", margin:"0 0 10px"}}>⚠️ Disclaimer on Responsible Communication</h3>
  <p style={{color:"#856404", lineHeight:"1.8", margin:"0 0 10px", fontSize:"13px"}}>
    All contact information on this page is for educational purposes only and does
    not represent a real professional account.
     </p>
</div>
      </div>
    </main>
  )
}
