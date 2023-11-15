import Top4Chart from "./top4Chart";
import UnitStats from "./unitStats";
import api_key from "./apikey";

class MatchHistory {
    constructor(data, api) {
        this.api = api
        this.data = data
        this.data.puuid;
        this.placements = []
        this.unitsPlayed = []
        this.top4forUnits = {}  
        this.getMatchData()
    }

    resetTable() {
        let table = document.querySelector("#table")
        table.innerHTML = ""
    }

    getMatchData() {
        const api = api_key
        
        fetch(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${this.data.puuid}/ids?start=0&count=20&api_key=${api}`)
            .then(response => response.json())
            .then(data => {
                const matches = data.map(match => {
                    return fetch(`https://americas.api.riotgames.com/tft/match/v1/matches/${match}?api_key=${api}`)
                })
                return Promise.all(matches)
            })
            .then(matchResponses => Promise.all(matchResponses.map(res => res.json())))
            .then(matches => {

                this.resetTable()
                matches.forEach(match => {
                    this.displayMatches(match)
                })

                new Top4Chart(this.placements)
                new UnitStats(this.unitsPlayed)
            })
            .catch(err => err)
    }

    displayMatches(match) {
            let table = document.querySelector("#table")
            let row = table.insertRow();
  
            
            let placement = row.insertCell();
            let date = row.insertCell();
            let unitsInGame = row.insertCell();

            let players = match.metadata.participants
            let index;
            for (let i = 0; i < players.length; i++) {
                if (players[i] === this.data.puuid) {
                    index = i
                }
            }

            if (match.info.queue_id === 1100) {
                let eachPlacement = match.info.participants[index].placement
                if (eachPlacement === 1) {
                    placement.innerHTML = `${eachPlacement}st`
                } else if (eachPlacement === 2) {
                    placement.innerHTML = `${eachPlacement}nd`
                } else if (eachPlacement === 3) {
                    placement.innerHTML = `${eachPlacement}rd`
                } else {
                    placement.innerHTML = `${eachPlacement}th`
                }

                    let currentDate = new Date(match.info.game_datetime);
                    let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                    let formattedDate = currentDate.toLocaleString(undefined, options);
                    date.innerHTML = formattedDate;

                this.placements.push(match.info.participants[index].placement)

                let units = match.info.participants[index].units

                units.forEach(unit => {
                    
                    let img = document.createElement("img")
                    let unitName = unit.character_id.slice(5);
    
                    if(!["JarvanIV", "KSante", "reksai", "MissFortune", "_Aatrox"].includes(unitName)){
                        unitName = unitName.charAt(0).toUpperCase() + unitName.slice(1).toLowerCase()
                    }
                     if(unitName === "_Aatrox"){
                        unitName = "Aatrox"
                    }

                    if(unitName === "reksai"){
                        unitName = "RekSai"
                    }

                    // let lowercase = unitName.charAt(0).toUpperCase() + unitName.slice(1).toLowerCase()
                    let cost = unit.rarity
                    img.src = `https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/${unitName}.png`
                    img.setAttribute('class', `cost${cost}`)
                    unitsInGame.appendChild(img)
                    this.unitsPlayed.push(unitName)
                })           
            }
        }
    }

export default MatchHistory