import styles from '../styles/PaymentForm.module.scss'
import { useState, useEffect } from 'react'
import PaymentSuccess from './PaymentSuccess';
import Router from 'next/router'
export default function PaymentForm({retailerInfo}){
    console.log(retailerInfo,"hello Iam the reatiler")
    const [paymentMode, setPaymentMode]= useState("Cash");
    const [paymentStatus, setPaymentStatus]= useState(false);
    const [amountPaid, setAmountPaid]= useState(retailerInfo.pending_Amount?retailerInfo.pending_Amount:100);
    useEffect(() => {
        setTimeout(()=>{
            if(paymentStatus===true ){
                Router.push('/allinvoice')
            }
        },3000)
      },[paymentStatus]);
    function updateData(){
        setPaymentStatus(true)
        const endpoint =new URL(`http://localhost:3000/api/hello`)
        const newPending= retailerInfo.pending_Amount- amountPaid;
        const updatedRetailerObj = {...retailerInfo}
        updatedRetailerObj.pending_Amount= newPending
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedRetailerObj)
        };
        fetch(endpoint,requestOptions)
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }
    return(
        <>
        <div className={styles.formContainer}>
            <div className={styles.inputAmount}>
                <label>Amount</label>
                <span>
                    ₹<input type="number" value={amountPaid} onChange={(e)=>setAmountPaid(e.target.value)}/>
                </span>
            </div>
            <div className={styles.paymentMethodWrapper}>
                Choose Payment Mode:<br/>
                <div className={styles.paymentMethods}>
                    <div className={paymentMode==="Online"?styles.active:null} onClick={()=>setPaymentMode("Online")}>
                        Online
                    </div>
                    <div className={paymentMode==="Cash"?styles.active:null} onClick={()=>setPaymentMode("Cash")}>
                        Cash
                    </div>
                    <div className={paymentMode==="Cheque"?styles.active:null} onClick={()=>setPaymentMode("Cheque")}>
                        Cheque
                    </div>
                </div>
            </div>
            <input className={styles.paymentBtn} type="submit" value="Confirm" onClick={updateData}/>
        </div>
        {paymentStatus?
        <PaymentSuccess retailerInfo={retailerInfo} amountPaid={amountPaid} paymentMode={paymentMode}/>:<></>}
        </>
    )
}