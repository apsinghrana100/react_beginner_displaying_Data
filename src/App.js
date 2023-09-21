import './App.css';

function ProductCategory() {

}


function ProductRow({ value }) {

  console.log(value)
  value.forEach(element => {
    console.log(element)
  });
  return (
    <>

      <tr>
        <td>apple</td>
        <td>manogo</td>
      </tr>
    </>
  )
}


function ProductTable() {
  return (
    <>
      <div className='product-table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th>Fruits</th>
              </tr>
            <tr>
              <td>apple               1</td>
            </tr>
            <tr>
              <td>manogo              1</td>
            </tr>
          </tbody>

        </table>

      </div>

    </>
  )
}

function SearchBar() {
  return (
    <>
      <form>
        <div className='searchBar'>
          <input type="text" placeholder="Search.." />
          <label>
            <input type='checkbox' />
            Only show product in Stock
          </label>
        </div>
      </form>
      <ProductTable />
    </>
  )
}

function FilterProductTable() {

  return (
    <div className="main-container">
      <SearchBar />
    </div>

  )

}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return (
    <FilterProductTable />
  );
}

// export default App = (()=>{
//   return (
//          <FilterProductTable />
//       );
// });


