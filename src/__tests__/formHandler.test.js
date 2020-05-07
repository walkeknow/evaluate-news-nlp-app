import { updateUI } from '../client/js/formHandler'

const projectData = {
    url: 'https://www.timesnownews.com/health/article/coronavirus-breakthrough-italian-scientists-claim-to-have-developed-world-s-first-covid19-vaccine/587796',
    analyzedData: {
        tone: 'positive',
        subjectivity: 'undefined',
        text: `A team of Italian researchers on Wednesday claimed that they have successfully developed a vaccine that can help contain the novel coronavirus that causes COVID-19.`
    }
}

const expectedArray = [
    `<span class="label">Tone:</span> positive`,
    `<span class="label">Subjectivity:</span> undefined`
]
test('checks if DOM gets updated from object as expected', () => {
    // Set up our document body
    document.body.innerHTML =
        `<div id="results">
            <div id="tone"></div>
            <div id="subjectivity"></div>
            <div id="text"></div>
        </div>`

    expect(updateUI(projectData)).toEqual(
        expect.arrayContaining(expectedArray),
    );
});