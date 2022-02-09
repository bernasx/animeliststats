// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../utils/connection'
import Anime, {IAnime} from '../../../models/Anime'
import { FilterQuery } from 'mongoose'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    const username = req.query.stats as String;
    //limit is 1000 for now, temporary fix until I want to be bothered with pagination
    const getAnimeURL = `https://api.myanimelist.net/v2/users/${username}/animelist?status=completed&limit=1000`
    // get list
    const MAL_ID  = process.env.MAL_ID as string;
    let animeList:{node:{id:Number, title:String}}[] = await fetch(getAnimeURL,{
      headers: {
        'Content-Type': 'application/json',
        'X-MAL-CLIENT-ID': MAL_ID
      }
    } ).then(res => res.json()).then(data => data.data);
    
  
    // go through each anime from MAL and 
    connectDB();
    const localAnimeList = await Promise.all(animeList.map(async (anime) => {
        const query: FilterQuery<IAnime> = {sources:{$all:[`https://myanimelist.net/anime/${anime.node.id}`]}};
        const res = await Anime.findOne(query);
        
        const result = res?.toObject();
        if (result) {
            result._id = result?._id.toString();
        }
        return result as IAnime;
    } ))
  
    res.json(localAnimeList);
  } else {
    res.json({'data':'failed'});
  }

  
}
