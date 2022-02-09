import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import connectDB from '../utils/connection'
import Anime, {IAnime} from '../models/Anime'
import { FilterQuery } from 'mongoose'

export interface HomeProps {
  result:IAnime
}

const Home: NextPage<HomeProps> = (props) => {

  const liComponents = props.result.tags.map(item => <li key={`${item}-tag`}>{item}</li>)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{props.result.title}</h1>
        <ul>
         {liComponents}
        </ul>
      </main>

      <footer className={styles.footer}>
       <hr/>
      </footer>
    </div>
  )
}


export const getServerSideProps = async () => {
  
  connectDB();
  const query: FilterQuery<IAnime> = {"title":"Naruto"};
  const res = await Anime.findOne(query);
  const result = res?.toObject();
  if(result){
    result._id = result?._id.toString();
  }


  return {
    props: {
      result,
    }, 
  }

}
export default Home
