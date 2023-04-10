import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Banner from '@/components/Banner'
import { useRouter } from 'next/router'
import PaymentForm from '@/components/PaymentForm'

const inter = Inter({ subsets: ['latin'] })
export default function Payment() {
    const router= useRouter();
    const retailerInfo= router.query;
    const amount= retailerInfo.pending_Amount;
  return (
    <>
      <Head>
        <title>CrediTail | Payments</title>
        <meta name="description" content="Generated by Sashank Deb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner title={retailerInfo.bill_No} subtitle={retailerInfo.retailer_Name} backBtn={'/allinvoice'}/>
        <PaymentForm retailerInfo={retailerInfo} amount={amount}/>
      </main>
    </>
  )
}
