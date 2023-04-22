import { Col, Row, Button } from 'antd';
function Keyboard() {
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={6}>
          <Button block>7</Button>
        </Col>
        <Col span={6}>
          <Button block>8</Button>
        </Col>
        <Col span={6}>
          <Button block>9</Button>
        </Col>
        <Col span={6}>
          <Button block>C</Button>
        </Col>
        <Col span={6}>
          <Button block>4</Button>
        </Col>
        <Col span={6}>
          <Button block>5</Button>
        </Col>
        <Col span={6}>
          <Button block>6</Button>
        </Col>
        <Col span={6}>
          <Button block>+</Button>
        </Col>
        <Col span={6}>
          <Button block>3</Button>
        </Col>
        <Col span={6}>
          <Button block>2</Button>
        </Col>
        <Col span={6}>
          <Button block>1</Button>
        </Col>
        <Col span={6}>
          <Button block>-</Button>
        </Col>
        <Col span={6}>
          <Button block>0</Button>
        </Col>
        <Col span={6}>
          <Button block>X</Button>
        </Col>
        <Col span={6}>
          <Button block>÷</Button>
        </Col>
        <Col span={6}>
          <Button block>=</Button>
        </Col>
      </Row>
    </>
  );
}

export default Keyboard;
