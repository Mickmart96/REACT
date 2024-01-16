const SingleComment =({comm}) =>{
    return(
<div className="d-flex justify-content-between">
    <div>
    <samll>({comm.rate}) {comm.comment} </samll>
    </div>
    <div>
    <i className="fa-solid fa-trash-can"></i>
    </div>
    </div>
    )
}
export default SingleComment;

