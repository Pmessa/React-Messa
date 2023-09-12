import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const ItemDetailContainer = ({ DetalleProducto }) => {

  return (
   
          <Card style={{ width: '18rem' }} key={DetalleProducto.id}>
            <Card.Img variant="top" src={DetalleProducto.img} />
            <Card.Body>
              <Card.Title>{DetalleProducto.titulo}</Card.Title>
              <Card.Text>
              {DetalleProducto.descripcion}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>categoria</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
  )
}

export default ItemDetailContainer
