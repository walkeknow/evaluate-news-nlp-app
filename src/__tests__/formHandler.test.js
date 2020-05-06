import { updateUI } from '../client/js/formHandler'

const projectData = {
    url: 'https://www.timesnownews.com/health/article/coronavirus-breakthrough-italian-scientists-claim-to-have-developed-world-s-first-covid19-vaccine/587796',
    analyzedData: {
        tone: 'positive',
        subjectivity: 'subjective',
    }
}

const expectedArray = [
    `<span class="label">Tone:</span> positive`,
    `<span class="label">Subjectivity:</span> subjective`
]
test('checks if DOM gets updated from object as expected', () => {
    // Set up our document body
    document.body.innerHTML =
        `<div id="results">
            <div id="tone"></div>
            <div id="subjectivity"></div>
        </div>`

    expect(updateUI(projectData)).toEqual(
        expect.arrayContaining(expectedArray),
    );
});