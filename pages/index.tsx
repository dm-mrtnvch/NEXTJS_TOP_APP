import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Htag} from '../components/Htag/Htag';
import {Button} from '../components/Button/Button';
import {P, Rating, Tag} from '../components';
import {useEffect, useState} from 'react';
import {number} from 'prop-types';

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0)



  useEffect(() => {
    console.log('counter ' + counter)
    return function cleanup() {
      console.log('unmount ')
    }
  }, [])

  return (
      <div>
        <Htag tag='h1'>{counter}</Htag>
          <Button appearance='primary'arrow='right' onClick={() => setCounter(x => x + 1)}>button</Button>
          <Button appearance='ghost' arrow={'down'}>ghost button</Button>
          <P size={'l'}>BIG</P>
          <P size={'m'}>MediuM</P>
          <P size={'s'}>small</P>
          <Tag size="s">ghost</Tag>
          <Tag size="s" color='primary'>small primary</Tag>
          <Tag size="m" color='red'>small red</Tag>
          <Tag color='grey'>small red</Tag>
          <Tag href={'https://banana.by/ '}>small red</Tag>
        <Rating rating={4}/>
      </div>
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>
    //
    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>
    //
    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>
    //
    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>
    //
    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>
    //
    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    //
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  );
}
