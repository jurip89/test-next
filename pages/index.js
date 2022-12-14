import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full text-center'>
      <Head>
        <title>This Is My Webshop With Next.js</title>
        <meta name="description" content="web-shop test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <h1 className="text-6xl font-bold text-green-800 my-20">
      Welcome to the test-web-shop
      </h1>

      <Link className='hover:text-blue-700 text-4xl' href='/shop'>Our List of products</Link>
      


        
      
    </div>
  )
}
