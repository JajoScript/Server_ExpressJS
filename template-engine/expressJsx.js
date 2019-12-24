const fs = require('fs');

function getRenderedContent(content, object){
    const keys = getKeysFromOptions(options);

    
};

function expressJsx(filepath, options, callback){
    fs.readFile(filepath, (error, content) => {
        if(error){ return callback(error)};

        const rendered = getRenderedContent(content, options);

        return callback(null, rendered);
    });
};

module.exports = expressJsx;