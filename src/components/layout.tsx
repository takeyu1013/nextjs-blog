import Head from 'next/head';
import { ReactNode } from "react";
import styles from './layout.module.css';

type Props = {
  children?: ReactNode;
  home: boolean;
};

export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>
      <header></header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;