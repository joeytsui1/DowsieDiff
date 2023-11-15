import { Chart } from 'chart.js/auto';

class WinRatio{
    constructor(wins, losses) {
        this.wins = wins
        this.losses = losses
        this.makeChart()
    }

    makeChart () {
        var ctx = document.getElementById('win-loss').getContext('2d');
        ctx.height = 500;
        ctx.width = 800;
        let chartStatus = Chart.getChart("win-loss")
        if (chartStatus != undefined) {
            chartStatus.destroy()
        }
        var chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Wins in % Ranked games played', "Losses in % for Ranked games played"],
                datasets: [{
                    label: 'Results',
                    data: [((this.wins/(this.wins + this.losses)) * 100), ((this.losses/(this.wins + this.losses)) * 100)],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.75)',
                        'rgba(255, 99, 132, 0.75)'
                    ],
                    borderColor: [
                        
                        'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: "white"
                            
                        }
                    }
                }
                
            }
        });
    }
}


export default WinRatio