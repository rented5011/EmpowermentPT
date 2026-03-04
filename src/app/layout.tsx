import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
   <nav style={{
  background: "#2c3e50",
  padding: "15px 30px",
  display: "flex",
  gap: "25px",
  flexWrap: "wrap"
}}>
  <a href="/" style={{color:"white", textDecoration:"none", fontFamily:"Arial", fontWeight:"bold"}}>🏠 Home</a>
  <a href="/about" style={{color:"white", textDecoration:"none", fontFamily:"Arial"}}>👤 About Me</a>
  <a href="/ict" style={{color:"white", textDecoration:"none", fontFamily:"Arial"}}>💻 ICT & Social Media</a>
  <a href="/advocacy" style={{color:"white", textDecoration:"none", fontFamily:"Arial"}}>📢 Advocacy & Ethics</a>
  <a href="/ph" style={{color:"white", textDecoration:"none", fontFamily:"Arial"}}>🌏 PH vs World</a>
</nav>
        {children}
      </body>
    </html>
  )
}
