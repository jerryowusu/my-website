import React from 'react'
import ServiceCard from '../components/ServiceCard';
import services from '../data';

const index = () => {

  return (
  <div className='flex flex-col px-6 pt-1 flex-grow' >
    <h5 className='my-3 font-medium'>I am ..... replace with bio </h5>
    <div className='p-4 mt-5 bg-gray-500 flex-grow' style={{marginLeft: '-1.5rem', marginRight:'-1.5rem'}}>
      <h4  my-3 text-xl font-bold tracking-wide >what I do </h4>
      <div className='grid lg:grid-cols-2 gap-6'>
        {
          services.map(service => (
            // eslint-disable-next-line react/jsx-key
            <div className='bg-gray-200 rounded-lg lg:col-span-1'>
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