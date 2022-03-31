

export default function Footer(){
    return(
        <footer id="contacto">
            <div className="piePagina">
                <div className="footer-inicial">
                    <div>
                        <p className="contacto">CONTACTOS</p>
                        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noopener" className="contacto-2">WHATSAPP : +54 3487-513839</a>
                        <div>
                            <a href="https://www.instagram.com/rose_velas/?hl=es" target="_blank" rel="noopener" className="contacto-2">INSTAGRAM : @rose_velas</a>
                        </div>
                        <a href="mailto:Caromagnanihg@gmail.com" className="contacto-2">MAIL : Caromagnanihg@gmail.com</a>
                    </div>
                    <a href="#cabecero" rel="noopener" className="contacto-3">
                        <img src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/logo.jpg?alt=media&token=08945eb0-05ed-4791-9c27-d762e3c443e9" alt="Logo" className="foto-footer"/>
                    </a>
                </div>
                <div>
                    <p className="copyright">&copy; Copyright 2021  RoséAromas | Powered by Carolina Magnani</p>
                </div>
            </div>
        </footer>
    )
}