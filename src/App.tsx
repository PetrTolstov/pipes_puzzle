import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/"
);

type Props = {
    thisMap : string[][]
}
function TableMap({thisMap} : Props){
    let mapHtml = <table>
        <tbody>
        {thisMap.map(
            (item) => <tr>{item.map(
                (element) => <td>{element}</td>
            )}</tr>)
        }
        </tbody>
    </table>
    /*
    console.log(thisMap)
    thisMap.forEach(function(item: any) {
        let tds = ""
        item.forEach((function(item: string) {  tds += `<td>${item}</td>` }))
        mapHtml += `<tr>${tds}</tr>` });
    mapHtml+=""
     */
    return mapHtml
}

function App() {
  const [currentMap, setCurrentMap] =  useState([[""]]);


  async function sendCommand(command : string | ArrayBufferLike | Blob | ArrayBufferView) {
      await (async () => {
          socket.onopen = (event) => {
              socket.send(command)
          }
      })()
  }






    useEffect(() => {
        socket.onmessage = (message) => {
            console.log(message.data)
            if(message.data[0] == "m"){

                let map = message.data.split("\n").slice(1,-1)
                map.forEach((item:string) => item.split(''))
                map = map.map(function(item : string) { return item.split("") });


                console.log(map)
                setCurrentMap(map)
            }

        };



      socket.onopen = (event) => {
          socket.send("new 1")
          socket.send("map")

      }



  }, [])



  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
            <TableMap thisMap={currentMap} />

        </header>
      </div>
  );
}

export default App;
