import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import "./Product.css"

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState("");
  const [loading, setLoading] = useState(true);
const [activeTab, setActiveTab] = useState('desc');


  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const foundProduct = products.find(item => item.id === Number(productId));
        
        if (foundProduct) {
          console.log(foundProduct);
          setProductData(foundProduct);
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    }

    if (products.length > 0) {
      loadData();
    }
  }, [productId, products]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center py-5">
        <div>Loading product...</div>
      </Container>
    );
  }

  if (!productData) {
    return (
      <Container className="py-5">
        <div>Product not found</div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
         <h1 className="text-center my-4">{productData.category} Products</h1>
      <Row>
       
        <Col md={6}>
          <img 
            src={productData.image} 
            alt={productData.name}
            className="img-fluid rounded shadow"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </Col>
        
        <Col md={6}>
          <Card className="border-0 h-100">
            <Card.Body>
              <div className="d-flex gap-2 mb-3">
                <Badge bg="success">{productData.category}</Badge>
                {productData.subcategory && (
                  <Badge bg="info">{productData.subcategory}</Badge>
                )}
                {productData.bestseller && (
                  <Badge bg="warning">Bestseller</Badge>
                )}
              </div>
              
              <Card.Title as="h2" className="mb-4">
                {productData.name}
              </Card.Title>
              
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="h4 text-danger fw-bold">
                  ${productData.newPrice}
                </span>
                <span className="text-muted text-decoration-line-through">
                  ${productData.oldPrice}
                </span>
                <span className="text-success fw-bold">
                  Save ${(productData.oldPrice - productData.newPrice).toFixed(2)}
                </span>
              </div>
              
              <Card.Text className="lead mb-4">
                {productData.description}
              </Card.Text>
              
              <Button variant="primary" size="lg" className="w-100 mb-3">
                Add to Cart
              </Button>
              
              <small className="text-muted">
                Added on {new Date(productData.created_on).toLocaleDateString()}
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     <Row className="mt-5">
  <Col md={12}>
    {/* LINKS */}
    <div className="d-flex gap-3 mb-4 link-tabs">
      <a 
        href="#desc"
       className={activeTab === 'desc' ? 'active-blue' : ''}
        onClick={(e) => {
          e.preventDefault();
          
          setActiveTab('desc');
        }}
      >
         Description
      </a>
      <a 
        href="#review"
        className={activeTab === 'review' ? 'active-red' : ''}
        onClick={(e) => {
          e.preventDefault();
          setActiveTab('review');
        }}
      >
         Review
      </a>
    </div>

   
    {activeTab === 'desc' ? (
      <div id="desc">
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4">
            <h5>Product Description</h5>
            <p className="lead mb-0">{productData.description}</p>
          </Card.Body>
        </Card>
      </div>
    )

    : (
      <div id="review">
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4">
            <h5>Leave a Review</h5>
    
            <textarea className="form-control mb-3" rows="3" placeholder="Shkruaj opinionin..."></textarea>
            <input className="form-control mb-3" placeholder="Emri" />
            <Button variant="primary" className="w-100">Submit</Button>
          </Card.Body>
        </Card>
      </div>
    )}
  </Col>
</Row>

    </Container>
  );
};

export default Product;

