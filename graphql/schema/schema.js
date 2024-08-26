const {gql} = require('apollo-server-express')


const typeDefs = gql`
    type Query {
        getUser: [User]
        getUserById(id:ID!) : User
        
    }

    type User {
        userId : ID
        id : String
        title : String
        completed : Boolean
    }
`;


module.exports = {typeDefs}