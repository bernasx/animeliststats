import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = (props) => {
  const router = useRouter();
  const [usernameControlForm, setUsernameControlForm] = useState('');

  const onFormChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsernameControlForm(e.currentTarget.value);
  }

  const onFormSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/stats/${usernameControlForm}`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className='hero is-fullheight'>
          <div className='hero-body'>
            <div className='container'>

              <div className="columns is-vcentered is-desktop">
                <div className={`${styles.firstcol} column is-half-desktop`}>
                  <form className='is-clipped' onSubmit={onFormSubmit}>
                    <div className="field">
                      <label className="label has-text-white">Enter <span className={styles.mal}>MyAnimeList</span> Username</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="animeappreciator420" onChange={onFormChange}/>
                      </div>
                      <p className='help has-text-white'>Please only enter your username, not the link to your profile.</p>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input className="button is-light is-pulled-right has-text-weight-semibold" type="submit" value="Search" />
                      </div>
                    </div>

                  </form>
                </div>

                {/*right column*/}
                <div className={`${styles.secondcol} column has-text-right`}>
                  <h1 className='subtitle is-1 has-text-white'>AnimeStats</h1>
                  <h2 className='subtitle is-6 has-text-grey-light'>Your favorite genres</h2>
                  <h2 className='subtitle is-6 has-text-grey-light'>Your favorite year</h2>
                  <h2 className='subtitle is-6 has-text-grey-light'>Your favorite franchise</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
