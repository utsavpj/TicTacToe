import React, { useState } from "react";
import "./Tictactoe.css";

function Tictoe(){
    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(''))
   // const [winner,setWinner] = useState()

    function handleClick(num) {
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
        
        setCells(squares)
        console.log(cells)
        
        };
      
        function Cell({num}) {
          return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
        };
      
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

              </div>
            
        );
      }

export default Tictoe;