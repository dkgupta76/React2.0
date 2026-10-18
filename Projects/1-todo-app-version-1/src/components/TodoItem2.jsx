function TodoItem2() {
  let todoName = "Come on Boys";
  let todoDate = "10/10/2026";
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
export default TodoItem2;
