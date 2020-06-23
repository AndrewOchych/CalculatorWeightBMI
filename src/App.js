import React, { useState } from "react"
import PT from "prop-types"

function calculateBMI(height, weight) {
    return weight / ((height / 100) ** 2)
}

function tellBMI(bmi) {
    return bmi <= 18.5 ? "Недостатня маса"   :
           bmi <= 24.9 ? "Норма"             :
           bmi <= 29.9 ? "Надлишкова маса"   :
                         "Ожиріння "
}

function tellBMIColor(bmi) {
    return  bmi <= 18.5 ? "warning" :
            bmi <= 24.9 ? "success" :
            bmi <= 29.9 ? "warning" :
                          "danger"
}

function Slider({min, max, value, title, onChange}) {
    return <div>
        <label>
            <strong>{title}</strong><br/>
            <input type="range" min={min} max={max} value={value}
                   onChange={e => onChange(parseInt(e.target.value))} style={{width: "25rem"}}/>
            {" "}
            {value}
        </label>
    </div>
}
Slider.propTypes = {
    min: PT.number.isRequired,
    max: PT.number.isRequired,
    value: PT.number.isRequired,
    title: PT.string.isRequired,
    onChange: PT.func.isRequired,
}

export default function App() {
    let [height, setHeight] = useState(175)
    let [weight, setWeight] = useState(75)
    let bmi = calculateBMI(height, weight)
    let bmiText = tellBMI(bmi)
    let bmiColor = tellBMIColor(bmi)
    return <div className="p-3">
        <h1 className="h3 mb-3">BMI Calculator</h1>
        <Slider min={140} max={200} value={height} title="Ріст, см" onChange={setHeight}/>
        <Slider min={30} max={180} value={weight} title="Вага, кг" onChange={setWeight}/>
        <hr/>
        <div className="mt-2">
            BMI: <strong>{bmi.toFixed(1)}</strong>
            {" "}
            <span className={`badge badge-${bmiColor}`}>{bmiText}</span>
        </div>
    </div>
}