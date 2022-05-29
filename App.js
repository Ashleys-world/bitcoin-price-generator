function process(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.text())
    .then(data =>{ 
        console.log(data)
        const info = JSON.parse(data)
        document.getElementById("displayTime").innerHTML = info.time.updated
        document.getElementById("displayChartname").innerHTML = info.chartName
        document.getElementById("displayCode").innerHTML = info.bpi.USD.code
        document.getElementById("displaySymbol").innerHTML = info.bpi.USD.symbol
        document.getElementById("displayDescription").innerHTML = info.bpi.USD.description
        document.getElementById("displayRate").innerHTML = info.bpi.USD.rate
        document.getElementById("displayDisclaimer").innerHTML = info.disclaimer
    }) 
};
