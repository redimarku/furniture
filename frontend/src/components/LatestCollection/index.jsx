import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title";
import ProductItem from "../ProductItem";
import { Container, Row, Col, Card } from 'react-bootstrap';  


const LatestCollection = () =>{
    
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,4));
    },[]);

    console.log(latestProducts)


    return(
        <>
        <div>
            <div className="text-center">
                <Title text1={'Latest'} text2={'Collection'}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore
                </p>
            </div>
            <Container>
                <Row>
                    {
                        latestProducts.map((item, index)=>(
                            <Col md={3} key={index} className="mb-3">
                                <ProductItem key={index} id={item.id} image={item.image} name={item.name} 
                                newPrice={item.newPrice} oldPrice={item.oldPrice} />
                            </Col>
                        ))
                    }
                
                </Row>
            </Container>
        </div>
        </>
    )
}

export default LatestCollection;