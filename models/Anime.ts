import mongoose, { Schema, Document, model } from "mongoose";

// Create an interface representing a document in MongoDB.
export interface IAnime extends Document {
    animeSeason: {
        season: String,
        year: Number
    },
    episodes: Number,
    picture: String,
    thumbnail: String,
    relations: String[],
    sources: String[],
    status: String,
    synonyms: String[],
    tags: String[],
    title: String,
    type: String
  };

  // Create a Schema corresponding to the document interface.
 const AnimeSchema = new Schema({
    animeSeason: {
        season: String,
        year: Number
    },
    episodes: Number,
    picture: String,
    thumbnail: String,
    relations: [{type: String}],
    sources:  [{type: String}],
    status: String,
    synonyms:  [{type: String}],
    tags: [{type: String}],
    title: String,
    type: String
  });

export default mongoose.models.Anime || model<IAnime>('Anime', AnimeSchema, 'Anime');


 