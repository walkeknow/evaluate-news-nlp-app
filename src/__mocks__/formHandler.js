const projectData = {
    url: 'https://www.timesnownews.com/health/article/coronavirus-breakthrough-italian-scientists-claim-to-have-developed-world-s-first-covid19-vaccine/587796',
    analysedData: {
        tone: 'positive',
        subjectivity: 'subjective',
    }
}

function updateUI(res) {
    const entry = res.analyzedData;
    document.getElementById('tone').innerHTML = `<span class="label">Tone:</span> ${entry.tone}`;
    document.getElementById('subjectivity').innerHTML = `<span class="label">Subjectivity:</span> ${entry.subjectivity}`;
}
