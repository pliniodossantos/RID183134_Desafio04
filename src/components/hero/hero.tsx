import { Link } from 'react-router-dom'
import './hero.css'


function Hero() {
    return (
        <>
            <section id="hero">
                <h1>Plínio Santos - Dev Full Stack</h1>
                <h2>Formado em análise e desenvolvimento de sistemas, <br />
                    atualmente estudando engenharia de software na DNC <br />
                     </h2>
                <button><Link to={'/sobre'}>Saber mais</Link></button>
            </section>
        </>
    )
}

export default Hero