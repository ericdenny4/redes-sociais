async function quantidadeUsuarios(){

    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const numerodeUsuarios = Object.values(dados)


    const data = [
        {
            labels: nomeDasRedes,
            values: numerodeUsuarios,
            type: 'pie'
        }
    ]
    var layout = {
        height: 600,
        width: 700,
    }


    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico,data,layout)
}

quantidadeUsuarios()