import PlayerInfo from "./scripts/playerInfo"
import PlayerRank from "./scripts/playerRank"
import MatchHistory from "./scripts/matchHistory"
import api_key from "./scripts/apikey"
import WinRatio from "./scripts/winRatio"
import Modal from "./scripts/modal"

document.addEventListener('DOMContentLoaded', () => {
    const api = api_key

        fetch(`https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/mínasrmy?api_key=${api}`)
        .then(response => response.json())
        .then(data => {
            new PlayerInfo(data)
            new MatchHistory(data, api)
            return fetch(`https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${data.id}?api_key=${api}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length === 0) {
                            new WinRatio(0, 0)
                        } else {
                            new WinRatio(data[0].wins, data[0].losses)
                        }
                        new PlayerRank(data)
                    })
        })

        const submitButton = document.querySelector(".search-bar button");
        const usernameInput = document.querySelector("#username-input");

        submitButton.addEventListener("click", function (e) {
            e.preventDefault();
            
            const username = usernameInput.value;

        fetch(`https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${username}?api_key=${api}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                new PlayerInfo(data)
                new MatchHistory(data)
                return fetch(`https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${data.id}?api_key=${api}`)
                    .then(response => response.json())
                    .then(data => {
                        if(data.length === 0){
                            new WinRatio(0, 0)
                        } else {
                            new WinRatio(data[0].wins, data[0].losses)
                        }
                        new PlayerRank(data)
                    })
            }).catch(error => {
                alert("User Is Not Found, Try Again")
            })
    })
})