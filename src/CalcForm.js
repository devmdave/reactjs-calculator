import React,{useState} from "react";

export default function CalcForm() {
  const [num1text,setNum1text] = useState('0')
  const [num2text,setNum2text] = useState('0')
  const [result,setResult] = useState('result will shown here')
  const hocfirstnum= (event) =>{
    setNum1text(event.target.value)

    

  }
  const hocsecondnum = (event)=>{
    
    setNum2text(event.target.value)
    

  }
  const Sum = (event)=>{
    setResult(parseInt(num1text)+parseInt(num2text))
  }
  const Product = (event)=>{
    setResult(parseInt(num1text)*parseInt(num2text))
  }
  const Divide = (event)=>{
    setResult(parseInt(num1text)/parseInt(num2text))
  }
  const Diff = (event)=>{
    setResult(parseInt(num1text)-parseInt(num2text))
  }

  return (
    

    <>
    
    <label htmlFor="" className="my-2 mx-3 d-block" va>Enter the first number</label>
    <input className="mx-3 form-textbox " type="text" value={num1text} onChange={hocfirstnum}/>
    <label htmlFor="" className="my-2 mx-3 d-block">Enter the second number</label>
    <input className="mx-3 form-textbox" type="text" value={num2text} onChange={hocsecondnum}/>
    <label htmlFor="" className="my-2 mx-3 fw-bold d-block">Result</label>
    <input className="mx-3 form-textbox" type="text" value={result}  />
    <div className="my-3">
    {/* <span className="d-block mx-3 my-3 "> Calculation Functions</span> */}
    
    <button className="btn btn-outline-dark mx-3 my-1 fw-bold" onClick={Sum}>Sum</button>
    <button className="btn btn-outline-dark mx-3 my-1 fw-bold"  onClick={Diff}>Diffrence</button>
    <button className="btn btn-outline-dark mx-3 my-1 fw-bold"  onClick={Divide}>Quotient</button>
    <button className="btn btn-outline-dark mx-3 my-1 fw-bold"  onClick={Product}>Product</button>
    
    <div >
    <hr />
      <span className="text-priamry fw-bold d-block mx-3 my-2">Math and Physics</span>
      
      <button className="btn btn-outline-dark mx-2 my-1 fw-bold"  onClick={Product}>Length Converter</button>
      <button className="btn btn-outline-dark mx-2 my-1 fw-bold"  onClick={Product}>Area Calculator</button>
      <button className="btn btn-outline-dark mx-2 my-1 fw-bold"  onClick={Product}>BMI calculator</button>
      <button className="btn btn-outline-dark mx-2 my-1 fw-bold"  onClick={Product}>Intrest Calculator</button>
      <button className="btn btn-outline-dark mx-2 my-1 fw-bold"  onClick={Product}>Discount Calculator</button>
      <button className="btn btn-outline-dark mx-2 my-1 fw-bold"  onClick={Product}>Speed Calculator</button>
      
      


    </div>
    </div>
    <hr />
      <span className="text-priamry fw-bold d-block mx-3 my-2">Fitness Calculator </span>
    

    </>
    
    
  );
}
