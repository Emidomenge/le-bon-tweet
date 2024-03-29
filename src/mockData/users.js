// INFO: Sample of mocked users as it would be on a data base

const mainUser = {
  id: '5d3096eaac9f6960bf47fb24',
  gender: 'female',
  name: {
    title: 'ms',
    first: 'scarlett',
    last: 'carr',
  },
  location: {
    street: '5430 hamilton ave',
    city: 'aubrey',
    state: 'vermont',
    zip: '24061',
  },
  email: 'scarlett.carr18@example.com',
  username: 'tinyelephant267',
  password: 'billabon',
  salt: 'HXe9q7re',
  md5: '8e4db4778c9f73496bd48594ca5a5744',
  registered: '1441918759',
  dob: '184415929',
  phone: '(428)-113-1175',
  cell: '(600)-475-8790',
  picture: 'http://api.randomuser.me/portraits/women/43.jpg',
};

const otherUsers = [
  {
    id: '5d3096ea6597eba3235474dd',
    gender: 'male',
    name: {
      title: 'mr',
      first: 'ricardo',
      last: 'stanley',
    },
    location: {
      street: '1417 eagle point rd',
      city: 'the colony',
      state: 'vermont',
      zip: '35176',
    },
    email: 'ricardo.stanley69@example.com',
    username: 'ticklishtiger485',
    password: 'harvey',
    salt: 'smYw0GUw',
    md5: 'd36ffab1d3a25fb8edcc4599b836c27e',
    registered: '1276593386',
    dob: '488500793',
    phone: '(532)-967-9462',
    cell: '(167)-414-1237',
    picture: 'http://api.randomuser.me/portraits/men/41.jpg',
  }, {
    id: '5d3096ea7650ad5bbbf9f1c0',
    gender: 'male',
    name: {
      title: 'mr',
      first: 'erik',
      last: 'rivera',
    },
    location: {
      street: '4023 fincher rd',
      city: 'altoona',
      state: 'south carolina',
      zip: '30763',
    },
    email: 'erik.rivera24@example.com',
    username: 'yellowmeercat399',
    password: 'mighty',
    salt: 'INLjrmqB',
    md5: '3e879a7a5c013bdfe5f8d5c1526adc11',
    registered: '987325161',
    dob: '414002228',
    phone: '(882)-441-3919',
    cell: '(825)-109-6222',
    picture: 'http://api.randomuser.me/portraits/men/54.jpg',
  }, {
    user: {
      id: '5d3096ea5e79ccdcb4fb785b',
      gender: 'male',
      name: {
        title: 'mr',
        first: 'ruben',
        last: 'white',
      },
      location: {
        street: '4090 elisworth ave',
        city: 'cincinnati',
        state: 'indiana',
        zip: '39688',
      },
      email: 'ruben.white90@example.com',
      username: 'yellowswan765',
      password: 'iloveu',
      salt: '5Qdxy1d4',
      md5: '213e41a91feef118f9026330a5a8376e',
      registered: '1553572641',
      dob: '267985179',
      phone: '(501)-529-3277',
      cell: '(785)-105-8207',
      picture: 'http://api.randomuser.me/portraits/men/14.jpg',
    },
  },
];

export default [mainUser, ...otherUsers];
