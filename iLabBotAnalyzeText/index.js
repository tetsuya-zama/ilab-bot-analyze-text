const Language = require('@google-cloud/language');

const client = new Language.LanguageServiceClient();

const factory = (client) =>{
    return (event, context, callback) => {
        const message = event.message;
        const document = {content:message,type:"PLAIN_TEXT"};
        
        const features = {
          "extractSyntax": true,
          "extractEntities": true,
          "extractDocumentSentiment": true,
          "extractEntitySentiment": false, //language ja not supported
          "classifyText": false,//language ja not supported
        }
        
        client.annotateText({document:document,features:features})
            .then((result) => {
               callback(null,result[0]);
            })
            .catch((e)=>{
               callback(e); 
            });
    };
};

exports.handler = factory(client);