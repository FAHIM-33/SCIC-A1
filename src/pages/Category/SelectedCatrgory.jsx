import { Link, useParams } from "react-router-dom";
// import useAxios from "../../Hooks/useAxios";
// import { useQuery } from "@tanstack/react-query";
import Card from "../../Components/Card";
import Loading from "../../Components/Loading";
import { useGetCategoryBookQuery } from "../../redux/query/booksApi";

//

const SelectedCatrgory = () => {
    const { category } = useParams()
    // const axios = useAxios()

    // const getBooks = async () => {
    //     let res = await axios.get(`/api/v1/all-books/?category=${category}`)
    //     return res.data
    // }

    // const { data, isLoading } = useQuery({
    //     queryKey: [`selectedCatagory-${category}`],
    //     queryFn: getBooks,
    // })

    const { data, isLoading } = useGetCategoryBookQuery(category)

    return (
        <section className="cont">
            <h2><span className="text-crim">{category}</span> Books</h2>
            {
                isLoading ?
                    <Loading></Loading>
                    :
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            data?.map((obj, i) => <Card
                                key={i}
                                data={obj}
                            >
                                <Link to={`/details/${category}/${obj._id}`}>
                                    <button className='btn mx-auto block bg-crim w-full py-1 md:py-2 text-white  md:text-xl'>Details</button>
                                </Link>
                            </Card>)
                        }
                    </section>
            }

        </section>
    );
};

export default SelectedCatrgory;
