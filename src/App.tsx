import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
const socket = new WebSocket("wss://hometask.eg1236.com/game-pipes/"
);
let mapLikeHTMLCollection : HTMLCollection


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
    return mapHtml
}


const right = "right"
const left = "left"
const down = "down"
const up = "up"


const puzzlesConfig = {
    "╻": {
        connectsDirections: [up],
        isAHalf: true
    },
    "╹": {
        connectsDirections: [down],
        isAHalf: true
    },
    "╺": {
        connectsDirections: [left],
        isAHalf: true
    },
    "╸": {
        connectsDirections: [right],
        isAHalf: true
    },


    "┗": {
        connectsDirections: [down, left],
        isAHalf: false
    },
    "┏": {
        connectsDirections: [up, left],
        isAHalf: false
    },
    "┓": {
        connectsDirections: [up, right],
        isAHalf: false
    },
    "┛": {
        connectsDirections: [right],
        isAHalf: false
    },


    "┫": {
        connectsDirections: [down, up, right],
        isAHalf: false
    },
    "┻": {
        connectsDirections: [down, left, right],
        isAHalf: false
    },
    "┣": {
        connectsDirections: [down, up, left],
        isAHalf: false
    },
    "┳": {
        connectsDirections: [up, right, left],
        isAHalf: false
    },

    "╋": {
        connectsDirections: [up, down, right, left],
        isAHalf: false
    },

    "━": {
        connectsDirections: [right, left],
        isAHalf: false
    },

    "┃": {
        connectsDirections: [up, down],
        isAHalf: false
    },
}

function checkMap(position : string){

}


function App() {
  const [currentMap, setCurrentMap] =  useState([[""]]);


  useEffect(() => {
        socket.onmessage = (message) => {
            console.log(message.data)

            if(message.data[0] == "v"){
                alert(message.data)
            }
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
              mapLikeHTMLCollection = document.getElementById('tableMap')!.getElementsByClassName('mapElement')
              console.log(mapLikeHTMLCollection)

              document.getElementById('verify')?.addEventListener('click', () => {
                  socket.send('verify')
              })

              for(let i = 0; i < mapLikeHTMLCollection.length; i++) {
                  mapLikeHTMLCollection.item(i)?.addEventListener('click',  () => {
                        const str : string = mapLikeHTMLCollection.item(i)!.textContent!.toString()
                        // @ts-ignore
                      console.log(puzzlesConfig[str])
                        const [y, x] = mapLikeHTMLCollection.item(i)!.id.split("-")
                        socket.send(`rotate ${x} ${y}`)
                        socket.send('map')
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
