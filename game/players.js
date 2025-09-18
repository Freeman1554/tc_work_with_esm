export class myPlayer{
    constructor(NoOfPlayers){
        this.NoOfPlayers = NoOfPlayers
    }
    playing(){
        if(this.NoOfPlayers < 12){
            return 'something is obviously wrong somewhere'
        }else{
            return `Lets play our game in ${location}`
        }
    }
}