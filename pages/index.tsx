import React from 'react'
import ServiceCard from '../components/ServiceCard';
import services from '../data';

const index = () => {

  return (
  <div className='flex flex-col px-6 pt-1 flex-grow' >
    <h5 className='my-3 font-medium'>I am ..... replace with bio </h5>
    <div className='flex-grow p-4 mt-5 bg-gray-400  dark:bg-dark-500' style={{marginLeft: '-1.5rem', marginRight:'-1.5rem'}}>
      <h4 className='my-3 text-xl font-bold tracking-wide' >what I do </h4>
      <div className='grid gap-6 my-3 md:grid-cols-2'>
        {
          services.map(service => (
            // eslint-disable-next-line react/jsx-key
            <div className='col-span-2 bg-gray-200 dark:bg-dark-200 rounded-lg md:col-span-1'
            key={service.title}>
              <ServiceCard service={service} />
            </div>
        ))
        }
      </div>
    </div>
  </div>
)
}

export default index