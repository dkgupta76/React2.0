function TodoItem1 (){
    let todoName = "Buy Milk";
    let todoDate = "4/10/2026";
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
export default TodoItem1;