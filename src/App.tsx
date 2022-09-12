import React, {useEffect, useState} from 'react';
import './App.css';
import {Canvas} from "./components/Canvas";
import {Modal} from "./components/Modal";

const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/");

function App() {
    //Creating a state for storing puzzle map
    const [currentMap, setCurrentMap] = useState([[""]]);

    const [isShown, setIsShown] = useState(false)
    const [modalText, setModalText] = useState("")

    function closeModal(){
        setIsShown(false)
    }


    //Connect to websocket as the App component renders
    //Also initialize event listeners
    useEffect(() => {
        socket.onmessage = (message) => {
            if (message.data[0] == "v") {
                //Processing response about verification (call modal window)
                setIsShown(true)
                setModalText(message.data)
            }
            if (message.data[0] == "m") {
                //Processing map response and converting to matrix
                let map = message.data.split("\n").slice(1, -1)
                map.forEach((item: string) => item.split(''))
                map = map.map(function (item: string) {
                    return item.split("")
                });

                setCurrentMap(map)
            }

        };

        //Sending requests
        socket.onopen = (event) => {
            //Initiation requests
            socket.send("new 1")
            socket.send("map")

            //Some troubles with listeners and I couldn`t fix it,
            // so I go forward with setTimeout (I tried Intervals wit Listeners)
            setTimeout(() => {
                document.getElementById('verify')?.addEventListener('click', () => {
                    socket.send('verify')
                })

                let colection = document.getElementsByClassName("puzzleToTouch")
                Array.prototype.slice.call(colection).forEach((item) => {
                    //Set click listeners on table items, that lies on canvas
                    item.addEventListener("click", () => {
                        const [x, y] = item.id.split('-')
                        socket.send(`rotate ${x} ${y}`)
                        socket.send('map')
                    })
                })


                //Set switcher between levels and cleanup old click listeners
                for(let i = 1; i < 7; i++){
                    document.getElementById(`Level${i}`)!.addEventListener('click', () => {
                        socket.send(`new ${i}`)
                        socket.send("map")
                        setTimeout(() => {
                            let colection = document.getElementsByClassName("puzzleToTouch")
                            Array.prototype.slice.call(colection).forEach((item) => {
                                const itemClone = item.cloneNode(true);

                                item.parentNode.replaceChild(itemClone, item)

                                itemClone.addEventListener("click", () => {
                                    const [x, y] = item.id.split('-')
                                    socket.send(`rotate ${x} ${y}`)
                                    socket.send('map')
                                })
                            })
                        }, 2000)
                    })
                }
            }, 500)

        }


    }, [])


    return (
        <div className="App">
            <header className="App-header">
                <div className={"choiceLine"}>
                    <button id={"Level1"} className={"button"}>1</button>
                    <button id={"Level2"} className={"button"}>2</button>
                    <button id={"Level3"} className={"button"}>3</button>
                    <button id={"Level4"} className={"button"}>4</button>
                    <button id={"Level5"} className={"button"}>5</button>
                    <button id={"Level6"} className={"button"}>6</button>
                </div>
                <Canvas thisMap={currentMap}/>

                <button id={'verify'} className={"button"}>Verify</button>


            </header>
            <Modal isShown={isShown} text={modalText} closeModal={closeModal}/>
        </div>
    );
}

export default App;
