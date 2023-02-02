import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
    <Tittactoe />
    </div>
  );
}
function Tittactoe(){

const [board,setBoard]=useState([null,null,null,null,null,null,null,null,null])


//copy board value
const [isXturn,setIsXturn]=useState(true)

const winvalue=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

//if winning condition present in board then we have a winner
const decideWinner=()=>{
  
  for (let i = 0; i < winvalue.length; i++) {

    //destructure array
   const [a, b, c] = winvalue[i];
     if(board[a]!=null && board[a]===board[b] && board[b]===board[c]){
       console.log("The winner is :",board[a])
       return board[a]
     }
  }
  return null
 }
 const winner=decideWinner();


//set whos turn 
const handliClick=(ind)=>{
  
  //only whne the box is empty ->allow to change
  //allow edit ->box is empty and no winner
  if(board[ind]===null && winner===null){

 //copy board value
    const copyboard=[...board]
    copyboard[ind]=isXturn===true? "X":"O"
    //set board value with copyboard updaetd one
    setBoard(copyboard)
    //set IsXturn value

    setIsXturn(isXturn===true? false:true)
  
  }
 
}

const reset=()=>{
 const boardvalue=[null,null,null,null,null,null,null,null,null]
 setBoard(boardvalue)
 setIsXturn(true)
}

  return(
    <div className="add-movie-form">
      <h1>TitTacToe Game</h1>
      <div className='board'>
      {board.map((board,index)=>(
        <GameBox val={board} onPlayerClick={()=>handliClick(index)} key={index} />
      ))}
      
      </div>
      <Button onClick={()=>reset()} color="secondary">Reset</Button>
   
    {winner!=null?<h1>The winner is : {winner}</h1>:""}
    
    </div>
  )
}

function GameBox({val,onPlayerClick}){
  //const val="X"
  //conditional styling : X-> green O->red

  //const [val,setVal]=useState(null)
  const styles={
    color:val==="X"?"green": "red"
  }

  
  return(
    <div className='game-box' style={styles}
    onClick={()=>onPlayerClick()}
    >
     {val}
    </div>
  )
}
// Task
// 1. Draw condition
// 2. Choose to play first "X" or "O"
// 3. Whose turn is it?// 4. Style it
export default App;
