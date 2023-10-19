import { Disclosure } from '@headlessui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'



const PlaysFilters = (props) => {
    return (
        <>
            <div className=" border-none bg-white p-2 rounded-[5px]">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className=' w-full py-2 flex items-center justify-between'>
                                <div className="flex font-light gap-3 items-center">
                                    {open ? <BsChevronUp /> : <BsChevronDown />}
                                    <h1 className={`${open ? "text-linktext-1" : "text-gray-800"} text-sm`}>{props.title}</h1>
                                </div>
                                <div className='font-light text-xs text-gray-800 hover:text-linktext-1'>
                                    <h1>Clear</h1>
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel >
                                <div className='flex items-center gap-1 flex-wrap p-2'>
                                    {props.tags.map((tag) => (
                                        <>
                                            <div className='border-[1px] border-gray-300 px-3 py-1 font-light'>
                                                <span className='text-linktext-1 text-sm'>{tag}</span>
                                            </div>
                                            <div></div>
                                        </>
                                    ))
                                    }
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

        </>

    )
}

export default PlaysFilters;