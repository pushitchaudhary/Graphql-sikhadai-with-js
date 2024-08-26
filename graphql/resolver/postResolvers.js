const { postFetch } = require("../../controller/postController")


const postResolver = {
    Query : {
        getPost : async(parent, args, context)=>{
            const {req,res} = context
            return postFetch()
        },
        getPostById : async(parent, {id}, context)=>{
            const {req,res} = context
            return postFetch(id)
        }   
    }
}

module.exports = postResolver