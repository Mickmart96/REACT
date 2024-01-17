const SingleComment =({comm}) =>{
   
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MWVhNWMwNTgzNTAwMTg1MjJjYTAiLCJpYXQiOjE3MDUzNjMyNTcsImV4cCI6MTcwNjU3Mjg1N30.pMtpodCPPbdkBAGeYnCouPvOyzleZAKxVtLz7KCJRvM"
   
   const deleteData= async (commentId) => {
    try{
        const res= await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ commentId,{
            method: 'DELETE',
            headers:{
                Authorization: token
            } 
        })
          if (res.ok) {
            console.log('comment deleted')
        } else{
            console.log('errore deleting comment');
        }
    }
    
    catch(error) {
        console.log(error);
    }
    }
return(
<div className="d-flex justify-content-between">
    <div>
    <samll>({comm.rate}) {comm.comment} </samll>
    </div>
    <div>
    <i className="fa-solid fa-trash-can"onClick={()=>deleteData(comm._id)}></i>
    </div>
    </div>
    )
}
export default SingleComment;

