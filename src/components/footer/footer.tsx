import './footer.css'
function Footer() {
    return (
        <>
    <footer>
        <div id="contactsTxt">
            <h2>Meu contato: <br/>
                51-991358716
            </h2>
            <h2>
                Email: <br/>
                pliniodossantos1996@gmail.com
            </h2>
        </div>
        <div id="linkImg">
            <a href="https://github.com/pliniodossantos/" target='_blank'><img src="github.svg" alt="img1"/></a>
            <a href="https://www.linkedin.com/in/pliniodossantos/" target='_blank'><img src="linkedin.svg" alt="img2"/></a>
            <a href="https://www.figma.com" target='_blank'><img src="figma.svg" alt="img3"/></a>
        </div>
    </footer>
        </>
    )
}

export default Footer;

