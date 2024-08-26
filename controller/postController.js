const axios = require('axios')

exports.postFetch = async (id = null)=>{
    console.log('called post fetch')
    console.log('id is :', id)
    if(id){
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return postResponse.data
    }else{ 
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        return postResponse.data
    }
}