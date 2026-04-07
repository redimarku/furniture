import { categories } from "../../assets/data";
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'

const Categories =()=>{
    return(
        <>
        <Container fluid className="pt-5 pb-5">
            <Row>
               
                    <>
                 <Col md={1} className="d-none d-md-block" />

        {/* middle items */}
                {categories.map((category, index) => (
                <Col key={index} xs={12} md={2} >
                    <div>
                    <a href={category.link} className="category-link">
                    <div className="categories">
                    <img src={category.image} alt={category.name} />
                    <h6>{category.name}</h6>
                    </div>
                    </a>
                    </div>
                </Col>
                ))}

                {/* right empty spacer – md+ only */}
                <Col md={1} className="d-none d-md-block" />
                    </>
        </Row>
        </Container>
        </>
    )
}

export default Categories;