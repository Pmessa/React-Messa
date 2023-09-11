import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetailContainer = ({ DetalleProducto }) => {

  return (

    <div className="detalleProductoContainer">

      {DetalleProducto.map((item) => {

        return (
          <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>
                Descripcion del producto a la que te criaste
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


      })}
    </div>



  )
}

export default ItemDetailContainer
