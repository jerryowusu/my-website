import React, { FunctionComponent } from 'react'
import { IServices } from '../type'

const ServiceCard:FunctionComponent<{service:IServices}> = ({
    service: { Icon, about, title }
}) => {

    const createMarkup = () => {
        return {
            __html: about,
        }
    }
  return (
    <div className='flex items-center p-2 space-x-4'>
        <Icon className='w-16 h-16 text-green'/>
        <div>
            <h4 className='font-bold' >{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
    </div>
  )
}

export default ServiceCard