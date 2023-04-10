import styles from "../styles/InvoiceItem.module.scss"
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })
export default function InvoiceItem({invoice}){
    return(
        <Link href={{pathname:'/payment', query:invoice}} disabled>
        <div className={styles.container}>
            <div className={styles.invoiceDetails}>
                <p className={styles.billId}>{invoice.bill_No}</p>
                <p className={styles.retailerName}>{invoice.retailer_Name}</p>
            </div>
            <div className={styles.payementDetails} style={{textAlign:"right"}}>
                <p className={styles.invoiceAmount}>₹{invoice.invoice_Amount}</p>
                <p className={styles.pendingAmount}>Pending: ₹{invoice.pending_Amount}</p>
            </div>
            
        </div>
        <hr style={{border: "0.5px solid transparent"}}/>
        </Link>
    )
}