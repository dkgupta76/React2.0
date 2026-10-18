function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2026";
  return (
    <div classNameName=" row dg-row">
      <div classNameName="col-6">{todoName}</div>
      <div classNameName="col-4">{todoDate}</div>
      <div classNameName="col-2">
        <button type="button" classNameName="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
