import {Form, Button} from 'react-bootstrap';



const newComment = () => {
    return(
        <div>
            <small> lascia una recensione</small>
            <Form.Control size="sm" type="text" placeholder="Scrivi recensione" />
            <Form.Select aria-label="votaaaaaa">
      <option>select value  for RECENSIRE</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">For</option>
      <option value="5">Five</option>
    </Form.Select>
    <Button variant="primary" size='sm' className='mt-2'>Aggiungi</Button>
        </div>
    )
}
export default newComment