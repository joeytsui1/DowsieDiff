class PlayerInfo{
    constructor(data){
        this.data
        this.playerInfo(data)
    }

    playerInfo(data){
        let iconId = data.profileIconId
        let image = document.querySelector('#icon-pic')
        image.src = `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/${iconId}.png`

        const playerLevel = document.querySelector('#player-level')
        username.innerHTML = `${data.name}`
        playerLevel.innerHTML = `Level ${data.summonerLevel}`
    }
}

export default PlayerInfo