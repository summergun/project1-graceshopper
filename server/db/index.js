const conn = require('./conn');
const Orders = require('./Order');
const Songs = require('./Song');
const Albums = require('./Album');
const Users = require('./User');
const Reviews = require('./Review');
const Artists = require('./Artist');


const sync = force => conn.sync({ force });

//Add associations
// Product foreign key on each Review
// Reviews.belongsTo(User);
// Reviews.belongsTo(Albums)
//Albums.hasMany(Review);

//Album association
Albums.hasMany (Artists);
Albums.hasMany (Songs);

//Song association





const seed = () => {
  const artistToAdd = [
    {
      firstName: 'Nsync',
      imgURL: 'test.jpg'
    },
    {
      firstName: 'Justin',
      lastName: 'Timberlake',
      imgURL: 'test2.tiff'
    }
  ];
const albumToAdd =[
{
  name:'album1',
  year:'2017',
  genre:'pop'
},
{
    name:'album2-test',
  year:'2013',
  genre:'rock'

}
];

  const usersToAdd = [
    {
      userName: 'summerguan',
      firstName: 'Summer',
      lastName: 'Guan',
      email: 'summergun10@gmail.com',
      salt: '1234'
    }
  ];

  return sync(true)
    .then(() => {
      const artistPromises = artistToAdd.map(artist => Artists.create(artist));
      const userPromises = usersToAdd.map(user => Users.create(user));
      const albumPromises = albumToAdd.map(album=>Albums.create(album));
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
    Users,
    Reviews,
    Artists,
    Songs,
    Albums
  }
};
