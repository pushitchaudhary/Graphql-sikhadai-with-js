const {gql} = require('apollo-server-express')


const typeDefs = gql`
    type Query {
        getUser: [User]
        getUserById(id:ID!) : User

        getPost: [Post]
        getPostById(id:ID!) : Post
        
    }

    type User {
        userId : ID
        id : String
        title : String
        completed : Boolean
    }

    type Post {
        userId : ID
        id : String
        title : String
        body : String
    }
`;


module.exports = {typeDefs}