function TodoItem2 (){
    let todoName = "Come on Boys";
    let todoDate = "10/10/2026";
    return (
      <div className=" row dg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
}
 export default TodoItem2;