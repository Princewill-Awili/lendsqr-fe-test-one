

export const apiFetcher = async(url) => {
    const res = await fetch(url);
    const rawData = await JSON.parse(res);
    return rawData;
}