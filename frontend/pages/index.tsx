import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { Query } from '../types';
import Link from 'next/link';

const testFieldQuery = gql`
  query {
    isSignedIn
    user {
      email
      name
    }
  }
`;

// react functional component with typescript typings
function Home () {
  // get data with useQuery
  const { loading, error, data, refetch } = useQuery<Query>(testFieldQuery);

  // set auth_token cookie if token is in the url params
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      document.cookie = `auth_token=${token}; path=/;`;
    }
  }

  const signout = () => {
    // clear the "auth_token" cookie
    document.cookie = 'auth_token' + '=; Max-Age=0';
    // refetch the data
    refetch();
  }

  return (
    <>
      <div className='text-center' style={{ marginTop: '25vh'}}>
        {data?.isSignedIn ? (
          `${data.user.name}, thanks for signing in!`
        ) : 'Please Sign In!'}

        <hr />
        <br />

        <Link href="/sign_in"> Sign In </Link>
        {' | '}
        <button onClick={signout}>
          Sign Out
        </button>
      </div>
    </>
  )
}

export default Home;

