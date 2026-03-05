const fetchDogs = async (count: number) => {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
  const data = await response.json();
  return data.message;
};

export default fetchDogs;
