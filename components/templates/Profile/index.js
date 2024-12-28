'use client'

import BankAccountForm from './bankAcoountForm'
import PersonalDataForm from './personalDataForm'
import { useGetUserData } from '@/core/services/queries'
import AccountInfoForm from './AccountInfoForm.js'
import { ThreeDots } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'

function Profile() {
  const { data, isPending } = useGetUserData()
  
  
  if (isPending) return (
    <div className='min-h-svh flex  justify-center'><ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  )

  return (
    <div className='flex flex-col gap-4 max-sm:mt-8'>
      <AccountInfoForm data={data?.data} />
      <PersonalDataForm data={data?.data} />
      <BankAccountForm data={data?.data} />
    </div>
  )
}

export default Profile