function Order({openHour, closeHour}) {
    return (<div className="order">
        <p>Estamos abiertos desde las {openHour} hasta las {closeHour}</p>
        <button className="btn">Comprar</button>
    </div>);
}

export default Order;