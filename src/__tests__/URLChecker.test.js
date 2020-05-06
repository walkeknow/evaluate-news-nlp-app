import { checkURL } from '../client/js/URLChecker'

test('checks if regex works as expected', () => {
    const jsdomAlert = window.alert;

    // providing an empty implementation on window.alert to detect alert
    window.alert = () => { };
    const urls = [
        "https://www.google.com/",
        "www.google.com",
        "abc"
    ]
    expect(checkURL(urls[0])).toBe(urls[0]);
    expect(checkURL(urls[1])).toBeFalsy();
    expect(checkURL(urls[2])).toBeFalsy();
    window.alert = jsdomAlert;
});