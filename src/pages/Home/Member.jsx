import { BiCheck } from 'react-icons/bi';

const Member = () => {
    return (
        <section className='mb-8'>
            <div className='cont rounded-bl-xl overflow-hidden member'>
                <h2 className=" text-center text-2xl lg:text-5xl  lg:mb-8 mt-4">Become a Member Now!</h2>
                <div className='px-4 py-4 md:py-12 lg:p-12'>
                    <div className=' text-high  lg:pl-[40%] lg:text-center'>
                        <p className='text-xl font-semibold text-start'>Benefits:</p>
                        <p className=' flex items-center gap-2'><BiCheck className='text-green-400 '></BiCheck>Improves Cognitive Function</p>
                        <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Knowledge and Learning</p>
                        <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Enhances Empathy and Understanding</p>
                        <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Lifelong Learning and Personal Growth</p>
                        <p className='flex items-center  gap-2'><BiCheck className='text-green-400 '></BiCheck>Improves Focus and Concentration</p>
                    </div>
                    <div className='flex lg:w-1/2 mx-auto mt-8'>
                        <input type="text" className='rounded-r-none backdrop-blur-md' placeholder='Email:' /> <button className='input-btn text-white btn rounded-r-lg bg-crim text-lg p-2'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Member;