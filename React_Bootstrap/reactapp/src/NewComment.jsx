import {Form, Button} from 'react-bootstrap';
import { useState,useEffect } from 'react';


const newComment = ({asin}) => {
    const[ newComm,setNewcomm] = useState( {
          comment:'',
          rate:'',
      })
    useEffect(() =>{
    console.log(newComm);
    },[newComm])



   const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MWVhNWMwNTgzNTAwMTg1MjJjYTAiLCJpYXQiOjE3MDUzNjMyNTcsImV4cCI6MTcwNjU3Mjg1N30.pMtpodCPPbdkBAGeYnCouPvOyzleZAKxVtLz7KCJRvM"
const createData= async (commentId) => {
    try{
        const res= await fetch('https://striveschool-api.herokuapp.com/api/comments/',{
            method: 'POST',
            headers:{
                Authorization: token,
                'Content-type': 'application/json',
            } ,
            body: JSON.stringify({...newComm,elementId:asin})
        })
          if (res.ok) {
            console.log('comment add')
        } else{
            console.log('errore add comment');
        }
    }
    
    catch(error) {
        console.log(error);
    }
    }
    return(
        <div>
            <small> lascia una recensione</small>
            <Form.Control size="sm" type="text" placeholder="Scrivi recensione" value={newComm.comment} onChange={(e) => setNewcomm({...newComm,comment:e.target.value})}  />
            <Form.Select aria-label="votaaaaaa" value={newComm.rate} onChange={(e) => setNewcomm({...newComm,rate:e.target.value})}>
      <option>select value  for RECENSIRE</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">For</option>
      <option value="5">Five</option>
    </Form.Select>
    <Button variant="primary" size='sm' className='mt-2' onClick={()=>createData()}>Aggiungi</Button>
        </div>
    )
}
export default newComment