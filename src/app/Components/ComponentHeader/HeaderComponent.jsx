import React from "react";
import Image from "next/image";
import '@/app/Components/ComponentHeader/header.css'

export default function HeaderComponent() {
  return (
    <>
      <div>
        <header className="Encabezado">
          <section className="Logo">
            {/* <img src="" alt="" /> */}
          </section>
          <section className="BotonSesion">
            <button className="c">Cerrar Sesión</button>
          </section>
          <section className="FotoPerfil">
            <Image className="FotoPerfil_Img"
            src= "/imagenes/imagenesHeader/admin.png"
            width={200}
            height={200}
            />
            {/* <img className="FotoPerfil_Img" src={admin} alt="" /> */}
          </section>
        </header>
      </div>
    </>
  );
}
