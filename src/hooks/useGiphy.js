import {useEffect, useState} from "react";
import {GiphyApi} from "../services/GiphyApi.js";
import {getEnvironments} from "../helpers/getEnvironments.js";

const {VITE_GIPHY_API_KEY} = getEnvironments();

export const useGiphy = () => {


    const getApiMeme = async (search) => {
        try {
            const response = await GiphyApi.get('search', {
                params: {
                    q: search,
                    limit: 10,
                    api_key: VITE_GIPHY_API_KEY
                }
            });
            const {data} = await response.data;
            const memes = data.map((meme) =>( {
                id: meme.id,
                title: meme.title,
                url: meme.images.downsized_medium.url
            }));
            return memes;

        } catch (error) {
            console.log(error);
        }
    }

    return {

        getApiMeme

    }
}