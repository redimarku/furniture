import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Collection.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("relavent");
  


  useEffect(()=>{
    setFilterProducts(products);
  }, []);

  console.log(products);

  //   const handleCategory = (event) =>{
  //     if(category.includes(event.target.value)){
  //       setCategory(prev=> prev.filter(item=> item !== event.target.value))
  //     } else{
  //       setCategory(prev => [...prev,event.target.value])
  //     }
  // }

  const handleCategory = (e) =>{
    const value = e.target.value;
  if (category === value) {
    setCategory("");
  } else {
    setCategory(value);
  }
  }

  const handleSortBy = (e) =>{
    const value = e.target.value;
    setSortBy(value);
    // console.log(e.target.value);

  }

 
  // console.log(category);

const searchedCategory = products
  .filter((item) => {
    const byCategory = category === '' || item.category.toLowerCase() === category.toLowerCase();
    const bySearch = item.name.toLowerCase().includes(search);
    return byCategory && bySearch;
  })
  .sort((a, b) => {
    if (sortBy === "low-high") {
      return a.newPrice - b.newPrice;
    } else if (sortBy === "high-low") {
      return b.newPrice - a.newPrice;
    } else {
      return 0; // "relavent" or default
    }
  });


  return (
    <Container>

      <Row className="mt-5">

        {/* LEFT — FILTERS */}
        <Col md={3} className="collection-filters">
          <h3>FILTERS</h3>

          <div className="category-filter">
            <h5>Categories</h5>

            <label className="d-block">
              <input type="checkbox" value="bedroom" className="me-2" onChange={handleCategory} />
              Bedroom
            </label>

            <label className="d-block">
              <input type="checkbox" value="dining" className="me-2" onChange={handleCategory} />
              Dining
            </label>

            <label className="d-block">
              <input type="checkbox" value="living" className="me-2" onChange={handleCategory}/>
              Living
            </label>
          </div>
        </Col>

        {/* RIGHT — COLLECTION */}
        <Col md={7} className="text-center">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
        </Col>

        <Col md={2}>
  {/* Product Sort  */}
 
            <Form.Select className="select-sort"  onChange={handleSortBy} value={sortBy}>
                <option value="relavent">Sort By: Relavent</option>
                <option value="low-high">Sort By: Low to High</option>
                <option value="high-low">Sort By: High to Low</option>
            </Form.Select>
          
        </Col>

      </Row>

      <Row>
        {/* <Col md={3}></Col> */}
{
  searchedCategory.length > 0
    ? searchedCategory.map((item, index) => (
        <Col md={3} key={index} className="my-5">
          <ProductItem
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
          />
        </Col>
      ))
    : null
}
      </Row>

    </Container>
  );
};

export default Collection;
