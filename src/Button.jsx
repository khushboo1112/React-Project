function printHello() {
    console.log("Hello");
}
function printBye() {
    console.log("Byee");
}
function printDblClick() {
    console.log("Hello Amazon");
}

export default function Button(){
    return (
            <div>
               <button onClick={printHello}>Click Me</button>
               <p onMouseOver={printBye}>Click Here</p>
               <button onDoubleClick={printDblClick}>Double Click Me</button>
            </div>
    );
}