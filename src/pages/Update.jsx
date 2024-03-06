import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";


const Update = () => {
    const { id } = useParams()
    const axios = useAxios()
    let nav = useNavigate()
    const queryClient = useQueryClient()

    const query = queryClient.getQueryData(['AllData'])

    const data = query.find(obj => obj._id === id)

    const { name, img, authorName, qty, rating, category } = data
    console.log(data)

    function handleUpdate(e) {
        e.preventDefault()
        let form = e.target;
        let select = document.getElementById("select-category")
        let newname = form.name.value;
        let newcategory = select.value
        let newauthorName = form.authorName.value
        let newimg = form.url.value
        let newrating = form.rating.value
        let newqty = form.qty.value

        newqty *= 1
        newrating *= 1


        if (typeof (qty) !== 'number' || typeof (rating) !== 'number') {
            return toast.error("Insert number")
        }

        let toastID = toast.loading("Updating book...")

        const newBook = {
            name: newname,
            category: newcategory,
            authorName: newauthorName,
            img: newimg,
            rating: newrating,
            qty: newqty,
        }

        axios.put(`/app/v1/update/${id}`, newBook)
            .then(res => {
                res.data?.modifiedCount &&
                    queryClient.refetchQueries(['AllData'])
                toast.success("Updated Successfully", { id: toastID })
                nav(-1)
            })
            .catch(err => {
                console.log(err)
                toast.error("Failed to update", { id: toastID })
            })

    }

    return (
        <div className="pb-12 cont">
            <h2 className="text-4xl text-center mt-12 font-semibold text-high">Update <span className="text-crim">Book()</span></h2>
            <form onSubmit={handleUpdate} className="border border-low lg:p-4 bg-background rounded-lg m-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Book name:</label>
                        <br />
                        <input defaultValue={name} type="text" placeholder="Book Name" name="name" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Author Name:</label>
                        <br />
                        <input defaultValue={authorName} type="text" placeholder="Author Name" name="authorName" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="url">Image URL:</label>
                        <br />
                        <input defaultValue={img} type="text" placeholder="URL" name="url" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="qty">Quantity:</label>
                        <br />
                        <input defaultValue={qty} type="text" placeholder="00" name="qty" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="select-category">Category/Genre:</label>
                        <br />
                        <select defaultValue={category} className="p-4 w-full bg-fadegray rounded-md" id="select-category">
                            <option value="History">History</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Mystery">Mystery</option>
                        </select>

                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="rating">Rating:</label>
                        <br />
                        <input defaultValue={rating} type="text" placeholder="4.5" name="rating" className="" />
                    </div>

                </div>
                <input type="submit" value="Submit" className="bg-crim text-white btn py-3 block w-1/2 mx-auto text-lg font-medium my-4 " />
            </form>
        </div>
    );
};

export default Update;