import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Htag} from '../components/Htag/Htag';
import {Button} from '../components/Button/Button';
import {P, Rating, Tag} from '../components';
import {useEffect, useState} from 'react';
import {number} from 'prop-types';
import {withLayout} from '../layout/Layout';

function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
      <>
        <Htag tag='h1'>Title</Htag>
          <Button appearance='primary'arrow='right'>button</Button>
          <Button appearance='ghost' arrow={'down'}>ghost button</Button>
          <P size={'l'}>BIG</P>
          <P size={'m'}>MediuM</P>
          <P size={'s'}>small</P>
          <Tag size="s">ghost</Tag>
          <Tag size="s" color='primary'>small primary</Tag>
          <Tag size="m" color='red'>small red</Tag>
          <Tag color='grey'>small red</Tag>
          <Tag href={'https://banana.by/ '}>small red</Tag>
        <Rating rating={rating} isEditable setRating={setRating}/>
      </>
  );
}

export default withLayout(Home)
