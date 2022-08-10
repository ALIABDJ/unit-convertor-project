/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input")
const btn = document.getElementById("convertion")
const meterFeetTextEL = document.getElementById("meter-feet-text")
const leterGallonTextEl = document.getElementById("liter-gallon-text")
const KiloPoundsTextEl = document.getElementById("kilo-pounds-text")
const convertBtn = document.getElementById("convertion")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function() {
    const baseValue = inputEl.value
    const toMeter = baseValue * meterToFeet
    const toLiter = baseValue / literToGallon
    const toKilogram = baseValue / kiloToPound
    const toFeet = baseValue / meterToFeet
    const toGallon = baseValue * literToGallon
    const toPound = baseValue * kiloToPound

    meterFeetTextEL.textContent = `${baseValue} meter = ${toMeter.toFixed(2)} feet | ${baseValue} feet = ${toFeet.toFixed(2)} meter`
    leterGallonTextEl.textContent = `${baseValue} litters = ${toGallon.toFixed(2)} gallons | ${baseValue} gallons = ${toLiter.toFixed(2)} litter`
    KiloPoundsTextEl.textContent = `${baseValue} kilograms = ${toPound.toFixed(2)} pounds | ${baseValue} pounds = ${toKilogram.toFixed(2)} killogrames}`
})