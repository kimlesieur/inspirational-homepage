import {REACT_APP_UNSPLASH_URL, REACT_APP_UNSPLASH_ACCESS_KEY} from '../vars';

export const getImage = async () => {
    const API_URL = REACT_APP_UNSPLASH_URL + REACT_APP_UNSPLASH_ACCESS_KEY;
    const data = await fetch(API_URL);
    const json = await data.json();
    return json.results.map((result: any) => result.urls.full);
};

