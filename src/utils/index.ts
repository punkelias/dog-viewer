import type { Dog } from "../types";

const parseBreedFromUrl = (url: string): string => {
    const segments = url.split("/");
    const breedSlug = segments[segments.indexOf("breeds") + 1] ?? "";
    return breedSlug
        .split("-")
        .reverse()
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};

const buildDog = (dog: string): Dog => {
    return {
        image: dog,
        breed: parseBreedFromUrl(dog),
    };
}

export const handleDogsFetch = (dogs: string[]): { mainDog: Dog | null, dogs: Dog[] } => {
    if (dogs.length === 0) {
        return { mainDog: null, dogs: [] };
    }
    if (dogs.length === 1) {
        const mainDog = buildDog(dogs[0]);
        return { mainDog, dogs: [] };
    }
    const mainDog = buildDog(dogs.shift() as string);
    const remainingDogs = dogs.map(buildDog);
    return { mainDog, dogs: remainingDogs };
}
