import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BorrowCard from "./BorrowCard";
import Loading from "../../Components/Loading";
import { useGetBorrowedBooksQuery } from "../../redux/query/BorrowApi";


const BorrowedBooks = () => {
    const { user, loading } = useContext(AuthContext)

    const { data, isLoading } = useGetBorrowedBooksQuery(user.email)
    console.log(data)


    // async function getAllBooks() {
    //     let res = await axios.get(`/api/v1/borrowed/?email=${user.email}`)
    //     return res.data
    // }


    // const { data, isLoading, refetch } = useQuery({
    //     queryKey: ['borrowedBooks'],
    //     queryFn: getAllBooks,
    //     enabled: !loading
    // })


    if (isLoading || loading) { return <Loading></Loading> }

    if (!isLoading && data?.length === 0) { return <section className="cont text-red-600"><h2>No Books are borrowed</h2></section> }

    return (
        <section className="cont">
            <h2><span className="text-crim">Borrowed</span> Books</h2>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    data?.map(obj => <BorrowCard
                        key={obj._id}
                        borrowData={obj}
                        user={user}
                    ></BorrowCard>)
                }
            </section>
        </section>
    );
};

export default BorrowedBooks;