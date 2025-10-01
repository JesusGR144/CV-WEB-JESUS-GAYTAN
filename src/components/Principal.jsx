import Section from "./Section";
import Navbar from "./Navbar";

function Principal() {
  return (
    <>
      <Navbar />
      <main className="carousel rounded-box w-full h-dvh max-md:h-[95dvh]">
     
        <Section id="home">
          <div className="mask-[url(/assets/svg/perfil.svg#perfil)] mask-position-[center_top] mask-no-repeat mask-size-[contain] bg-[url(/assets/img/yo.webp)] bg-cover bg-[center_-20%] bg-no-repeat aspect-square w-full max-w-[80dvh] h-[80dvh]  max-xl:max-w-[50dvh] max-xl:h-[50dvh] max-md:max-w-[40dvh] max-md:h-[40dvh] max-md:self-center"></div>
          <div className="max-md:mt-4">
            <div className="animate-(--animate-speed)">
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
          <div className="flex w-[90%] flex-col md:flex-row *:p-[5%] max-md:justify-center">
        <div className="custom-card all max-md:max-h-[35dvh] max-md:overflow-auto">
          <h2 className="">Personal</h2>
          <p className="text-center">Desde pequeño sentí curiosidad por la tecnología, pasando horas explorando y aprendiendo. 
            Disfruto crear, desde código hasta diseños que se plasman en playeras personalizadas. Me definen la constancia, 
            la responsabilidad y una mentalidad orientada a soluciones. Creo en avanzar paso a paso, con realismo y sin perder el impulso creativo. 
            Me gusta automatizar, conectar ideas y aprender resolviendo mis propios retos.</p>
        </div>
        <div className="divider divider-info lg:divider-horizontal">Sobre mí</div>
        <div className="custom-card all max-md:max-h-[35dvh] max-md:overflow-auto">
          <h2 className="">Profesional</h2>
          <p className="text-center">Ingeniero en Sistemas Computacionales especializado en desarrollo web
            frontend. Me apasiona crear interfaces funcionales y bien estructuradas, fusionando desarrollo con diseño.
            Ante cada desafío, investigo exhaustivamente para implementar las mejores soluciones. Mi compromiso con el
            aprendizaje continuo me permite mantenerme actualizado en una industria en constante evolución.</p>
        </div>
      </div>
        </Section>
        <Section id="education">
          <h1 className="m-auto text-center text-cyan-50">Education</h1>
        </Section>
        <Section id="experience">
          <h1 className="m-auto text-center text-cyan-50">Experience</h1>
        </Section>
        <Section id="skills">
          <h1 className="m-auto text-center text-cyan-50">Skills</h1>
        </Section>
        <Section id="projects">
          <h1 className="m-auto text-center text-cyan-50">Projects</h1>
        </Section>
      </main>
    </>
  );
}

export default Principal;
