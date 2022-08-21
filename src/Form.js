import React,{useState} from 'react'


const FormRc = () => {

    const [paymentDone, setpaymentDone] = useState({
        Date : "",
        Amount : "",
        Paymentmode:"",
        Remarks : ""

    })
     const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setpaymentDone({...paymentDone, [name]: value})


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...paymentDone, id : new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setpaymentDone({Date:"", Amount:"", Paymentmode: "", Remarks:""});
    }

    
  return (
    <>
    <div className='info'>
        The Payment details entered by the user will be displayed in the Table given below.
    </div>
    <br/>
    <br/>
    <div className='rec'>
        <h4>RECEIPT DETAILS</h4>
    </div>
    <br/>
    <br/>
    <form className='form' action='' onSubmit={handleSubmit} autoComplete ="off">
    <div class="row">
      <div class="col-25">
           <label htmlFor='Date'>Enter Date</label>
           <input type="date"
           value = {paymentDone.Date}
           onChange={handleInput} 
           name ="Date" id = "date"/>
        </div>
        </div>
        <br/>

        <div className='lab'>
           <label htmlFor='Amount'>Enter Amount</label>
           <input type="text" 
           value = {paymentDone.Amount}
           onChange={handleInput}
           name ="Amount" id = "amount"
            placeholder='Enter the amount in INR'
           />
        </div>
        <br/>

        <div className='labP'>
           <label htmlFor='Payment Mode'>Payment Mode</label>
           <select
            id = "payment mode" name = "Paymentmode" value = {paymentDone.Paymentmode} onChange={handleInput} >
           <option>Choose Payment Mode</option>
           <option>Cash</option>
           <option>Online</option>
           <option>Cheque</option>
           </select>
           
        </div>
        <br/>

        <div className='rem'>
           <label htmlFor='Remarks'>Remarks</label>
           <input type="text"
           value = {paymentDone.Remarks}
           onChange={handleInput}
            name ="Remarks" id = "remarks"
                placeholder='Enter Remarks'
            />
        </div>
        <br/>
        <br/>

        <button type="submit">Submit</button>
    </form>
    <br/>
    <br/>
    <div className='TableBox'>
    <h2 className='payhead'> PAYMENTS </h2>
    <br/>
    
        
            
                    
                   
                    
                    <table className='ptable'>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment Mode</th>
                            <th>Remarks</th>
                        </tr>
                        {records.map((curElem) => {
                            return (
                        <tr>
                            <td>{curElem.Date}</td>
                            <td>{curElem.Amount}</td>
                            <td>{curElem.Paymentmode}</td>
                            <td>{curElem.Remarks}</td>
                        </tr>
                            )
                        
                        })}
                    </table>
                    </div>
                    
                
                        

    </>
  )
                    }


export default FormRc