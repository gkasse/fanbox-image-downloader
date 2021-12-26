const wait = time => new Promise(resolve => setTimeout(() => resolve(), time));
const parseUrl = elements => elements.map(element => document.evaluate('./ancestor::a', element, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue.href);

browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text !== 'report_back') {
        return Promise.reject();
    }

    const elements = [], evaluated = document.evaluate('//a[@target="_blank"]//img', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    let element = evaluated.iterateNext();
    while(element) {
        elements.push(element);
        element = evaluated.iterateNext();
    }

    const [, authorElement, titleElement] = document.querySelectorAll('h1');
    const author = authorElement.textContent.trim().replace('/', '／');
    const title = titleElement.textContent.trim().replace('/', '／');
    return Promise.resolve({urls: parseUrl(elements), author, title});
});
