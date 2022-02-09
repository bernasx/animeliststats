// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../utils/connection'
import Anime, {IAnime} from '../../../models/Anime'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  connectDB();
  console.log(await Anime.findOne({"title":"One Piece"}))
  res.status(200).json(await Anime.findOne({"title":"One Piece"}))
  
}
