import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { setTheme } from '../redux/theme/themeSlice';

const Home: NextPage = () => {
  const { current } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  console.log(current);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white text-black dark:bg-black dark:text-white">
        <h1>Hello Guys This is my first time in darkmode</h1>
        <button
          onClick={() => {
            dispatch(setTheme('light'));
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Home;
