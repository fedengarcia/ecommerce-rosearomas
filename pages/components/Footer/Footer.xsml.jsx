import React from "react";
import "./Footer.css"

export default function FooterXSml(){
    return(
        <footer id="contacto">
            <div className="piePagina">
                <div className="footer-inicial-xsml">
                    <div>
                        <p className="contacto" style={{fontSize:"5vw"}}>CONTACTOS</p>
                        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer" className="contacto-2"  style={{fontSize:"3.5vw"}}>WHATSAPP : +54 3487-513839</a>
                        <div>
                            <a href="https://www.instagram.com/rose_velas/?hl=es" target="_blank" rel="noreferrer" className="contacto-2"  style={{fontSize:"3.5vw"}}>INSTAGRAM : @rose_velas</a>
                        </div>
                        <a href="mailto:Caromagnanihg@gmail.com" className="contacto-2"  style={{fontSize:"3.5vw"}}>MAIL : Caromagnanihg@gmail.com</a>
                    </div>
                    <a href="#cabecero" rel="noopener" className="contacto-3-sml">
                        <img src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/logo.jpg?alt=media&token=08945eb0-05ed-4791-9c27-d762e3c443e9" alt="Logo" className="foto-footer"/>
                    </a>
                </div>
                <div>
                    <p className="copyright" style={{fontSize:"2.5vw"}}>&copy; Copyright 2021  RoséAromas | Powered by Carolina Magnani</p>
                </div>
            </div>
        </footer>
    )
}