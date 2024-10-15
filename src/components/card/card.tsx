import { ListData } from "../../types"


function Card(props: ListData) {
    const { img, title, paragraph, link } = props
    return (

        <div className="card">
            <div className="imgCard">
                <img src={img} alt="imgcard" />
            </div>
            <h2>{title}</h2>
            <p>{paragraph}
            </p>
            <button><a href={link} target="_blank">Clique aqui</a></button>

        </div>

    )

}

export default Card

