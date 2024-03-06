import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Loading from "../Components/Loading";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { FaFilter } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

 

const AllBooks = () => {
    const axios = useAxios()
    const queryClient = useQueryClient()
    const [isAvailableOnly, setIsAvailableOnly] = useState(false)
    const { user } = useContext(AuthContext)

    async function getAllBooks() {
        let res = await axios.get(`/api/v1/all-books/?email=${user.email}`)
        return res.data
    }

    function handleFilter(arr) {
        const newarr = arr.filter(obj => obj.qty > 0)
        queryClient.setQueryData(['AllData'], newarr)
        setIsAvailableOnly(true)
    }



    let { data, isLoading, refetch } = useQuery({
        queryKey: ['AllData'],
        queryFn: getAllBooks
    })
    if (isLoading) { return <Loading></Loading> }


    return (
        <section className="cont">
            <h2><span className="text-crim">All</span> Books</h2>

            <div className="flex justify-end mb-4 md:mb-8 -mt-4 md:mt-0 text-base md:text-xl">
                <button
                    onClick={() => handleFilter(data)}
                    className="border border-high p-1 md:p-2 rounded-bl-xl hover:scale-105 duration-150 flex active:scale-95 items-center">
                    <FaFilter className="text-xl md:text-3xl text-high"></FaFilter><span>Available only</span>
                </button>
            </div>
            {isAvailableOnly && <p className="text-center pb-4 text-3xl text-red-600">Shoing Available: {data.length} books</p>}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    data?.map(obj => <Card
                        key={obj._id}
                        data={obj}
                        refetch={refetch}
                    >
                        <Link to={`/update/${obj._id}`}>
                            <button className='btn mx-auto block bg-crim w-full py-1 md:py-2 text-white  md:text-xl'>Update</button>
                        </Link>
                    </Card>)
                }
            </section>
        </section>
    );
};

export default AllBooks;