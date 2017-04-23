const conn = require("./conn");
const Orders = require("./Orders");
const Song = require("./Song");
const Album = require("./Album");
const User = require("./User");
const Review = require("./Review");
const Artist = require("./Artist");

const sync = force => conn.sync({ force });

// const seed = () => sync(true)
// .then(() => Orders.bulkCreate([
//   {completedDate: Date.now(), orderPrice: 1.99, tax: (1.99 * 0.07)},
//   {}
// ]));

const seed = () => {
  const artistToAdd = [
    {
      firstName: "Nsync",
      imgURL: "test.jpg"
    },
    {
      firstName: "Justin",
      lastName: "Timberlake",
      imgURL: "test2.tiff"
    }
  ];

  const usersToAdd = [
    {
      userName: "summerguan",
      firstName: "Summer",
      lastName: "Guan",
      email: "summergun10@gmail.com",
      password: "1234"
    }
  ];

  return sync(true)
    .then(() => {
      const artistPromises = artistToAdd.map(artist => Artist.create(artist));
      const userPromises = usersToAdd.map(user => User.create(user));
      return Promise.all([artistPromises, userPromises]);
    })
    .then(() =>
      Orders.bulkCreate([
        { completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.07 },
        {}
      ])
    );
};

module.exports = {
  sync,
  seed,
  models: {
    Orders,
    User,
    Review,
    Artist
  }
};
