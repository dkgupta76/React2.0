import FoodItems from './components/FoodItems';
import ErrorMassage from './components/ErrorMassage';
import'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 
import Container from './components/Container';

function App() {

  // let foodItems = [];

   let foodItems = ["Dal", "Green Vegitable", "Roti", "Salad", "Milk"];

  // let emptyMessage =  foodItems.length === 0 ? <h3>I am Still Hungry </h3> : null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        {/* Above have the ternary opration which have helping the cheack foodItem have impty or full */}

        {/* <ul className="list-group">

        {foodItems.map((item) => <li key ={item}className='list-group-item'>{item}</li>)}


      </ul> */}

        <ErrorMassage items={foodItems}></ErrorMassage>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;


// little notes for the better understanding the concepts 


// 2. Understand each part separately
// <li key={item} className="list-group-item">{item}</li>
// 1

// <li> — List item

// An HTML element that represents one item in an ordered or unordered list.

// 2

// key={item} — React key

// A unique identifier that helps React track individual items when a list changes.
// {/*  */}
// 3

// {/* className="list-group-item" — CSS class */}

// {/* Applies styling to the list item. list-group-item is a Bootstrap CSS class. */}

// 4

// {/* {item} — Dynamic content */}

// {/* Displays the current value of the item variable on the webpage. */}