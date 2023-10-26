import React from "react";
import "@/app/dashadmin/preguntas-frecuentes/pregunta.css";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="Info2">
        <main className="Cabeza">
          <Image
            className="Buzon"
            src="/imagenes/imagenesPages/buzon.png"
            width={500}
            height={500}
          />
          {/* <img class="Buzon" src={buzon} alt="" /> */}
          <h1 className="tituloPreguntas">Quejas y Reclamos</h1>
          <Image
            className="Buzon"
            src="/imagenes/imagenesPages/buzon.png"
            width={500}
            height={500}
          />
          {/* <img class="Buzon" src={buzon} alt="" /> */}
        </main>
        <main className="Mensaje">
          <article className="MensajeContenido">
            <section className="Arriba">
              <Image
                className="ImagenPregunta"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* <img class="ImagenPregunta" src={usuario} alt="" /> */}
              <nav className="TextoPreguntas">
                <h1>Nombre: </h1>
                <h1>Correo: </h1>
              </nav>
            </section>
            <section>
              <p>
                --------------------------------------------------------------------------------
              </p>
            </section>
          </article>
          <article className="MensajeContenido">
            <section className="Arriba">
              <Image
                className="ImagenPregunta"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* <img class="ImagenPregunta" src={usuario} alt="" /> */}
              <nav className="TextoPreguntas">
                <h1>Nombre: </h1>
                <h1>Correo: </h1>
              </nav>
            </section>
            <section>
              <p>
                --------------------------------------------------------------------------------
              </p>
            </section>
          </article>
          <article className="MensajeContenido">
            <section className="Arriba">
              <Image
                className="ImagenPregunta"
                src="/imagenes/imagenesPages/usuario.png"
                width={500}
                height={500}
              />
              {/* <img class="ImagenPregunta" src={usuario} alt="" /> */}
              <nav className="TextoPreguntas">
                <h1>Nombre: </h1>
                <h1>Correo: </h1>
              </nav>
            </section>
            <section>
              <p>
                --------------------------------------------------------------------------------
              </p>
            </section>
          </article>
        </main>
      </section>
    </>
  );
}
