import React from 'react'

export default function Home() {
  return (
    <main style={{fontFamily:"Arial", background:"#f5f5f5", minHeight:"100vh", padding:"60px 20px"}}>

      {/* Hero Section */}
      <div style={{background:"#2c3e50", maxWidth:"700px", margin:"0 auto", padding:"60px 50px", borderRadius:"12px", textAlign:"center", boxShadow:"0 2px 15px rgba(0,0,0,0.2)"}}>
        <img
          src="/profile.png"
          alt="Jeffrey Collins"
          style={{width:"120px", height:"120px", borderRadius:"50%", objectFit:"cover", border:"4px solid #3498db", marginBottom:"20px", boxShadow:"0 0 0 5px #222, 0 0 20px rgba(0,0,0,0.4)"}}
        />
        <p style={{color:"#3498db", fontSize:"16px", margin:"0"}}>Welcome to my personal website</p>
        <h1 style={{color:"white", fontSize:"38px", margin:"10px 0"}}>Jeffrey Collins</h1>
        <p style={{color:"#bdc3c7", fontSize:"18px", margin:"0"}}>🩺 General Nurse</p>

        <div style={{background:"rgba(255,255,255,0.1)", padding:"20px", borderRadius:"10px", marginTop:"25px"}}>
          <p style={{color:"white", fontStyle:"italic", fontSize:"16px", lineHeight:"1.8", margin:"0"}}>
            "To serve with compassion, provide accessible care for all, 
            and heal with knowledge — one patient at a time.""
          </p>
        </div>

        <div style={{marginTop:"30px", display:"flex", gap:"15px", justifyContent:"center", flexWrap:"wrap"}}>
          <a href="/about" style={{background:"#3498db", color:"white", padding:"12px 25px", borderRadius:"8px", textDecoration:"none", fontWeight:"bold"}}>👤 About Me</a>
          <a href="/ict" style={{background:"transparent", color:"white", padding:"12px 25px", borderRadius:"8px", textDecoration:"none", fontWeight:"bold", border:"2px solid white"}}>💻 My ICT Page</a>
        </div>
      </div>

      {/* Who I Am */}
      <div style={{background:"white", maxWidth:"700px", margin:"25px auto", padding:"40px 50px", borderRadius:"12px", boxShadow:"0 2px 15px rgba(0,0,0,0.1)"}}>
        <h2 style={{color:"#2c3e50"}}>👋 Who I Am</h2>
        <p style={{color:"#555", lineHeight:"1.8"}}>
          Hello Beautiful Ones! I am Jeffrey Collins, a compassionate and driven individual with a deep
          passion for healthcare and helping others. I am dedicated to making a positive
          difference in people's lives and believe that every person deserves quality
          care and attention.
        </p>

        <h2 style={{color:"#2c3e50"}}>🩺 My Future as a Nurse</h2>
<p style={{color:"#555", lineHeight:"1.8"}}>
  As a Nurse, I will be on the front lines of healthcare. Monitoring
  patients, administering treatments, and being a steady presence during a patient's
  most critical moments. I will work in a hospital where every shift is an
  opportunity to save lives, comfort families, and make a real difference in
  my community and my country.
</p>

        <h2 style={{color:"#2c3e50"}}>💭 Why I Chose Nursing</h2>
        <p style={{color:"#555", lineHeight:"1.8"}}>
          Nursing chose me as much as I chose it. I have always been drawn to helping
          people during their most vulnerable moments, not just through medicine, but
          through kindness, presence, and genuine care. Nursing is not just a career
          for me, it is a calling and a commitment to lifelong service.
        </p>
      </div>

      {/* Pages Grid */}
      <div style={{maxWidth:"700px", margin:"25px auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px"}}>

        <a href="/ict" style={{textDecoration:"none"}}>
          <div style={{background:"white", padding:"30px", borderRadius:"12px", boxShadow:"0 2px 10px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <p style={{fontSize:"36px", margin:"0"}}>💻</p>
            <h3 style={{color:"#2c3e50", margin:"10px 0 5px"}}>ICT & Social Media</h3>
            <p style={{color:"#888", fontSize:"14px", margin:"0"}}>Technology in nursing and social media analysis</p>
          </div>
        </a>

        <a href="/advocacy" style={{textDecoration:"none"}}>
          <div style={{background:"white", padding:"30px", borderRadius:"12px", boxShadow:"0 2px 10px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <p style={{fontSize:"36px", margin:"0"}}>📢</p>
            <h3 style={{color:"#2c3e50", margin:"10px 0 5px"}}>Advocacy & Ethics</h3>
            <p style={{color:"#888", fontSize:"14px", margin:"0"}}>Mental health campaign and digital citizenship</p>
          </div>
        </a>

        <a href="/ph" style={{textDecoration:"none"}}>
          <div style={{background:"white", padding:"30px", borderRadius:"12px", boxShadow:"0 2px 10px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <p style={{fontSize:"36px", margin:"0"}}>🌏</p>
            <h3 style={{color:"#2c3e50", margin:"10px 0 5px"}}>PH vs World</h3>
            <p style={{color:"#888", fontSize:"14px", margin:"0"}}>ICT comparison between Philippines and first-world countries</p>
          </div>
        </a>

        <a href="/about" style={{textDecoration:"none"}}>
          <div style={{background:"white", padding:"30px", borderRadius:"12px", boxShadow:"0 2px 10px rgba(0,0,0,0.1)", textAlign:"center"}}>
            <p style={{fontSize:"36px", margin:"0"}}>👤</p>
            <h3 style={{color:"#2c3e50", margin:"10px 0 5px"}}>About Me</h3>
            <p style={{color:"#888", fontSize:"14px", margin:"0"}}>Who I am and how to contact me</p>
          </div>
        </a>

      </div>
    </main>
  )
}