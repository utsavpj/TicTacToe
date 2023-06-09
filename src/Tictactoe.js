import React, { useState } from "react";
import "./Tictactoe.css";

function Tictactoe() {
  const [turn, setTurn] = useState('X')
  const [cells, setCells] = useState(Array(9).fill(''))
  const [winner,setWinner] = useState()

  const checkForWinners = (squares) =>{
    let combos = {
        across:[
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ],
        down:[
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ],
        diagonal:[
            [0,4,8],
            [2,4,6]
        ]
    };

    for(let combo in combos){
        
        combos[combo].forEach(pattern => {
            if(squares[pattern[0]]==='' ||
            squares[pattern[1]]==='' ||
            squares[pattern[2]]==='' 
            ){
                //nothing
            }
            else if(
                squares[pattern[0]]=== squares[pattern[1]] &&
                squares[pattern[1]]=== squares[pattern[2]] 
            ){
                console.log('winner:', squares[pattern[0]]);
                setWinner(squares[pattern[0]]);
            }
        });

    }
  }

  const handleClick = (num) => {
  if(cells[num] !== ''){
    alert('value already exist')
    return;
    
  }  
  let squares = [...cells]

  if(turn === 'X'){
    squares[num] = 'X'
    setTurn('O')
  }
  else{
    squares[num] = 'O'
    setTurn('X')
  }  
  checkForWinners(squares)
  setCells(squares)
  
  };

  const Cell = ({num}) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  const playAgainClick = () => {
    setTurn('X');
    setCells(Array(9).fill(''));
    setWinner(null); 
  }

  return (
    <div className="container">
      
      <table>
        <thead>
        <th colSpan={2}><h1>Turn: {turn}</h1></th>
        </thead>
        <tbody>
          <tr>
            <Cell num={0}/>
            <Cell num={1}/>
            <Cell num={2}/>
          </tr>

          <tr>
            <Cell num={3}/>
            <Cell num={4}/>
            <Cell num={5}/>
          </tr>

          <tr>
            <Cell num={6}/>
            <Cell num={7}/>
            <Cell num={8}/>
          </tr>
        </tbody>
      </table>
      {winner && (
        <div>
        <p>{winner} is the winner!!</p>
        <button onClick={playAgainClick}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Tictactoe;
