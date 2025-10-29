function Pizza(props) {
  return (
    <div className={`pizza ${props.pizza.soldOut && "sold-out"}`}>
      <img src={props.pizza.photoName} alt={props.pizza.name}/>
      <div className="pizza-text">
        <h3>{props.pizza.name}</h3>
        <p>Ingredientes: {props.pizza.ingredients}</p>
      </div>
    </div>
  );
}

// function Pizza({pizza}) {
//   return (
//     <div className="pizza">
//       <img src={pizza.photoName} alt={pizza.name}/>
//       <div className="pizza-text">
//         <h3>{pizza.name}</h3>
//         <p>Ingredientes: {pizza.ingredients}</p>
//       </div>
//     </div>
//   );
// }

// function Pizza({pizza, parametro}) {
//   return (
//     <div className="pizza">
//       <img src={pizza.url} alt={pizza.name}/>
//       <div className="pizza-text">
//         <h3>{pizza.name}</h3>
//         <p>Ingredientes: {pizza.ingredientes}</p>
//         <p>{parametro}</p>
//       </div>
//     </div>
//   );
// }

export default Pizza;