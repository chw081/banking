import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const TransactionHistory = ({ searchParams: {id, page}}: SearchParamProps) => {
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory