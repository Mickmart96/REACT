import FantasyBooks from './json/fantasy.json'
import HistoryBooks from './json/history.json'
import HorrorBooks from './json/horror.json'
import RomanceBooks from './json/romance.json'
import SiFiBooks from './json/scifi.json'
import { Card,Button } from 'react-bootstrap';
import {useState} from 'react';

const Lista = () => {
    const [list, setList] = useState(FantasyBooks);
    return (
        <>
        <div className="text-center py-3 ">
            <Button variant="outline-primary" className="mx-3" onClick={() => setList (FantasyBooks)}>Fantasy</Button>
            <Button variant="outline-primary" className="mx-3" onClick={() => setList (HistoryBooks)}>History</Button>
            <Button variant="outline-primary" className="mx-3" onClick={() => setList (HorrorBooks)}>Horror</Button>
            <Button variant="outline-primary" className="mx-3" onClick={() => setList (RomanceBooks)}>Romance</Button>
            <Button variant="outline-primary" className="mx-3" onClick={() => setList (SiFiBooks)}>Sifi</Button>
        </div>
           {list.map((book) => 
            <Card className="mx-3 my-2 br" style={{ width: '18rem' }} key={book.asin}>
             <Card.Img variant="top" src={book.img} />
             <Card.Body>
               <Card.Title>{book.title}</Card.Title>
                 <Card.Text>
              {book.asin + ' - ' + book.price}
                </Card.Text>
              <Button variant="primary">RUBBA</Button>
             </Card.Body>
            </Card>
            
            )}
        </>
)} ;

export default Lista;