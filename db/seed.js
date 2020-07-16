const mongoose = require("./connection");
const db = mongoose.connection
const Song = require("../models/song");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {

  await Song.deleteMany({})

  const songs = [
    { title: "Juice", artist: "Lizzo", time: 195, isFavorite: true },
    { title: "Fuel", artist: "Metallica", time: 266, isFavorite: true },
    { title: "Dear to me", artist: "Electric Guest", time: 241, isFavorite: true },
    { title: "Toxic", artist: "Britney Spears", time: 199, isFavorite: true },
    { title: "9 to 5", artist: "Dolly Parton", time: 163, isFavorite: true },
    { title: "Ain't no mountain high enough", artist: "Marvin Gaye", time: 148, isFavorite: true }
  ];

  await Song.insertMany(songs);
  console.log("You now have a playlist!?!!!");
};
const run = async () => {
  await main();
  db.close();
};

run();