
function CardItem({id,DogName,createAt,age,img,onDelete,onEdit}) {
    return(
        <div className="cardHaveInfo" key={id}  >
                <img src={img} alt="" id="imageInCard" />
                <h2 id="nameStyle">{DogName}</h2>
                <h2 id="nameStyle">{age}</h2>
                <button id="pencil-btn" onClick={onEdit} ><i className="bi bi-pencil-fill"></i></button>
                <button id="truch-btn" onClick={onDelete}><i class="bi bi-trash3-fill"></i></button>
                <span style={{color:"white"}}>{createAt.toLocaleTimeString()}</span>
        </div> 
    )
}

export default CardItem;


