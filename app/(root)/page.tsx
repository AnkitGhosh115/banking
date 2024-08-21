import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import Image from "next/image";
import Link from 'next/link'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Ankit', lastName: 'Ghosh', email: 'ankitghosh1151@gmail.com'};

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={4250.65}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 1330.50}, {currentBalance: 235.65}]}
        />
    </section>
  )
}

export default Home