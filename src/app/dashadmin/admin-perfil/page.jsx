import React from "react";
import Image from "next/image";
import "@/app/dashadmin/admin-perfil/admin_perfil.css";
import HeaderComponent from "../../Components/ComponentHeader/HeaderComponent.jsx";
import MenuComponent from "../../Components/ComponentMenu/MenuComponent";
import usuario from "../../../../public/imagenes/imagenesPages/usuario.png";
import editar from "../../../../public/imagenes/imagenesPages/Editar.png";

export default function page() {
  return (
    <>
      <main className="Contenido_AdminPerfil">
        <section className="centro">
          <nav className="contenedorImagen">
            <Image className="FotoPerfil2" src={usuario} />
          </nav>

          {/* <img className="FotoPerfil2" src={usuario} alt="" /> */}
          <nav className="InformacionAdmin">
            <h1 className="InformacionAdminText">Nombre: </h1>
            <h1 className="InformacionAdminText">Correo: </h1>
            <h1 className="InformacionAdminText">Dirección</h1>
          </nav>
          <nav className="InformacionAdmin">
            <h1 className="InformacionAdminText">Fecha Nacimiento</h1>
            <h1 className="InformacionAdminText">Genero</h1>
            <h1 className="InformacionAdminText">Fecha de Reguistro</h1>
          </nav>
          <button className="Editar" type="button">
            Editar
            <Image className="EditarImagen" src={editar} />
            {/* <img class="EditarImagen" src={editar} alt="" /> */}
          </button>
        </section>
      </main>
    </>
  );
}
