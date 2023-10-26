import React from "react";
import Image from "next/image";
import "@/app/dashadmin/usuarios/usuarios.css";
import HeaderComponent from "../../Components/ComponentHeader/HeaderComponent.jsx";
import MenuComponent from "../../Components/ComponentMenu/MenuComponent";

export default function page() {
  return (
    <>
      <section class="Info4">
        <main class="LadoIzquierdo">
          <h1 class="TextoAdmin">Perfil de Usuario</h1>
          <nav className="padreImgUsuarios">
            <Image
              className="ImgGrande"
              src="/imagenes/imagenesPages/usuario.png"
              width={500}
              height={500}
            />
          </nav>

          {/* <img class="ImgGrande" src={usuario} alt="" /> */}
          <article class="InfoAdmin">Nombre: Freddy</article>
          <article class="InfoAdmin">Apellido: urbano</article>
          <article class="InfoAdmin">Edad: 19</article>
          <article class="InfoAdmin">correo: oquendoFredy@gmail.com</article>
          <article class="InfoAdmin">Telefono: 3042945240</article>
          <article class="InfoCudador Rojo">
            <Image
              className="Cancelar"
              src="/imagenes/imagenesPages/cancelar.png"
              width={500}
              height={500}
            />
            <p>suspender</p>
            {/* <img class="Cancelar" src={cancelar} alt="" /> */}
            <Image
              className="Cancelar"
              src="/imagenes/imagenesPages/cancelar.png"
              width={500}
              height={500}
            />
            {/* suspender <img class="Cancelar" src={cancelar} alt="" />{" "} */}
          </article>
        </main>
        <main class="LadoDerecho">
          <article class="PerfilesAdmin">
            <h1 class="Numero">
              <Image
                className="ImgPequeña"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 1<img class="ImgPequeña" src={usuario} alt="" /> */}
            </h1>
            <h1 class="TextoPerfilPeqeño">Miguel</h1>
          </article>
          <article class="PerfilesAdmin">
            <h1 class="Numero">
              <Image
                className="ImgPequeña"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 2<img class="ImgPequeña" src={usuario} alt="" /> */}
            </h1>
            <h1 class="TextoPerfilPeqeño">Daniela</h1>
          </article>
          <article class="PerfilesAdmin">
            <h1 class="Numero">
              <Image
                className="ImgPequeña"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 3<img class="ImgPequeña" src={usuario} alt="" /> */}
            </h1>
            <h1 class="TextoPerfilPeqeño">Carlos</h1>
          </article>
          <article class="PerfilesAdmin OpcionesSubrallado">
            <h1 class="Numero">
              <Image
                className="ImgPequeña"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 4<img class="ImgPequeña" src={usuario} alt="" /> */}
            </h1>
            <h1 class="TextoPerfilPeqeño">Freddy</h1>
          </article>
          <article class="PerfilesAdmin">
            <h1 class="Numero">
              <Image
                className="ImgPequeña"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 5<img class="ImgPequeña" src={usuario} alt="" /> */}
            </h1>
            <h1 class="TextoPerfilPeqeño">Josue</h1>
          </article>
        </main>
      </section>
    </>
  );
}
