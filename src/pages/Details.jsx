import { useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { BiCategoryAlt, BiSolidStar, BiStar } from 'react-icons/bi';
import Rating from "react-rating";
import Modal from "./Modal/Modal";
import { useState } from "react";
import Loading from "../Components/Loading";

const Details = () => {
    let { id, searchCategory } = useParams()
    // const axios = useAxios()
    const [open, setOpen] = useState(false)
    const queryClient = useQueryClient()

    const dataArr = queryClient.getQueryData([`selectedCatagory-${searchCategory}`])
    const data = dataArr?.find(obj => obj._id === id)

    if (!data) { return <Loading></Loading> }


    const { img, name, authorName, category, rating, description, qty } = data


    return (
        <section className="max-w-7xl mx-auto my-8">
            <div className='bg-fadegray relative flex md:flex-row rounded-bl-2xl overflow-hidden'>
                <p className='mb-4 md:mb-8 absolute top-0 right-0 rounded-bl-lg rounded-sm w-fit bg-high text-background font-bold px-4 py-1'><BiCategoryAlt className='inline-flex mr-1 text-crim text-base md:text-xl'></BiCategoryAlt>{category}</p>
                <div className="col-span-3">
                    <img src={img} className=' mx-auto md:h-[90vh] block object-cover' alt="img of books" />

                </div>

                <div className='relative flex-1  flex flex-col justify-center p-4'>
                    <p className='text-2xl md:text-4xl font-semibold border-l-2 border-crim pl-1'>{name}</p>
                    <p className='mb-16 text-sm mt-2'>by <span className='font-medium text-lg md:text-2xl'> {authorName}</span></p>
                    <p className="font-medium">Quantity: {qty}</p>
                    <div className="mt-4 md:mt-8 flex flex-col items-center w-fit">
                        <Rating
                            className='text-xl md:text-3xl text-crim'

                            initialRating={rating}
                            emptySymbol={<span className="icon-text"><BiStar></BiStar></span>}
                            fullSymbol={<BiSolidStar className=''></BiSolidStar>}
                        />
                        <p className="">{rating} out of 5</p>

                    </div>

                    <div className="mt-8 md:mt-12">
                        <p className="text-lg md:text-2xl font-semibold">Plot:</p>
                        <p>{description.slice(0, 200)}<span className="text-crim">...Read more</span></p>
                    </div>
                    <button
                        disabled={qty < 1 ? true : false}
                        className="btn bg-crim py-1 md:py-3 mt-4 md:mt-8 text-xl block mx-auto text-white w-4/5"
                        onClick={() => setOpen(true)}
                    >Borrow</button>
                    <Link to={`/read/${id}`}>
                        <button className="btn bg-background py-1 md:py-3 mt-4 text-xl block mx-auto text-crim w-4/5">Read</button>
                    </Link>

                </div>
            </div>

            <section className={`${open ? 'fixed' : 'hidden'} overflow-auto inset-0 bg-[#11111181] flex items-center justify-center`} id='borrow-modal'>
                <Modal
                    data={data}
                    setOpen={setOpen}
                // refetch={refetch}
                ></Modal>
            </section>

        </section>
    );
};

export default Details;