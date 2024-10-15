import { dataCard } from "../../data/index";
import Card from "./card";
function Cards() {
     return (<>
          {dataCard.map((item) => {
               return (
                    <Card img={item.img} title={item.title} paragraph={item.paragraph} link={item.link} />)
          })}

     </>
     )
}

export default Cards