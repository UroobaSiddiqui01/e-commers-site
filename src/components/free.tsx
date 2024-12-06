import { Truck, Headphones, CheckCircle } from 'lucide-react';

export default function Freedelivery() {
    return (
        <div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center max-w-screen-2xl mx-auto">
            <div className="sm:w-[100%] lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col md:flex-col lg:flex-row lg:justify-evenly gap-x-4 ">

                {/* box 1 */}
                <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center'>
                        <span><Truck size={32} /></span></div>
                    <div>
                        <h1 className='font-bold text-center'>FREE AND FAST DELIVERY</h1>
                        <p className='text-sm'>Free delivery for all orders over $140</p>
                    </div>
                </div>

                {/* box 2 */}
                <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center'>
                        <span><Headphones size={32} /></span></div>
                    <div>
                        <h1 className='font-bold text-center'>24/7 CUSTOMER SERVICE</h1>
                        <p className='text-sm'>Friendly 24/7 customer support</p>
                    </div>
                </div>

                {/* box 3 */}
                <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
                    <div className='w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center'>
                        <span><CheckCircle size={32} /></span></div>
                    <div>
                        <h1 className='font-bold text-center'>MONEY BACK GUARANTEE</h1>
                        <p className='text-sm'>We return money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}