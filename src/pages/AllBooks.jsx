// import { useQueryClient } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { FaFilter } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useGetAllBooksQuery } from "../redux/query/booksApi";


//useless lin
const AllBooks = () => {
    // const queryClient = useQueryClient()
    const [isAvailableOnly, setIsAvailableOnly] = useState(false)
    const [filtered, setFiltered] = useState([])

    // function handleFilter(arr) {
    //     const newarr = arr.filter(obj => obj.qty > 0)
    //     queryClient.setQueryData(['AllData'], newarr)
    //     setIsAvailableOnly(true)
    // }
    const { data, isLoading } = useGetAllBooksQuery()

    useEffect(() => {
        setFiltered(data)
    }, [data])

    function handleFilter(arr) {
        if (isAvailableOnly) {
            setFiltered(data)
            setIsAvailableOnly(false)
        } else {

            const newarr = arr.filter(obj => obj.qty > 0)
            setFiltered(newarr)
            setIsAvailableOnly(true)
        }
    }




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
                    filtered?.map(obj => <Card
                        key={obj._id}
                        data={obj}
                    // refetch={refetch}
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
