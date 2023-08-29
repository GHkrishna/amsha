// const image = require("../../utils/abc.jfif")
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CustomCard = () => {
  return (
    <div className='cards'>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://tse3.mm.bing.net/th?id=OIP.NSqoq-JMoS7QzSJeSJTA0QHaIO&pid=Api&P=0&h=180"
          className="cardImage"
        />
        <Card.Body className="cardBody">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className='CTA' >Approve</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
