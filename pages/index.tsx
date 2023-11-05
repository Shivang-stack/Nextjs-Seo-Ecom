import Head from 'next/head'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'
import { Product, ProductResponse } from '@/models/Products'
import { Alert } from 'react-bootstrap'
import ProductArticlesGrid from '@/components/ProductArticlesGrid'

const inter = Inter({ subsets: ['latin'] })

interface HomePageProps{
  products: Product[],
}


export const getServerSideProps :GetServerSideProps<HomePageProps> =async()=>{
  const response = await fetch("https://ecomproductapi.onrender.com/api/products")
  const productResponse: Product[] = await response.json();
  return {
    props: { products: productResponse }
  }
}

export default function HomePage({products}: HomePageProps) {
  return (
    <>
    <Head>
      <title key="title">Products</title>
    </Head>
      <main className={inter.className}>
        <h1>Home Page</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request.
          This allows search engines to crawl the page content and <strong>improves SEO</strong>.
        </Alert>
        <ProductArticlesGrid products={products} />
      </main>
    </>
  )
}
