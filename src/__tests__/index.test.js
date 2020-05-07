
import { sendData } from '../__mocks__/index'

const req = {
    body: {
        url: 'https://www.hindustantimes.com/world-news/after-covid-19-us-now-battles-murder-hornets-which-threaten-humans-too/story-DQKoQakrsr87kl8W4iOs7J.html',
    }
}

const res = null;

const expectedObject = {
    url: 'https://www.hindustantimes.com/world-news/after-covid-19-us-now-battles-murder-hornets-which-threaten-humans-too/story-DQKoQakrsr87kl8W4iOs7J.html',
    analyzedData: {
        tone: 'neutral',
        subjectivity: 'undefined',
        text: `The stinging Vespa Mandarinia can grow as large as 2.5 inches in length and is native to Southeast Asia, China and Taiwan.`
    }
}

test('check if server endpoint object is created correctly', () => {
    expect(sendData(req, res)).toEqual(
        expect.objectContaining(expectedObject),
    )
})
