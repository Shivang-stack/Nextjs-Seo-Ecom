import { Product } from "@/models/Products";
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from "@/assets/images/newsarticle_placeholder.jpg";
import styles from "@/styles/NewsArticleEntry.module.css";
import Link from "next/link";

interface ProductArticleEntryProps {
    product: Product,
}

const ProductArticleEntry = ({ product: { _id, name, description,price,stock } }: ProductArticleEntryProps) => {

    const urlToImage = _id
    ? `https://ecomproductapi.onrender.com/api/product/photo/${_id}`
    : "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

    const validImageUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined;

    return (
        <div> <Link href={`/product/${_id}`}>
                <Card className="h-100">
                    <Image
                        src={validImageUrl || placeholderImage}
                        width={500}
                        height={200}
                        alt="Product image"
                        className={`card-img-top ${styles.image}`}
                    />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Title>Price :{price}</Card.Title>
                        <Card.Text>Stock :{stock}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default ProductArticleEntry;