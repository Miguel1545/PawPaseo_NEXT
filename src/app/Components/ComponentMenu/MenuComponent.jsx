import React from "react";
import '@/app/Components/ComponentMenu/menu.css'
import Link from 'next/link'


export default function MenuComponent() {
  return (
    <>
      <section className="MenuFijo">
        <section className="Opciones">
          <Link className="Texto" href="/dashadmin/admin-perfil" phat="/Admin-perfil"> 
            Perfil
          </Link>
        </section>

        <section className="Opciones">
          <Link className="Texto" href="/dashadmin/administradores">
            Administradores
          </Link>
        </section>

        <section className="Opciones">
          <Link className="Texto" href="/dashadmin/cuidadores" phat="/cuidadores">
            Cuidadores
          </Link>
        </section>

        <section className="Opciones">
          <Link className="Texto" href="/dashadmin/usuarios" phat="/usuarios">
            Usuarios
          </Link>
        </section>

        <section className="Opciones">
          <Link className="Texto" href="/dashadmin/preguntas-frecuentes" phat="preguntas-frecuentes">
            Preguntas Frecuentes
          </Link>
        </section>
      </section>
    </>
  );
}
