class PlayerInfo{
    constructor(data){
        this.data
        this.playerInfo(data)
    }

    playerInfo(data){
        console.log(data)
        console.log(data.name)
        console.log(data.summonerLevel)
        let iconId = data.profileIconId
        let image = document.querySelector('#icon-pic')
        image.src = `/dragontail-13.21.1/13.21.1/img/profileicon/${iconId}.png`

        const playerLevel = document.querySelector('#player-level')
        username.innerHTML = `${data.name}`
        playerLevel.innerHTML = `Level ${data.summonerLevel}`
    }
}

export default PlayerInfo