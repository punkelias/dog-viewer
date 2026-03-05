import { useEffect, useState } from "react";
import type { Dog } from "./types";
import fetchDogs from "./api/fetchDogs";
import Card from "./components/Card";
import { handleDogsFetch } from "./utils";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [mainDog, setMainDog] = useState<Dog | null>(null);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetchDogs(11)
      .then((response: string[]) => {
        const { mainDog, dogs } = handleDogsFetch(response);
        setMainDog(mainDog);
        setDogs(dogs);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (dog: Dog) => {
    const dogIndex = dogs.indexOf(dog);
    if (dogIndex === -1) {
      return;
    }
    const newDogs = [...dogs];
    newDogs.splice(dogIndex, 1);
    if (mainDog) {
      newDogs.push(mainDog);
    }
    setDogs(newDogs);
    setMainDog(dog);
  };

  const handleFavoriteClick = (dog: Dog) => {
    if (favoriteDogs.includes(dog)) {
      const newFavoriteDogs = favoriteDogs.filter(
        (d: Dog) => d.breed !== dog.breed,
      );
      setFavoriteDogs(newFavoriteDogs);
    } else {
      setFavoriteDogs([...favoriteDogs, dog]);
    }
  };

  return (
    <div className="app">
      <div className="main-container">
        <div className="main-card-container">
          <Card
            dog={mainDog}
            isMainCard={true}
            onFavoriteClick={() => handleFavoriteClick(mainDog as Dog)}
          />
        </div>
        <div className="cards-container">
          {dogs.map((dog: Dog, index: number) => (
            <Card
              key={`thumb-${dog.breed}-${index}`}
              dog={dog}
              onClick={() => handleCardClick(dog)}
              onFavoriteClick={() => handleFavoriteClick(dog)}
            />
          ))}
        </div>
      </div>
      <div className="favorite-dogs-container">
        <h2>Favorites</h2>
        <div className="favorite-dogs-list">
          {favoriteDogs.map((dog: Dog, index: number) => (
            <Card
              key={`favorite-${dog.breed}-${index}`}
              dog={dog}
              favorite={true}
              onClick={() => handleCardClick(dog)}
              onFavoriteClick={() => handleFavoriteClick(dog)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
