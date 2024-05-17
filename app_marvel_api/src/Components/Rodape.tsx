'use client'
import Typography from "@mui/material/Typography";
import React from "react";

const Rodape: React.FC = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "#5889DC",
      }}
    >
      <Typography variant="body2" color="white">
        @ {anoAtual} Todos os direitos reservados
      </Typography>
      <Typography variant="body2" color="white">
        Link do repositorio: https://github.com/Joaovcarvalho23/DesafioMarvelAPI
      </Typography>
    </footer>
  );
};
export default Rodape;