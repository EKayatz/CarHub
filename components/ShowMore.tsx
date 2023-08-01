"use client"
import { ShowMoreProps } from '@/types'
import {useRouter} from 'next/navigation'
import Button from './Button'
import { updateSearchParam } from '@/utils'


const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
	  const router = useRouter()
	  const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10
		const newPathname = updateSearchParam("limit", `${newLimit}`)
		router.push(newPathname)
	  }
  return (
	<div className='w-full flex-center gap-5 mt-10'>
	  {!isNext && (
	  <Button title="Show More" btnType="button" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNavigation} />
	  )}
	</div>
  )
}

export default ShowMore
