let viewConfig = {
    warsaw: {
        lat: 52.2184793213402,
        lng: 21.02045666130118,
        zoom: 12
    },
    wroclaw: {
        lat: 51.10273887372642,
        lng: 17.023892226255573,
        zoom: 12
    }
};
const viewQueryParam = 'view';
const defaultValueForView = 'warsaw';

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function saveToLocalStorage(key, value) {
    if (value) {
        localStorage.setItem(key, value);
    }
}

function getFromLocalStorage(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
}

function cacheAndGetViewConfiguration() {
    let queryParam = getQueryParam(viewQueryParam);
    if (queryParam) {
        queryParam = queryParam.toLowerCase();
    }
    if (queryParam && Object.keys(viewConfig).includes(queryParam)) {
        saveToLocalStorage(viewQueryParam, queryParam);
    }
    let selectedView = getFromLocalStorage(viewQueryParam, defaultValueForView);
    return viewConfig[selectedView];
}