import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/"
);



type Props = {
    thisMap : string[][]
}
function TableMap({thisMap} : Props){
    let mapHtml = <table id={'tableMap'}>
        <tbody>
        {thisMap.map(
            (item, index) => <tr>{item.map(
                (element, i) => <td id={`${index}-${i}`} className={"mapElement"}>{element}</td>
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


  useEffect(() => {
        socket.onmessage = (message) => {
            console.log(message.data)
            if(message.data[0] == "m"){

                let map = message.data.split("\n").slice(1,-1)
                //let map = "┏━╸┏╸╻┏╸\n┣╸╺╋┳┛┃╻\n┗┓┏┛┃╻┃┃\n╻┣┫╻╹┃┣┛\n┃╹┣┫╻┣┻╸\n┗┓┃┗┻┫╻╻\n┏┫┣┓┏╋┛┃\n╹┗┛╹╹┗━┛".split("\n")
                map.forEach((item:string) => item.split(''))
                map = map.map(function(item : string) { return item.split("") });


                console.log(map)
                setCurrentMap(map)
            }

        };



      socket.onopen = (event) => {
          socket.send("new 1")
          socket.send("map")
          window.addEventListener('load', function () {
              console.log('loaded')
              const mapLikeHTMLCollection = document.getElementById('tableMap')!.getElementsByClassName('mapElement')
              console.log(mapLikeHTMLCollection)

              document.getElementById('verify')?.addEventListener('click', () => {
                  socket.send('verify')
              })

              for(let i = 0; i < mapLikeHTMLCollection.length; i++) {
                  mapLikeHTMLCollection.item(i)?.addEventListener('click',  () => {
                    const [y, x] = mapLikeHTMLCollection.item(i)!.id.split("-")
                    socket.send(`rotate ${x} ${y}`)
                    socket.send('map')
                    console.log('done')
                })
              };

          })

      }


  }, [])



  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
            <TableMap thisMap={currentMap} />
            <button id={'verify'}>verify</button>
        </header>
      </div>
  );
}

export default App;
