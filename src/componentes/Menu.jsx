import Pizza from "./Pizza";
import pizzaData from "../data/data.js";

function Menu() {

    // const pizza_focaccia = {
    //     url: "pizzas/focaccia.jpg",
    //     name: "Focaccia",
    //     ingredientes: "tomate, lo que sea..."
    // };

    return (
        <div className="menu">
            <h2>Menu Pizza</h2>
            <div className="pizzas">
                {/* <Pizza pizza={{
                    url: "pizzas/focaccia.jpg",
                    name: "Focaccia",
                    ingredientes: "tomate, lo que sea..."
                    }} 
                    parametro="Lo que sea"
                />
                <Pizza pizza={pizza_focaccia} parametro="Lo que sea"/> */}
                {pizzaData.map((pizza) => 
                    (<Pizza key={pizza.name} pizza={pizza}/>)
                )}
            </div>
        </div>
    );
}

export default Menu;

// -------------------------------------------------------------------------------------------------

// import Pizza from "./Pizza";
// import pizzaData from "../data/data.js";

// const Menu = () => {
//   const pizzaComponents = [];
//   pizzaData.forEach((itemPizza) => {
//     pizzaComponents.push(<Pizza key={itemPizza.id} pizza={itemPizza} />);
//   });
//   return (
//     <main className="menu">
//       <h2>Menu Pizza</h2>

//       <div className="pizzas">{pizzaComponents}</div>
//     </main>
//   );
// };

// export default Menu;