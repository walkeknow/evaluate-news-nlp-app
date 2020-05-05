function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/test')
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
            updateUI(res);
        })

    /* Function to GET API Data from local server */
    function updateUI(res) {
        console.log(res);
        const entry = res.analyzedData;
        document.getElementById('tone').innerHTML = `<strong>Tone:</strong> ${entry.tone}`;
        document.getElementById('subjectivity').innerHTML = `<strong>Subjectivity:</strong> ${entry.subjectivity}`;
    }
}

export { handleSubmit }
