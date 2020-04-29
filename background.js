chrome.tabs.onUpdated.addListener(tabId => {
    chrome.tabs.get(tabId, tab => {
        if (/www\.fanbox\.cc\//.test(tab.url)) {
            
            chrome.pageAction.show(tabId);
        }
    });
});

const DEFAULT_NOTIFICATION_OPTION = {
    iconUrl: 'data:image/png;base64,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',
    title: 'Pixiv Fanbox画像ダウンローダー',
};
const NOTIFICATION_ID = 'fantia_image_downloader';

const wait = time => {
    return new Promise(resolve => setTimeout(() => {
        console.log('a complete');
        resolve();
    }, time));
};

const notification = async opt => {
    const option = {
        ...DEFAULT_NOTIFICATION_OPTION,
        ...opt,
    };

    await chrome.notifications.getAll(async notification => {
        if (!notification[NOTIFICATION_ID]) {
            await chrome.notifications.create(NOTIFICATION_ID, option);
        } else {
            await chrome.notifications.update(NOTIFICATION_ID, option);
        }
    });
};

chrome.pageAction.onClicked.addListener(async (tab) => {
    await chrome.notifications.clear(NOTIFICATION_ID);
    await wait(500);
    await notification({
        type: 'basic',
        message: '画像リストの取得を始めます',
    });

    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, async urls => {
        console.log(urls);
        await notification({
            type: 'basic',
            message: `全${urls.length}枚の画像をダウンロードします`,
        });

        try {
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                await notification({
                    type: 'progress',
                    message: `${i+1}/${urls.length}枚目をダウンロード中……`,
                    progress: Math.floor((i + 1) * 100 / urls.length),
                });
                chrome.downloads.download({url});
                
                await wait(5000);
            }

            await chrome.notifications.clear(NOTIFICATION_ID);
            await notification({
                type: 'basic',
                message: '画像のダウンロードが完了しました',
            });
        } catch (e) {
            await chrome.notifications.clear(NOTIFICATION_ID);
            await notification({
                type: 'basic',
                message: '画像のダウンロード中にエラーが発生しました',
            });
        }

        return true;
    });
});