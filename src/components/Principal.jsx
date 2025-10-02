import Section from "./Section";
import Navbar from "./Navbar";
import View from "./View";
import Collapse from "./Collapse";
import Svg from "./Svg";

function Principal() {
  return (
    <>
      <Navbar />
      <main className="carousel rounded-box w-full h-dvh max-md:h-[95dvh]">
        <Section id="home">
          <div className="mask-[url(/assets/svg/perfil.svg#perfil)] mask-position-[center_top] mask-no-repeat mask-size-[contain] bg-[url(/assets/img/yo.webp)] bg-cover bg-[center_-20%] bg-no-repeat aspect-square w-full max-w-[80dvh] h-[80dvh]  max-xl:max-w-[50dvh] max-xl:h-[50dvh] max-md:max-w-[40dvh] max-md:h-[40dvh] max-md:self-center"></div>
          <div className="max-md:mt-4">
            <div className="animate-wiggle">
              <h1 className="text-3xl font-bold text-cyan-400 max-md:text-2xl">
                José de Jesús Gaytán Ramírez
              </h1>
              <h2 className="text-2xl font-serif max-md:text-xl">
                Desarrollador Web Jr
              </h2>
              <div className="dropdown dropdown-hover dropdown-right max-md:dropdown-bottom">
                <div tabIndex="0" role="button" className="btn m-1">
                  Contacto
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gsusgaytan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:jesusgaytanrammirez144@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-regular fa-envelope"></i>Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/524791011271?text=Hola%20Jes%C3%BAs%2C%20nos%20contactamos%20de..."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp"></i>WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="about">
          <View
            title="Sobre mí"
            cont={
              <p>
                Ingeniero en Sistemas con background en Java y en transición a
                React para el desarrollo Front-End. Me defino como un
                profesional curioso y constante, con gran interés en la
                maquetación y la responsividad. Me encanta tomar un reto,
                observarlo y construir la solución.
              </p>
            }
          />
        </Section>

        <Section id="experience">
          <View
            title="Experiencia"
            cont={
              <>
                <div className="collapse bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-1" defaultChecked />
                  <div className="collapse-title font-semibold">
                    <h2 className="text-center">Laboral</h2>
                  </div>
                  <div className="collapse-content text-sm">
                    <div className="flex justify-around">
                      <p>Akasha Net</p>
                      <p>Julio 2024 – Diciembre 2024</p>
                    </div>
                    <ul
                      className="p-5 space-y-4 text-left list-none rounded 
                [&>li]:before:content-['>'] [&>li]:before:text-blue-500 [&>li]:before:mr-2"
                    >
                      <li>
                        Diseñé y maqueté landing pages y sitios e-commerce
                        aplicando HTML, CSS y JavaScript.
                      </li>
                      <li>
                        Implementé Git para control de versiones, facilitando la
                        colaboración y la trazabilidad en los proyectos.
                      </li>
                      <li>
                        Optimicé la experiencia del usuario mediante diseño
                        responsivo y compatibilidad en diferentes navegadores.
                      </li>
                      <li>
                        Adapté e integré diseños de UI proporcionados por el
                        equipo gráfico.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="collapse bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-1" />
                  <div className="collapse-title font-semibold">
                    <h2 className="text-center">Habilidades Técnicas</h2>
                  </div>

                  <div className="collapse-content text-sm flex flex-wrap overflow-y-auto gap-4 justify-center">
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#html" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#css" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#java" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#js" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#tw" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#react" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#pg" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#mysql" />
                    </svg>
                    <svg className="aspect-square w-20 shrink-0">
                      <use href="./assets/svg/sprite.svg#node" />
                    </svg>
                  </div>
                </div>
              </>
            }
          />
        </Section>

        <Section id="projects">
          <View
            title="Proyectos"
            cont={
              <>
                {/* Project */}
                <Collapse
                  proyecto="Cotizador de prestamos - R"
                  info="Landing page para un hotel de perros"
                  link="https://cotizador-prestamos-r.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="react" />
                      <Svg lenguaje="tw" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Cotizador de prestamos - V"
                  info="Landing page para un hotel de perros"
                  link="https://cotizador-prestamos-v.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="vue" />
                      <Svg lenguaje="tw" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Administrador de citas"
                  info="Landing page para un hotel de perros"
                  link="https://admin-citas-poo.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="tw" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Landing page (Agencia de Viajes)"
                  info="Landing page para un hotel de perros"
                  link="https://agenciaviajesnode-i6a4.onrender.com/"
                  elementos={
                    <>
                      <Svg lenguaje="pug" />
                      <Svg lenguaje="node" />
                      <Svg lenguaje="js" />
                      <Svg lenguaje="mysql" />
                      <Svg lenguaje="sq-orm" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Landing page (Perroomies)"
                  info="Landing page para un hotel de perros"
                  link="https://perroomiesleon.com/"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Carrito de compras"
                  info="Carrito de compras"
                  link="https://carrito-c.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Carrito de compras con LS"
                  info="Carrito de compras"
                  link="https://carrito-local-storage.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Validación de formulario"
                  info="Carrito de compras"
                  link="https://validacion-js.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Filtro dinámico"
                  info="Carrito de compras"
                  link="https://filtro-dinamico-js.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                      <Svg lenguaje="json" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Notas con Local Storage"
                  info="Carrito de compras"
                  link="https://l-storage-js.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Cotizador de seguros"
                  info="Carrito de compras"
                  link="https://cotizadors-seguros-js.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
                {/* Project */}
                <Collapse
                  proyecto="Gestor de gastos"
                  info="Carrito de compras"
                  link="https://gestor-gastos-poo.netlify.app"
                  elementos={
                    <>
                      <Svg lenguaje="html" />
                      <Svg lenguaje="css" />
                      <Svg lenguaje="js" />
                    </>
                  }
                />
                {/* Fin Project */}
              </>
            }
          ></View>
        </Section>
      </main>
    </>
  );
}

export default Principal;
