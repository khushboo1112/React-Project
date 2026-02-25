import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
let oldPrices = ["12,495","11,900","1,599","599"];
let newPrices = ["8,999","9,199","899","299"];
let description = [
    ["8,000 DPI","5 Programmable buttons"],
    ["intutive surface","designed for ipad Pro"],
    ["designed for ipad Pro","intutive suface"],
    ["wirless","optical orientation"],
];
return (
    <div className="Product">
        <p><b>{title}</b></p>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
       <Price oldPrice={oldPrices[idx]} newPrice ={newPrices[idx]}/>

    </div>
        
    );
}
export default Product;


// function Product({title,price,features}){
// // const list = features.map((feature) => <li>{feature}</li>);
// let isDiscount = price >30000;
//   let styles = {backgroundColor : isDiscount ? "lightblue" : "lightyellow"};
//     return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price: {price}</h5>
//             {isDiscount && <p>Discount: 5% </p>}
//             {/* {price > 3000 ? <p>"Discount is 5%"</p> : null} */}
//             {/* <p>{list}</p> */}
//         </div>
//     );
// }