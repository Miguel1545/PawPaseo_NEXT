import React from "react";
import Image from "next/image";
import "@/app/dashadmin/cuidadores/cuidadores.css";
import HeaderComponent from "../../Components/ComponentHeader/HeaderComponent";
import MenuComponent from "../../Components/ComponentMenu/MenuComponent";

export default function page() {
  return (
    <>
      <section class="InfoCuidadores">
        <main class="Container1">
          <h1 class="TextoCui">Perfil Cuidador</h1>
          <nav className="padreImgCui">
            <Image
              className="ImgCui"
              src="/imagenes/imagenesPages/usuario.png"
              width={500}
              height={500}
            />
          </nav>

          {/* <img class="ImgCui" src={usuario} alt="" /> */}
          <article class="InfoCuidador">Nombre: Freddy</article>
          <article class="InfoCuidador">Apellido: urbano</article>
          <article class="InfoCuidador">Edad: 19</article>
          <article class="InfoCuidador">correo: oquendoFredy@gmail.com</article>
          <article class="InfoCuidador">Telefono: 3042945240</article>
          <article class="InfoCuidador">
          <p>Calificacion: 4.7</p>
            <Image
              className="ImgEstrella"
              src="/imagenes/imagenesPages/estrella.png"
              width={500}
              height={500}
            />
            {/* Calificacion: 4.7 <img class="ImgEstrella" src={estrella} alt="" /> */}
          </article>

          <article class="InfoCuidador_Rojo">
            <Image
              className="Cancelar"
              src="/imagenes/imagenesPages/cancelar.png"
              width={500}
              height={500}
            />
            {/* <img class="Cancelar" src={cancelar} alt="" /> */}suspender
            <Image
              className="Cancelar"
              src="/imagenes/imagenesPages/cancelar.png"
              width={500}
              height={500}
            />
            {/* suspender <img class="Cancelar" src={cancelar} alt="" />{" "} */}
          </article>
        </main>
        <main class="Container2">
          <article class="PerfilesCui">
            <h1 class="Numbers">
              <p>1</p>
              <Image
                className="ImgCuidadores"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 1<img class="ImgCuidadores" src={usuario} alt="" /> */}
            </h1>
            <h1 class="NamesCui">Miguel</h1>
          </article>
          <article class="PerfilesCui">
            <h1 class="Numbers">
              <p>2</p>
              <Image
                className="ImgCuidadores"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 2<img class="ImgCuidadores" src={usuario} alt="" /> */}
            </h1>
            <h1 class="NamesCui">Daniela</h1>
          </article>
          <article class="PerfilesCui">
            <h1 class="Numbers">
              <p>3</p>
              <Image
                className="ImgCuidadores"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 3<img class="ImgCuidadores" src={usuario} alt="" /> */}
            </h1>
            <h1 class="NamesCui">Carlos</h1>
          </article>
          <article class="PerfilesCui OpcionesSubrayado">
            <h1 class="Numbers">
              <p>4</p>
              <Image
                className="ImgCuidadores"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 4<img class="ImgCuidadores" src={usuario} alt="" /> */}
            </h1>
            <h1 class="NamesCui">Freddy</h1>
          </article>
          <article class="PerfilesCui">
            <h1 class="Numbers">
              <p>5</p>
              <Image
                className="ImgCuidadores"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* 5<img class="ImgCuidadores" src={usuario} alt="" /> */}
            </h1>
            <h1 class="NamesCui">Josue</h1>
          </article>
        </main>
      </section>
    </>
  );
}
