import { useState } from "react";
import type { Dog } from "../../types";
import "./Card.css";

type CardProps = {
  dog: Dog | null;
  isMainCard?: boolean;
  onClick?: () => void;
  onFavoriteClick?: () => void;
  favorite?: boolean;
};

const Card = ({
  dog,
  isMainCard = false,
  onClick,
  onFavoriteClick,
  favorite = false,
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorite((previous) => !previous);
    onFavoriteClick?.();
  };
  if (!dog) {
    return null;
  }
  return (
    <div className={`card ${isMainCard ? "main-card" : ""}`}>
      <img
        className="card-image"
        src={dog.image}
        alt={dog.breed}
        onClick={onClick}
      />
      <h3 className={`card-breed ${isMainCard ? "main-card-breed" : ""}`}>
        {dog.breed}
      </h3>
      <button
        className={`favorite-button ${isFavorite ? "active" : ""}`}
        onClick={handleFavoriteClick}
        title="Add to favorites"
      >
        <i className="bi bi-heart-fill" />
      </button>
    </div>
  );
};

export default Card;
