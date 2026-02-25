import { useState } from "react";
export default function LudoBoard(){
    let [moves,setMoves]= useState({blue: 0, red: 0,yellow: 0, green: 0});
    let [arr,setArr] =useState(["no moves"]);
    let updateBlue = () =>{
     
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) =>{
            return {
                ...prevMoves,blue:prevMoves.blue+1
            };
        });
        setArr((prevArr) => {
            return(
            [...prevArr,"blue moves" ]);
        });
        console.log(arr);
    };
     let updateRed = () =>{
     
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves({...moves,red: moves.red + 1});
    };
     let updateGreen = () =>{
     
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves({...moves,green: moves.green + 1});
    };
     let updateYellow= () =>{
     
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves({...moves,yellow: moves.yellow + 1});
    };
    return(
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
              <p>Blue Moves={moves.blue}</p>
              <button onClick={updateBlue} style={{backgroundColor: "blue", color:"white"}}>+1</button>
              <p>Red Moves={moves.red}</p>
              <button onClick={updateRed} style={{backgroundColor:"red", color:"white"}}>+1</button>
              <p>Yellow Moves={moves.yellow}</p>
              <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
              <p>Green Moves={moves.green}</p>
              <button onClick={updateGreen} style={{backgroundColor:"green", color:"white"}}>+1</button>
            </div>
        </div>
    );
     
    
}