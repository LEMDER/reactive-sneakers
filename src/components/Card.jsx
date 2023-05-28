import React from "react";

function Card({onClickFavorite, imageUrl, title, price, onClickPlus}){

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);


  const handlePlus = () => {
    onClickPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  };

  const onFavorite = () =>{
    setIsFavorite(!isFavorite);
  }


    return (
        <div className="card">
            <div className="favorite" onClick={onFavorite}>
              <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Favorite"/>
            </div>
            <img width={133} height={112} src={imageUrl}  alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="cardBottom">
              <div className="cardFlex">
                <span>Price: </span>
                <b>{price}$</b>
              </div>
              <img className="plus" 
                  onClick = {handlePlus} 
                  src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                    alt="Plus" />
            </div>
          </div>
    );
}

export default Card;