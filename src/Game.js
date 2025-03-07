import React, { useState, useEffect } from "react";
import "./css/Game.css";
let currentLocation = 1;
let target = 5;
let impossible = false;
let resetMoves = [];
let startup = true;

function Game() {
    const [targetCell, setTargetCell] = useState(target);
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        setTargetCell(target);
    }, [target]);

    useEffect(() => {
        Restart(setTargetCell, setMoves);
    }, []);

    return (
        <div id="game">
            <h1 style={{ textAlign: 'center' }}>Halting Problem- The Game</h1>
            <div id="instructions" style={{ display: 'block' }}>
                <h2 style={{ textAlign: 'center' }}>Instructions</h2>
                <p>1. Click the button to start the game</p>
                <p>2. There will be a target number. Your goal is to get the machine to reach this number. The machine starts at grid 1.</p>
                <p>3. You are given a random set of positive and negative numbers. Selecting one will move the machine by that amount. The machine cannot go past the tape (these moves will not be preformed by the machine). </p>
                <p>4. To win, you must either reach the target number or click the impossible button to state that the problem is not solvable.</p>
                <button onClick={() => {Restart(setTargetCell, setMoves); document.getElementById('instructions').style.display = 'none';document.getElementById('game-board').style.display = 'block';}}>
                    Start Game!
                </button>
            </div>
            <div id="win" style={{ display: 'none' }}>
                <h1 style={{ textAlign: 'center' }}>You Win!</h1>
                <p>Thank you for playing this simple game!</p>
                <button style={{ display: 'block', margin: 'auto' }} onClick={() => {Restart(setTargetCell, setMoves); document.getElementById('game-board').style.display = 'block';}}>Play Again</button>
            </div>
            <ShowTarget targetCell={targetCell} />
            <div id="game-board" style={{ display: 'none' }}>
                <div id="machine">v</div>
                <div id="tape">
                    <MakeBoard />
                </div>

                <div id="moves">
                    <DisplayMoves moves={moves} setMoves={setMoves} />
                </div>
                <div id = 'button-row'>
                    <button onClick={() => Restart(setTargetCell, setMoves)}>Restart</button>
                    <button onClick={() => Reset(setMoves)}>Reset</button>
                    <button onClick={Impossible}>Impossible</button>
                    <button onClick={() => {document.getElementById('instructions').style.display = 'block'; document.getElementById('game-board').style.display = 'none';}}>Instructions</button>
                </div>
            </div>
        </div>
    );
}

function ShowTarget({ targetCell }) {
    return (
        <div id="target">
            <h2 style={{ textAlign: 'center' }}>Target Cell: {targetCell}</h2>
        </div>
    );
}

function DisplayMoves({ moves, setMoves }) {
    let i = 0;
    const moveDivs = moves.map((item, index) => {
        return (
            <div
                className='possible-moves'
                onClick={() => move(index, moves, setMoves)}
                id={index}
                key={index}
                value={item}
                style={{border: (item + currentLocation > 10 || item + currentLocation < 1) ? '1px solid rgb(255, 0, 0)' : '1px solid rgb(0, 255, 0)'}}
            >
                {item}
            </div>
        );
    });

    return (
        moveDivs
    );
}

function MakeBoard() {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const boardItems = board.map((item) => {
        return <div className='board-items' id={item} key={item}>{item}</div>
    });
    return (
        boardItems
    );
}

function Impossible() {
    if (impossible) {
        document.getElementById('win').style.display = 'block';
        document.getElementById('game-board').style.display = 'none';
    } else {
        alert('The problem is solvable. Try again!');
    }
}

function Reset(setMoves) {
    currentLocation = 1;
    setMoves(resetMoves);
    document.getElementById('machine').style.left = `calc(50vw + ${(currentLocation-1) * 31}px - 156px)`;
}

function Restart(setTargetCell, setMoves) {
    currentLocation = 1;
    target = Math.floor(Math.random() * 9) + 2;
    const newMoves = [];
    for (let i = 0; i < 6; i++) {
        newMoves.push(Math.floor(Math.random() * 10) + 1 - 5);
    }
    resetMoves = newMoves;
    document.getElementById('win').style.display = 'none';
    document.getElementById('machine').style.left = `calc(50vw + ${(currentLocation-1) * 31}px - 156px)`;
    startup = false;
    isSolvable(newMoves);
    setTargetCell(target);
    setMoves(newMoves);
}

function move(i, moves, setMoves) {
    console.log(moves[i]);
    if (!(moves[i] + currentLocation > 10 || moves[i] + currentLocation < 1)) {
        currentLocation += moves[i];
        const newMoves = [...moves];
        newMoves.splice(i, 1);
        setMoves(newMoves);

        document.getElementById('machine').style.left = `calc(50vw + ${(currentLocation-1) * 31}px - 156px)`;

        if(target == currentLocation) {
            document.getElementById('win').style.display = 'block';
            document.getElementById('game-board').style.display = 'none';
        }
    }
}

function isSolvable(moves) {
    const possibleSums = new Set();
    const n = moves.length;

    function findSums(index, currentSum) {
        if (index === n) {
            possibleSums.add(currentSum);
            return;
        }

        // Include the current move
        findSums(index + 1, currentSum + moves[index]);

        // Exclude the current move
        findSums(index + 1, currentSum);
    }

    // Start the recursive function
    findSums(0, 1); // Start from position 1

    // Check if the target is in the possible sums
    if (possibleSums.has(target-1)) {
        impossible = false;
    } else {
        impossible = true;
    }
}

export default Game;