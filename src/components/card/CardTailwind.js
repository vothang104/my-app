import React from 'react';

export default function CardTailwind({ secondary }) {
    const amountClasses = `font-[14px] font-bold text-transparent bg-clip-text ${secondary ? 'bg-secondary-gradient' : 'bg-primary-gradient'}`;
    return (
        <div className='relative pl-[5px] pr-[5px]'>
            <div className='w-full rounded-lg h-[400px]'>
                <img className='w-full h-full object-cover rounded-lg' alt=''
                    src='https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className='absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]'>
                <div className='flex justify-between items-center mb-8'>
                    <div className='flex w-[20%] items-center'>
                        <img className='rounded-[50%] w-[40px] h-[40px] mr-[10px]' alt=''
                            src='https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                        <span className='text-[#ccc]'>@zndrson</span>
                    </div>
                    <div className='flex w-[18%] items-center justify-between'>
                        <img alt='heart' src='/icon-heart.svg' />
                        <span>256</span>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <h3 className='text-[18px] font-[550]'>Cosmic Perspective</h3>
                    <span className={amountClasses}>12,000 PSL</span>
                </div>
            </div>
        </div>
    )
}
