import Order from "./Order";

function Footer() {
  console.log("movidas dev2 footer");
  const openHour = "10";
  const closeHour = "19";
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  console.log(isOpen);

  const objectOrder = { openHour, closeHour };
  return (
    <footer className="footer">
      <div>
        <p>Soy el footer</p>
        {isOpen && (
          <Order openHour={openHour} closeHour={closeHour} />
          // <Order order={objectOrder}/>
        )}
        {/* {isOpen ? <p>Esta abierto.</p> : <p>Esta cerrado.</p>} */}
        {/* <button className="btn">Soy un boton</button> */}
      </div>
    </footer>
  );
}

export default Footer;
