module.exports = {
    browserName: 'chrome',
    chrome: {
        emulateDevices:[
		    "Desktop",
            "Galaxy S5",
            "iPad",
            "iPhone X",
            "iPhone 6",
        ],
        headless: false,
        chromeBinaryPath: '',
        chromeLogFilePath: './logs/'
    },
    ie:{
        ElementCacheCleanup: true,
        LogFile: './logs/',
        IEDRIVER: './IEDriverServer.exe'
    },
    firefox:{
        headless: false,
        GeckoDriverWin: './gechodriver.exe',
        GeckoDriverLinux: './gechodriver'
    }
}
