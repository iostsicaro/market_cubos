const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-54-163-97-228.compute-1.amazonaws.com',
        user: 'ikjgqzxmpimgtg',
        password: '1ff630125f5c4024ffb7a1101daf6ed79cb3196f97754a13da331be043ab3cbb',
        database: 'd1hutpp4acaji1'
    },
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = knex;