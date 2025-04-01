import { VideoItem } from "../types/VideoItem";
import Constants from "expo-constants";
/* MOCK-start */
// import mockSearchResults from "../../assets/mock/SearchResults.json"
// const typedMockSearchResults = mockSearchResults as unknown as { contents: VideoItem[] }
/* MOCK-end */


/**
 * Get the list of videos from the Youtube API
 * @param query Query string
 * @return List of videos
 */
export const getVideoItemList = async (query: string): Promise<VideoItem[] | []> => {
    console.log("Query : ", query); //TODO Remove this line
    const url = `https://youtube138.p.rapidapi.com/search/?q=${query}&hl=fr&gl=FR&region_code=FR&type=video&sort=relevance&count=20&offset=0`;
    //const url = `https://youtube138.p.rapidapi.com/search/?q=${query}`;
    console.log("URL : ", url); //TODO Remove this line
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': Constants.expoConfig?.extra?.RAPIDAPI_KEY || '',
            'X-RapidAPI-Secret': Constants.expoConfig?.extra?.RAPIDAPI_HOST || ''
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(`Fetched ${result.contents.length} videos`); //TODO Remove this line
        console.log(result.contents); //TODO Remove this line
        return result.contents
        /* MOCK-start */
        // console.log(`Mocked ${typedMockSearchResults.contents.length} videos`);
        // return typedMockSearchResults.contents
        /* MOCK-end */
    } catch (error) {
        console.error(error);
        return []
    }
};