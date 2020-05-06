const projectData = {};
let url = null;

const textapi = {
    error: null,
    response: {
        polarity: 'neutral',
        subjectivity: 'undefined',
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