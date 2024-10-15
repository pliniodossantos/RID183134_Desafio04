import { Link, } from 'react-router-dom';
import './header.css'
import { DisplayNone } from '../../utils/index';



function Header() {
    let home: string = '/'
    let projetos: string = '/projetos'
    let tecnologias: string = '/tecnologias'
    let sobre: string = '/sobre'
    return (

        <>
            <header>
                <section id="center">
                    <a style={{ display: DisplayNone(home) }}><Link to={'/'}>Home</Link></a>
                    <a style={{ display: DisplayNone(projetos) }}><Link to={'/projetos'}>Projetos</Link></a>
                    <a style={{ display: DisplayNone(tecnologias) }}> <Link to={'/tecnologias'} >Tecnologias</Link></a>
                    <a style={{ display: DisplayNone(sobre) }}><Link to={'/sobre'}>Sobre mim</Link></a>
                </section>
                <section id="right">
                    <a href="https://github.com/pliniodossantos/" target='_blank'><img src="github.svg" alt="img1" /></a>
                    <a href="https://www.linkedin.com/in/pliniodossantos/" target='_blank'><img src="linkedin.svg" alt="img2" /></a>
                </section>
            </header>
        </>
    )
}

export default Header;

