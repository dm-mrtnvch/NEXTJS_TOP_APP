import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Htag} from '../components/Htag/Htag';
import {Button} from '../components/Button/Button';
import {P, Rating, Tag} from '../components';
import {useEffect, useState} from 'react';
import {withLayout} from '../layout/Layout';
import {GetStaticProps} from 'next';
import axios from 'axios';
import {MenuItem} from '../interfaces/menu.interface';

function Home({menu}: HomeProps): JSX.Element {

    const [rating, setRating] = useState<number>(4)

    return (
        <>
            <Htag tag='h1'>Title</Htag>
            <Button appearance='primary' arrow='right'>button</Button>
            <Button appearance='ghost' arrow={'down'}>ghost button</Button>
            <P size={'l'}>BIG</P>
            <P size={'m'}>MediuM</P>
            <P size={'s'}>small</P>
            <Tag size="s" color='green'>ghost</Tag>
            <Tag size="s" color='primary'>small primary</Tag>
            <Tag size="m" color='red'>small red</Tag>
            <Tag color='grey'>small red</Tag>
            <Tag href={'https://banana.by/ '} color='grey'>small red</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
            {/*<ul>*/}
            {/*    {menu.map(m => (<li key={m._id.secondCategory }>{m._id.secondCategory}</li>))}*/}
            {/*</ul>*/}
        </>
    );
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    })
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number
}

