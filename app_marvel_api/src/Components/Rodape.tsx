'use client'
import React from "react"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Rodape: React.FC = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "#D32F2F",
        padding: "5px", // Adiciona espaçamento interno
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <IconButton 
          aria-label="GitHub"
          component="a"
          href="https://github.com/Joaovcarvalho23"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton 
          aria-label="LinkedIn"
          component="a"
          href="https://www.linkedin.com/in/joão-victor-carvalho-6a46771ba/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
        >
          <LinkedInIcon />
        </IconButton>
      </div>
      <Typography variant="body2" color="white">
        @ {anoAtual} Todos os direitos reservados
      </Typography>
    </footer>
  )
}

export default Rodape
