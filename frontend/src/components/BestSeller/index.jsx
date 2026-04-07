import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { products } from "../../assets/data";
import { ShopContext } from "../../context/ShopContext";
import Title from "../Title";
import ProductItem from "../ProductItem";

const BestSeller = () =>{

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter(item=>item.bestseller);
        setBestSeller(bestProduct);
        console.log(bestSeller)
    

    }, [products]);

    // console.log(bestSeller);


    return(
        <>
        <div>
            <div className="text-center">
                <Title text1={'Best'} text2={'Seller'} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
            </div>

            <Container>
                <Row>
                    {
                        bestSeller.map((item,index)=>(
                            <Col md={4} key={index} className="mb-5">
                                <ProductItem id={item._id} name={item.name} image={item.image} newPrice={item.newPrice} 
                                oldPrice={item.oldPrice}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
        </>
    )
}

export default BestSeller;