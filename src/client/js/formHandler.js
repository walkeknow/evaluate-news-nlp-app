function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let url = Client.checkURL(formText)
    console.log("::: Form Submitted :::")

    const inputObject = {
        url,
    }

    /* POST request to send user input to local server */
    const sendData = async (url = '', data = {}) => {
        console.log(`::: POST request sent :::`)

        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        try {
            const responseData = response.json();
            return responseData;
        } catch (error) {
            console.log("error", error)
        }
    }

    function updateUI(res) {
        const entry = res.analyzedData;
        document.getElementById('tone').innerHTML = `<strong>Tone:</strong> ${entry.tone}`;
        document.getElementById('subjectivity').innerHTML = `<strong>Subjectivity:</strong> ${entry.subjectivity}`;
    }

    sendData('/sendData', inputObject)
    .then(function(res){
        updateUI(res);
    })
}

export { handleSubmit }
