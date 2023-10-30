import PlayerInfo from "./scripts/playerInfo"
import PlayerRank from "./scripts/playerRank"
document.addEventListener('DOMContentLoaded', () => {
        fetch(`https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/mínasrmy?api_key=RGAPI-14ffa171-3fe2-40cd-ab39-69fb9e5630aa`)
        .then(response => response.json())
        .then(data => {
            new PlayerInfo(data)
            
            return fetch(`https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${data.id}?api_key=RGAPI-14ffa171-3fe2-40cd-ab39-69fb9e5630aa`)
                    .then(response => response.json())
                    .then(data => {
                        new PlayerRank(data)
                    })
        })
})