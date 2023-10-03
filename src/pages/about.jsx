import React from "react";
import Navbar from "../components/navbar";
import "./componentstyles.css";
import img1 from "../imagenes/1.png";
import img2 from "../imagenes/2.png";
import img3 from "../imagenes/3.png";
import img4 from "../imagenes/jobboz.png";
import img6 from "../imagenes/jobboz1.png";


function About() {
  return (
    <div>
      <Navbar />
      <div className="div-img">
        <img src={img1} alt="Job Booz" />
        <img src={img2} alt="Job Booz" />
        <img src={img3} alt="Job Booz" />
      </div>
      <div className="div-content">
        <h2>¿Quiénes Somos?</h2>
        <p>
          Si llegaste hasta aquí, te estarás preguntando ¿quiénes somos? JOB
          BOOZ es como vestirse para esas primeras veces que uno sabe que serán
          para siempre, es la alegría de fin de semana, es como sentir la
          compañía de tus seres queridos, es la perseverancia para alcanzar tus
          sueños, la valentía y la fuerza para afrontar desafíos... JOB BOOZ es
          un estilo de vida que se transmite y que, desde el año 2016 más que
          productos ofrece un servicio.
        </p>
        <img src={img4} alt="Job Booz" />
      </div>
      <div className="div-content1">
        <h2>Nuestra Historia</h2>
        <p>
          "Toda idea parece una locura hasta que se convierte en realidad...".
          Lo que comenzó tomando pedidos mediante cartilla con atención
          personalizada y envíos a domicilio, pasó como showroom al entrepiso de
          una casa y, al poco tiempo, nos encontrábamos dándole forma a nuestro
          primer local a la calle donde hace más de tres años seguimos
          construyendo sueños. Hoy en día somos una pequeña empresa conformada
          por un equipo de jóvenes con una visión clara que compartimos con gran
          entusiasmo. Fuimos creciendo e instalándonos creativamente en este
          sector con interés genuino hacia nuestros clientes y sus necesidades,
          lo que nos permite determinar nuestra forma de trabajo y la selección
          minuciosa de nuestros productos apuntando siempre a brindar la mejor
          calidad, al alcance de todos.
        </p>
        <img src={img6} alt="Job Booz" />
      </div>
    </div>
  );
}

export default About;
