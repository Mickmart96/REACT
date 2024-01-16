import { Card, Button,Spinner,Alert } from 'react-bootstrap';
import { useState } from 'react';
import CommentSection from './CommentSection';

const SingleCard = ({book}) => {

    const [selected, setSelected] = useState(false)

    return (
        <>
        <Card style={{width: '18rem', border: selected && '4px solid red'}} className="my-2" key={book.asin}>
            <Card.Img variant="top" src={book.img} onClick={() => setSelected(!selected)} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                {book.asin + ' - ' + book.price}
                </Card.Text>
                <Button variant="primary">Acquista</Button>
                {selected&&<CommentSection asin={book.asin}/>}
                
                
               
            </Card.Body>
        </Card>
        
        </>
    )
}


export default SingleCard;