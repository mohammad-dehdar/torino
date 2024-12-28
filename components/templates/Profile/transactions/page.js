'use client'

import { useGetUserTransactions } from "@/core/services/queries"

function TransactionsPage() {
    const { data, isPending } = useGetUserTransactions();

    if (isPending) return <div>Loading...</div>

    const transactions = data?.data || [];

    return (
        <div className="mt-4 md:mt-10">
            <table className="w-full ">
                <thead>
                    <tr className="bg-gray-200 text-sm md:text-base text-slate-600">
                        <th className="p-4 rounded-tr-xl">تاریخ و ساعت</th>
                        <th className="p-4">مبلغ (تومان)</th>
                        <th className="hidden md:block p-4">نوع تراکنش</th>
                        <th className="p-4 rounded-tl-xl">شماره سفارش</th>
                    </tr>
                </thead>
                <tbody className="border border-slate-200">
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="text-center">
                            <td className=" p-3 text-xs md:text-base">
                                {new Intl.DateTimeFormat('fa-IR', {
                                    dateStyle: 'short',
                                    timeStyle: 'short'
                                }).format(new Date(transaction.createdAt))}
                            </td>
                            <td className=" p-3 text-sm md:text-base">
                                {transaction.amount.toLocaleString('fa-IR')}
                            </td>
                            <td className="hidden md:block p-3">
                                {transaction.type === 'Purchase' ? 'ثبت نام در تور گردشگری' : transaction.type}
                            </td>
                            <td className=" p-3">
                                 {transaction.id.slice(0, 8)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsPage;
