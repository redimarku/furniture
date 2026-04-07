import { useContext } from 'react';
import { Card } from 'react-bootstrap';  
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, newPrice, oldPrice}) =>{

        const {currency} = useContext(ShopContext);


    return(

        <>

        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        
                 <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={image} style={{height:'350px'}}/>

                            <Card.Body>
                                <Card.Title>{name}</Card.Title>

                                <Card.Text>
                                    <span style={{ fontWeight: "bold", }}>
                                        {currency}{newPrice}
                                    </span>

                                    {oldPrice && (
                                        <span 
                                            style={{
                                                marginLeft: "20px",
                                                textDecoration: "line-through",
                                                color: "gray"
                                            }}
                                        >
                                            {currency}{oldPrice}
                                        </span>
                                    )}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    </Link>


     {/* <Container>
            <Row>
                <Col md={3}>
                <div className="item">
                    <img src={props.image} />
                    <p>{props.name}</p>
                    <div className="item-prices">
                        <div className="item-price-new">
                            <span>{props.newPrice}</span>
                        </div>
                        <div className="item-price-old">
                            <span>{props.oldPrice}</span>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>         */}
        </>
    )
}

export default ProductItem;