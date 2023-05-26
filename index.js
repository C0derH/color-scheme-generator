
document.getElementById("get-scheme-btn").addEventListener("click",handleGetSchemeBtnClick)

let colorsArray = []
function handleGetSchemeBtnClick(){
    const colorInputValue = document.getElementById("color-input-el").value.substring(1)
    const selectBoxValue = document.getElementById("color-schemes").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputValue}&&mode=${selectBoxValue}&count=5`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(item => {
                colorsArray.push(item.hex.value)
            })
            renderColorsArray()
        })
}


function renderColorsArray(){
    let colorsHtml = ""
    colorsArray.forEach(color => {
        colorsHtml +=`
            <div class="color-container">
                <div class="color" style = "background-color : ${color}"></div>
                <h3 class="color-code">${color}</h3>
            </div>
            `
    })
    document.getElementById("color-scheme-container").innerHTML = colorsHtml
    colorsArray = []
}