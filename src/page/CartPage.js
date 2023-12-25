import React, { useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import OrderResult from "../components/OrderResult";
import CartProductCard from '../components/CartProductCard';
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartList, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {

  }, []);
  
  return (
    <Container style={{ marginTop: "10%" }}>
      <Row>
        <Col>
          {cartList.length > 0 ? (
            cartList.map((item) => (
              <CartProductCard item={item} key={item._id} />
            ))
          ) : (
            <div className="text-align-center">
              <h2>카트가 비어있습니다.</h2>
              <div>상품을 담아주세요!</div>
            </div>
          )}
        </Col>
        <Col xs={12} md={7} style={{marginTop: '10px', textAlign: 'center', justifyContent:'center'}}>
            </Col>
            <Col xs={12} md={5}>
                <OrderResult cartList={cartList} totalPrice={totalPrice}/>
            </Col>
            
      </Row>
    </Container>
  );
};

export default CartPage;
