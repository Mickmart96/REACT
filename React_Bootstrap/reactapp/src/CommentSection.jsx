import SingleComment from "./SingleComment"
import NewComment from "./newComment"
import { useState, useEffect } from "react"
import { Spinner,Alert } from 'react-bootstrap';

const CommentSection = ({asin}) => {
    const [isLoading, setLoading]= useState(false)
    const [isError, setError]= useState(false)
    const [comments,setComments] = useState(null)
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MWVhNWMwNTgzNTAwMTg1MjJjYTAiLCJpYXQiOjE3MDUzNjMyNTcsImV4cCI6MTcwNjU3Mjg1N30.pMtpodCPPbdkBAGeYnCouPvOyzleZAKxVtLz7KCJRvM"

    const fetchData = async () => {
        setLoading(true)
        try{
          const res = await fetch('https://striveschool-api.herokuapp.com/api/books/'+ asin + '/comments',{
            headers:{
                Authorization: token
            }
          })
          if (res.ok) {
            let data = await res.json()
            setComments(data)
            setLoading(false)
          } else{
            console.log('errore fetching')
            setError(true)
            setLoading(false)
          }
        }
        catch{error}{
            console.log('error')
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return(
        <div style={divStyle } className='mt-3 rounded' >
            
            {isLoading&&<Spinner animation="border" />}
            {isError&&<Alert  variant={ 'danger'}>This is alert—check it out!</Alert>}
            <h3>Commenti</h3>
            {comments&&comments.length >0 ?
            comments.map ((comm,index) =>  <SingleComment comm={comm} key={index}/>)
            : <p>non ci sono commenti</p>}
         <NewComment />
        </div>
    )
}

const divStyle= {
    backgroundColor:'#E4E6E7',
    padding: '10px',
    border: '1px',

}
 export default CommentSection
