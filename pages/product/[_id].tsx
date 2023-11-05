import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Alert, Spinner } from 'react-bootstrap'
import { Product } from '@/models/Products'
import Image from "next/image";
import styles from "@/styles/NewsArticleEntry.module.css";

interface ProductPageProps {
  product: Product | null
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { _id } = context.query;
  let product = null;

  try {
    // console.log('od',_id)
    const response = await fetch(`https://ecomproductapi.onrender.com/api/product/${_id}`);
    // console.log(response)
    if (response.ok) {
      product = await response.json();
    }
  } catch (error) {
    // Handle error, e.g., product not found or API request failure
  }

  return {
    props: { product },
  };
}

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title key="title">Product Details</title>
        <meta name="google-site-verification" content="dqtJvFR4KWSG0RrtMb5LkLzBq86KHismG-fHfVS10ng" />
      </Head>
      <main>
        {product ? (
          <>
            <h1>{product.name}</h1>
            <Image
                src={`https://ecomproductapi.onrender.com/api/product/photo/${product._id}`}
                width={500}
                height={300}
                alt="Product image"
                className={`card-img-top ${styles.image}`}
              />
              <div className='card p-3'>
                  <h2>Description:</h2>
                  <h4 className='text-center'>{product.description}</h4>
                  <h2>Price:</h2>
                  <h4 className='text-center'>Rs {product.price}</h4>
                  <h2>Sold:</h2>
                  <h4 className='text-center'>{product.sold}</h4>
                  <h2>Stock:</h2>
                  <h4 className='text-center'>{product.stock}</h4>
              </div>
          </>
        ) : (
          <Alert variant="danger">Product not found</Alert>
        )}
      </main>
    </>
  );
}
