const wait = time => new Promise(resolve => setTimeout(() => resolve(), time));
const parseUrl = elements => elements.map(element => document.evaluate('./ancestor::a', element, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue.href);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text !== 'report_back') {
        return;
    }

    const elements = [], evaluated = document.evaluate('//a[@target="_blank"]//img', document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    let element = evaluated.iterateNext();
    while(element) {
        elements.push(element);
        element = evaluated.iterateNext();
    }

    sendResponse(parseUrl(elements));
    return true;
});
