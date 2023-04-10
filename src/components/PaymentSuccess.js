import Image from "next/image"
import styles from '../styles/PaymentSuccess.module.scss'
import { useState, useEffect } from "react"
export default function PaymentSuccess({retailerInfo, amountPaid, paymentMode}){
    const [timer, setTimer]= useState(3)
    useEffect(()=>{
        let interval=setInterval(()=>{
            setTimer((prev)=>prev-1)
        },1000)
        return ()=>clearInterval(interval)
    })
    return(
        <div className={styles.container}>
            <section>
                <Image src="./tick.svg" width={115} height={115} alt="Success"/>
                <div className={styles.retailerInfo}>
                    <p className={styles.billNo}>{retailerInfo.bill_No}</p>
                    <p className={styles.amountPaid}> ₹{amountPaid}</p>
                    <p className={styles.retailerName}>{retailerInfo.retailer_Name}</p>
                </div>
                <p className={styles.paymentMode}>PAID BY {paymentMode}</p>
            </section>
            <p className={styles.note}>Redirecting to Home  in {timer}</p>
        </div>
    )
}