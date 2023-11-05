import { Product } from "@/models/Products";
import { Col, Row } from "react-bootstrap";
import ProductArticleEntry from "./ProductArticleEntry";

interface ProductArticlesGridProps {
    products: Product[],
}

const ProductArticlesGrid = ({ products }: ProductArticlesGridProps) => {
    return (
        <Row xs={1} sm={2} xl={3} className="g-4">
            {products.map(product => (
                <Col key={product._id}>
                    <ProductArticleEntry product={product} />
                </Col>
            ))}
        </Row>
    );
}

export default ProductArticlesGrid;