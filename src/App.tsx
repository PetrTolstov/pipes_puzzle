import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {oneOfThree, puzzlesConfig, twoOfThree, wholeNumber} from "./configurations/fieldConfig";
import {TableMap} from "./components/TableMap";
import {canvasRender} from "./helpers/canvasRender";


const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/"
);
let mapLikeHTMLCollection: HTMLCollection





function App() {
    const [currentMap, setCurrentMap] = useState([[""]]);
    useEffect(() => {
        for (let puzzle of Object.keys(puzzlesConfig)) {
            let collectionB = document.getElementsByClassName(puzzle)
            let listOfB = Array.prototype.slice.call(collectionB);
            listOfB.forEach((canvas) => {
                canvasRender(canvas, puzzle)
            })
        }
    }, [currentMap])

    useEffect(() => {
        socket.onmessage = (message) => {
            console.log(message.data)

            if (message.data[0] == "v") {
                alert(message.data)
            }
            if (message.data[0] == "m") {

                let map = message.data.split("\n").slice(1, -1)
                map.forEach((item: string) => item.split(''))
                map = map.map(function (item: string) {
                    return item.split("")
                });

                console.log(map)
                setCurrentMap(map)

            }

        };


        socket.onopen = (event) => {
            socket.send("new 3")
            socket.send("map")
            setTimeout(() => {
                mapLikeHTMLCollection = document.getElementById('tableMap')!.getElementsByClassName('mapElement')

                document.getElementById('verify')?.addEventListener('click', () => {
                    socket.send('verify')
                })


                for (let i = 0; i < mapLikeHTMLCollection.length; i++) {
                    mapLikeHTMLCollection.item(i)?.addEventListener('click', () => {
                        const str: string = mapLikeHTMLCollection.item(i)!.textContent!.toString()
                        // @ts-ignore
                        console.log(puzzlesConfig[str])
                        const [y, x] = mapLikeHTMLCollection.item(i)!.id.split("-")
                        socket.send(`rotate ${x} ${y}`)
                        socket.send('map')
                    })
                }
                ;

            }, 1000)

        }


    }, [])


    return (
        <div className="App">
            <header className="App-header">

                <TableMap thisMap={currentMap}/>

                <button id={'verify'} className={"button"}>Verify</button>


            </header>
        </div>
    );
}

export default App;
