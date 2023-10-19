import React from 'react'
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component'
import Poster from '../components/Poster/Poster.component'

const PlaysPage = () => {
    return (
        <>
            <div className="bg-gray-100">
            <div className='container mx-auto px-4 flex w-full gap-4 '>
                <div className='hidden lg:block lg:w-1/4 px-3'>
                    <h2 className='text-2xl text-gray-800 font-bold  pt-16 mb-5'>Filters</h2>
                    <div className='flex flex-col gap-3'>
                        <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This weekend"]}/>
                        <PlaysFilters title="Language" tags={["English", "Hindi", "Marathi"]}/>
                        <PlaysFilters title="Categories" tags={["Storytelling", "Theatre"]}/>
                        <PlaysFilters title="Genres" tags={["Comedy", "Drama", "Romantic", "Suspense"]}/>
                        <PlaysFilters title="More Fiters" tags={["Outdoor Events"]}/>
                        <PlaysFilters title="Price" tags={["Free", "0 - 500", "501 - 2000", "Above 2000"]}/>
                        <button className='border-linktext-1 border-[1px] text-sm w-full p-1.5 text-bgBtn-1 rounded-[5px]'>Browse by Venues</button>
                    </div>
                </div>
                <div className='lg:w-3/4 w-full'>
                    <h2 className='text-2xl text-gray-800 font-bold px-3 pt-16 mb-5'>Plays in Nagpur</h2>
                    <div className='flex px-3 gap-4 mb-5'>
                        <button className=' text-xs text-linktext-1 border-[1px] border-gray-300 py-1.5 px-3 rounded-full bg-white'>Storytelling</button>
                        <button className=' text-xs text-linktext-1 border-[1px] border-gray-300 py-1.5 px-3 rounded-full bg-white'>Theatre</button>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00371311-mgavrcfkun-portrait.jpg"
                                title="Uska Dupatta"
                                subtitle="Casa Unplugged: Nagpur"
                                language="English/Hindi"
                                price="₹ 149"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00372830-mnybmmpskr-portrait.jpg"
                                title="Babanchi Ladaki"
                                subtitle="Vasantrao Deshpande Hall: Nagpur"
                                language="Marathi"
                                price="₹ 300 onwards"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00371311-mgavrcfkun-portrait.jpg"
                                title="Uska Dupatta"
                                subtitle="Casa Unplugged: Nagpur"
                                language="English/Hindi"
                                price="₹ 149"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00372830-mnybmmpskr-portrait.jpg"
                                title="Babanchi Ladaki"
                                subtitle="Vasantrao Deshpande Hall: Nagpur"
                                language="Marathi"
                                price="₹ 300 onwards"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00371311-mgavrcfkun-portrait.jpg"
                                title="Uska Dupatta"
                                subtitle="Casa Unplugged: Nagpur"
                                language="English/Hindi"
                                price="₹ 149"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00372830-mnybmmpskr-portrait.jpg"
                                title="Babanchi Ladaki"
                                subtitle="Vasantrao Deshpande Hall: Nagpur"
                                language="Marathi"
                                price="₹ 300 onwards"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00371311-mgavrcfkun-portrait.jpg"
                                title="Uska Dupatta"
                                subtitle="Casa Unplugged: Nagpur"
                                language="English/Hindi"
                                price="₹ 149"
                            />
                        </div>
                        <div className=' w-1/2 my-3 md:w-1/3 lg:w-1/4'>
                            <Poster
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyOSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00372830-mnybmmpskr-portrait.jpg"
                                title="Babanchi Ladaki"
                                subtitle="Vasantrao Deshpande Hall: Nagpur"
                                language="Marathi"
                                price="₹ 300 onwards"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default PlaysPage