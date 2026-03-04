import React from 'react'

export default function ComparisonPage() {
  return (
    <main style={{fontFamily:"Arial", background:"#f5f5f5", minHeight:"100vh", padding:"60px 20px"}}>
      <div style={{background:"white", maxWidth:"700px", margin:"0 auto", padding:"50px", borderRadius:"12px", boxShadow:"0 2px 15px rgba(0,0,0,0.1)"}}>

        <h1 style={{color:"#2c3e50"}}>🌏 Philippines vs First-World Comparison</h1>
        <p style={{color:"#3498db", fontWeight:"bold"}}>ICT in Nursing: PH vs USA/UK/Japan</p>
        <hr style={{border:"1px solid #eee", margin:"20px 0"}} />

        <h2 style={{color:"#2c3e50"}}>🇵🇭 ICT in Philippine Nursing</h2>
        <p style={{color:"#555", lineHeight:"1.8"}}>
          In the Philippines, many nurses from low income families face challenges such as 
          slow internet connectivity, limited access to advanced medical technology, and 
          low digital literacy in rural areas. Many hospitals still rely on paper-based records,
          and telemedicine is still in its early stages of adoption.
        </p>

        <h2 style={{color:"#2c3e50"}}>🇺🇸 ICT in First-World Nursing (USA/UK/Japan)</h2>
        <p style={{color:"#555", lineHeight:"1.8"}}>
          In countries like the USA, UK, and Japan, nurses have access to fully digital
          hospital systems, AI-assisted diagnostics, robotic assistance, and widespread
          telemedicine. Internet penetration is near 100% and digital literacy among
          healthcare workers is very high.
        </p>

        <h2 style={{color:"#2c3e50"}}>📊 Key Comparisons</h2>
        <p style={{color:"#555", lineHeight:"2"}}>🌐 <strong>Internet Penetration:</strong> PH ~73% vs USA ~97%</p>
        <p style={{color:"#555", lineHeight:"2"}}>📱 <strong>Mobile Usage:</strong> PH relies heavily on mobile data vs broadband in US/Japan</p>
        <p style={{color:"#555", lineHeight:"2"}}>💻 <strong>Digital Literacy:</strong> PH is improving but still behind first-world nations</p>
        <p style={{color:"#555", lineHeight:"2"}}>🏥 <strong>Technology Access:</strong> PH public hospitals lack advanced ICT infrastructure</p>

        <h2 style={{color:"#2c3e50"}}>💭 My Reflection</h2>
        <p style={{color:"#555", lineHeight:"1.8"}}>
          While the Philippines has room to grow, the rise of mobile technology and
          government initiatives like the eHealth Philippines program show promising
          progress. As a future nurse, I hope to be part of this digital transformation
          in Philippine healthcare.
        </p>

      </div>
    </main>
  )
}