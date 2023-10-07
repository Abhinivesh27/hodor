import React from "react";

export default function Home() {
    return (
        <>
            <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
                <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">Meet our team</h1>
                <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
                    <div className="lg:w-96 w-80">
                        <img src="https://images.prismic.io/fiftytwo/7f80affc-3a5b-429d-b683-c53e54a87e30_24-Masthead+Desktop-masters-fiftytwo_detail.png?auto=compress,format&rect=0,0,2280,1264&w=2280&h=1264" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Vijay</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Co-Organiser</p>
                        </div>
                    </div>
                    <div className="bg-indigo-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
                        <h3 className="text-2xl font-semibold leading-6 text-center text-white">Abhinivesh S</h3>
                        <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">Organiser</p>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.pinimg.com/originals/72/45/fb/7245fb0ca786bb4a98fb8465e437c5bb.jpg" className="h-72 w-full object-contain object-center rounded-t-md" alt="woman in black dress" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Sanjai</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.ibb.co/tcbN9Ny/koushik.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Koushik</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Organiser</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://i.pinimg.com/originals/df/d3/16/dfd3160f9a1c2daae65e98bd60a3c5a2.png" className="h-72 w-full object-contain object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Kaviya</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <img src="https://m.media-amazon.com/images/S/pv-target-images/a03f22e0e7209f9ce9b41db8d443314d3d23289b5a443c462bdb75adb3f5f482.jpg" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <p className="text-base font-medium leading-6 text-gray-600">Gokul</p>
                            <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
