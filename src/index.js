import PlayerInfo from "./scripts/playerInfo"
import PlayerRank from "./scripts/playerRank"
import MatchHistory from "./scripts/matchHistory"
import api_key from "./scripts/apikey"

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
                        new PlayerRank(data)
                    })
        })
})