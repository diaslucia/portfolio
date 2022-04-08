import React from "react";
import style from "./style.scss";

/* Img */
import me1 from "../../assets/me1.png";
import me2 from "../../assets/me2.png";
import me3 from "../../assets/me3.png";
import me4 from "../../assets/me4.png";
import me5 from "../../assets/me5.png";
import me6 from "../../assets/me6.png";

/* Animations */
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const AboutMore = ({ inOpenPage }) => {
    return(     
        <div className="aboutParContainer">
            <p className="aboutText">
                Mi nombre es Lucia y soy graduada de la carrera <strong>Desarrollo Front-End</strong> en Coderhouse,
                donde sigo estudiando para poder perfeccionarme y aprender nuevas tecnologías.
            </p>
            <p className="aboutText">
                Tengo un nivel de <strong>inglés avanzado</strong> gracias a que viví y trabajé en Estados Unidos por dos años y medios.
            </p>
            <p className="aboutText">
                Me considero una persona muy activa y curiosa, disfruto el proceso de organizar mi área de trabajo,
                investigar los requisitos necesarios y ejecutar cada uno de mis proyectos.
            </p>
            <p className="aboutText">
                En 2018, me uní al programa Au Pair dónde viví y trabajé con una familia Norteamericana.
                La experiencia de estar lejos de tu casa, en un país con costumbres e idioma distintos,
                me convirtió en una persona más segura, abierta y flexible al cambio. 
                En este viaje, tuve el placer de conocer a muchas personas en el área de tecnología que me inspiraron a querer seguir por este camino.
            </p>
            <p className="aboutText">
                Cuando no estoy desarrollando, me gusta pasar tiempo al aire libre con mis gatos,
                andar en rollers o leer algún libro de mi autor favorito, Stephen King.
            </p>
            <div className="aboutLogosContainer">
                <AnimationOnScroll animateIn="animate__zoomIn" delay={100}>
                    <img src={me1} alt="icono cat gato"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={200}>
                    <img src={me2} alt="icono vegan"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={300}>
                    <img src={me3} alt="icono rollerblades"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={400}>
                    <img src={me4} alt="icono pc"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={500}>
                    <img src={me5} alt="icono books libros"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn" delay={600}>
                    <img src={me6} alt="icono luggage maleta"/>
                </AnimationOnScroll>
            </div>
        </div>
    );
}

export default AboutMore;