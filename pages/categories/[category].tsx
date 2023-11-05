import ProductArticlesGrid from "@/components/ProductArticlesGrid";
import { Product, ProductResponse } from "@/models/Products";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";

interface CategoryNewsPageProps{
    products: Product[],
}

export const getStaticPaths: GetStaticPaths = async() =>{
    const categorySlugs =[
        "Dairy",
        "Fruits&Vegetables",
    ];

    const paths = categorySlugs.map(slug=>({params:{category:slug}}));

    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<CategoryNewsPageProps>=async ({params})=>{
    const category = params?.category?.toString();
    const categoryId = category == 'Dairy' ? '64fc91e3351a494ec88ed21a' : '64fcaa74ce15352f005f6e98';
    const response = await fetch("https://ecomproductapi.onrender.com/api/products")
    const productResponse: Product[] = await response.json();
    // const filteredProducts = productResponse.filter((product) => product.category._id === categoryId);
    // Filter the products based on the categoryId
    const filteredProducts: Product[] = productResponse.filter(
        (product: Product) => product.category._id === categoryId
    );
    return {
        props: { products: filteredProducts },
        revalidate: 5 * 60,
    }
}

const CategoryPage = ({products}:CategoryNewsPageProps) =>{
    const router = useRouter();
    const categoryName = router.query.category?.toString();

    const title = "Category: "+ categoryName;

    return(
        <>
        <Head>
            <title key="title">{`${title}`}</title>
            <meta name="google-site-verification" content="dqtJvFR4KWSG0RrtMb5LkLzBq86KHismG-fHfVS10ng" />
        </Head>
        <main>
            <h1>{title}</h1>
            <Alert>
                This is page uses <strong>getStaticProps</strong> for very high page loading speed
                and <strong>incremental static regeneration</strong> to show data not older than <strong>5 minutes</strong>.
            </Alert>
            <ProductArticlesGrid products={products} />

        </main>
        </>
    );
} 

export default CategoryPage;