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
        document.getElementById('tone').innerHTML = ``;
        console.log("error", error)
    }
}

function submitForm(inputObject = {}) {
    sendData('/sendData', inputObject)
        .then(function (res) {
            updateUI(res);
        })
}

function updateUI(res) {
    const entry = res.analyzedData;
    document.getElementById('tone').innerHTML = `<span class="label">Tone:</span> ${entry.tone}`;
    document.getElementById('subjectivity').innerHTML = `<span class="label">Subjectivity:</span> ${entry.subjectivity}`;
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let url = Client.checkURL(formText)
    console.log("::: Form Submitted :::")
    document.getElementById('tone').innerHTML = `Loading...`;
    document.getElementById('subjectivity').innerHTML = ``;


    const inputObject = {
        url,
    }

    submitForm(inputObject);
}

export { handleSubmit }
export { sendData }
