import { ReactNode } from 'react';
import Head from 'next/head';
import Header from "../Header"
import { Footer } from '../Footer';
import { Main } from './styled';

type Props = {
  children: ReactNode;
}

const Layout = (props: Props) => {
  return <>
    <Head>
      <title>NextJS Example</title>
    </Head>
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </>
}

export default Layout;