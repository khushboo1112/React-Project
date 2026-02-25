import Product from "./Product.jsx";


function ProductTab()
{
 let styles ={
    display : "flex",
    flexWrap :"wrap",
    justifyContent :"center",
    alignItems :'center', 

 };
    return (
    <div style={styles}>
    <Product title = "Logitech MX MAster 35" idx= {0}/>
    <Product title = "Apple Pencil (2nd Gen)" idx={1} />
    <Product title = "Zebronic Zeb-Tranformer" idx={2}/>
    <Product title = "Petronics Toad 23 Wirless Mouse" idx={3}/> 
    </div>
    );
    
}
export default ProductTab;