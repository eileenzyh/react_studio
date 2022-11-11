import "./BakeryItem.css"
// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (
        <div className = "BakeryItem">
            <h2>{props.item.name}</h2>
            {props.item.description}
            <p> Price: {props.item.price} </p>
            <img src = {props.item.image} alt = 'Breads/Cakes'></img> 
            <button onClick = {() => {props.addToCart(props.item)}}>ADD TO CART</button>
        </div>
    )
}

export default BakeryItem