let messages = [];
let id = 0;

module.exports = {
    create:(request,response)=>{
        response.status(200).send(messages);
    },

    read:(request,response)=>{
        response.status(200).send(messages);
    },

    update:(request,response)=>{
        response.status(200).send(messages);
    },

    delete:(request,response)=>{
    
        response.status(200).send(messages);
    }
}