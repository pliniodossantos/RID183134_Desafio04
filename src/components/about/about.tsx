import './about.css'

function About(){
    return(

        <>
        
        
        <section id="about">
            <h1>Sobre mim</h1>
            <div id="timeLine">
                <span>2019</span><span>2020</span><span>2023</span><span>2024</span>
            </div>
            <div id="elipseAndRow">
                
                <div className="elipse"></div>
                <div className="row"></div>
                <div className="elipse"></div>
                <div className="row"></div>
                <div className="elipse"></div>
                <div className="row"></div>
                <div className="elipse"></div>
            </div>
            <div id="textAbout">
                <p>Primeiros contatos com código, lógica de programação e desenvolvimento, estudei principalmente C# e PHP.</p>
                <p>Comecei minha graduação em análise e desenvolvimento de sistemas na Faculdade Católica Paulista.</p>
                <p>Graduação concluída em análise e desenvolvimento de sistemas.</p>
                <p>Ínicio do curso de engenharia de software na DNC.</p>
            </div>
        </section>
        
        
        </>


    )
}

export default About