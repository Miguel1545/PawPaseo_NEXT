import React, { Children } from "react";
import "@/app/globals.css";
import HeaderComponent from "../Components/ComponentHeader/HeaderComponent";
import MenuComponent from "../Components/ComponentMenu/MenuComponent";

export default function layoutAdmin({ children}) {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>

      <main className="menuDashAdmin">
        <MenuComponent />
        <aside className="contenidoHijos">
            {children}
        </aside>
      </main>
      <footer></footer>
    </>
  );
}
