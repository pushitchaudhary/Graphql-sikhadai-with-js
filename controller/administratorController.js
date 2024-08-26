const axios = require('axios');

exports.administratorDetails =  async(id = null) => {
  // const users = [
  //     { id: 1, name: 'Pushit Chaudhary', email: 'admin@example.com', address : 'lahan' },
  //     { id: 2, name: 'Hari Chaudhary', email: 'hari@example.com', address : 'ktm' },
  //     { id: 3, name: 'Gopal Chaudhary', email: 'gopal@example.com', address : 'pkr' },
  // ];

  // if (id) {
  //     return users.find(user => user.id === parseInt(id, 10));
  // }
  // return users;




    const administratorData = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    return administratorData.data
};

  