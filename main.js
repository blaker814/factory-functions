const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

console.log(createDoctor("Steve Dunn", "Pediatrician", "123 Place"))

const createPet = (name, breed) => {
    return {
        petName: name,
        petBreed: breed
    }
}
const BowWowKennels = [];
BowWowKennels.push(createPet("Frank", "Dachshund"))
BowWowKennels.push(createPet("Sasha", "Great Dane"))
BowWowKennels.push(createPet("Angelica", "Poodle"))

console.log(BowWowKennels)

const artists = [
    ["Bruce Atikins", "Country", 23],
    ["Jensen Brown", "Pop", 20],
    ["Dre Funkz", "Funk", 25],
    ["Dusta Grimes", "Rap", 21],
    ["Bartholomew Danielson", "Bluegrass", 23],
    ["Avilee Dallas", "Country", 19],
    ["Austin Kinkaid", "Pop", 22],
    ["Loyoncé Branis", "Rap", 27]
];
const JumpStopRecords = [];
const ChattenRecords = [];
const PolarRecords = [];

const createFunkArtist = (name, age) => {
    return {
        name: name,
        genre: "Funk",
        age: age
    }
}
const createRapArtist = (name, age) => {
    return {
        name: name,
        genre: "Rap",
        age: age
    }
}
const createCountryArtist = (name, age) => {
    return {
        name: name,
        genre: "Country",
        age: age
    }
}
const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        genre: "Bluegrass",
        age: age
    }
}
const createPopArtist = (name, age) => {
    return {
        name: name,
        genre: "Pop",
        age: age
    }
}
artists.forEach(person => {
    if (person[1] === "Country") {
        ChattenRecords.push(createCountryArtist(person[0], person[2]))
    } else if (person[1] === "Bluegrass") {
        ChattenRecords.push(createBluegrassArtist(person[0], person[2]))
    } else if (person[1] === "Funk") {
        JumpStopRecords.push(createFunkArtist(person[0], person[2]))
    } else if (person[1] === "Rap") {
        JumpStopRecords.push(createRapArtist(person[0], person[2]))
    } else {
        PolarRecords.push(createPopArtist(person[0], person[2]))
    }
})

console.log(ChattenRecords, JumpStopRecords, PolarRecords)