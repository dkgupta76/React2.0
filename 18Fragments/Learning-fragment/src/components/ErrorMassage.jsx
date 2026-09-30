const ErrorMassage = ({items}) =>{


    // let foodItems = ["Dal", "Green Vegitable", "Roti", "Salad", "Milk"];

    return <>{items.length === 0 ? <h3>I am Still Hungry </h3> : null}</>;
}
export default ErrorMassage;