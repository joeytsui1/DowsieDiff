class PlayerInfo{
    constructor(data){
        this.data
        this.playerInfo(data)
    }

    playerInfo(data){
        let iconId = data.profileIconId
        let image = document.querySelector('#icon-pic')
        image.src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${iconId}.jpg`
        const playerLevel = document.querySelector('#player-level')
        username.innerHTML = `${data.name}`
        playerLevel.innerHTML = `Level ${data.summonerLevel}`
    }
}

export default PlayerInfo