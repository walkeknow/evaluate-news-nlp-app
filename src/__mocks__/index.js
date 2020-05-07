const projectData = {};
let url = null;

const textapi = {
    error: null,
    response: {
        polarity: 'neutral',
        subjectivity: 'undefined',
        text: `The stinging Vespa Mandarinia can grow as large as 2.5 inches in length and is native to Southeast Asia, China and Taiwan.`
    }
}

function sendData(req, res) {
    url = req.body.url;
    projectData["url"] = url;

    function textapiCallback(error, response) {
        if (error === null) {
            const analyzedData = {
                tone: response.polarity,
                subjectivity: response.subjectivity,
                text: response.text,
            }
            projectData["analyzedData"] = analyzedData;
            return projectData;
        } else {
            console.log(error);
        }
    }
    return textapiCallback(textapi.error, textapi.response);
}

export { sendData }