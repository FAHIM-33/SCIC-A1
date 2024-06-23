
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { useAddBookMutation } from "../redux/query/booksApi";

const AddBooks = () => {
    const { user } = useContext(AuthContext)
    const [addBook] = useAddBookMutation()

    async function handleAdd(e) {
        e.preventDefault()
        let form = e.target;
        let name = form.name.value;
        let select = document.getElementById("select-category")
        let category = select.value
        let authorName = form.authorName.value
        let img = form.url.value
        let rating = form.rating.value
        let description = form.description.value
        let qty = form.qty.value

        qty *= 1
        rating *= 1

        if (typeof (qty) !== 'number' || typeof (rating) !== 'number') {
            return toast.error("Insert number")
        }

        let toastID = toast.loading("Adding book...")

        const book = {
            name,
            category,
            authorName,
            img,
            rating,
            description,
            qty,
        }

        //     axios.post(`/api/v1/addBook/?email=${user.email}`, book)
        //         .then(res => {
        //             console.log(res.data)
        //             toast.success("Added succesfully", { id: toastID })
        //         })
        //         .catch(err => {
        //             console.log(err)
        //             toast.error("Failed to add book", { id: toastID })
        //         })


        try {
        await addBook({ book: book, email: user.email }).unwrap()
            toast.success("Added succesfully", { id: toastID })
        }
        catch {
            toast.error("Failed to add book", { id: toastID })
        }
    }


    return (
        <div className="cont pb-12 bg-background">
            <h2 className="text-4xl text-center pt-12 font-semibold text-high">Add new <span className="text-crim">Book</span></h2>
            <form onSubmit={handleAdd} className="border border-low lg:p-4 bg-background rounded-lg m-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Book name:</label>
                        <br />
                        <input type="text" placeholder="Book Name" name="name" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="name">Author Name:</label>
                        <br />
                        <input type="text" placeholder="Author Name" name="authorName" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="url">Image URL:</label>
                        <br />
                        <input type="text" placeholder="URL" name="url" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="qty">Quantity:</label>
                        <br />
                        <input type="text" placeholder="00" defaultValue={0} name="qty" className="" />
                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="select-category">Category/Genre:</label>
                        <br />
                        <select className="p-4 w-full bg-fadegray rounded-md" id="select-category">
                            <option value="History">History</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Mystery">Mystery</option>
                        </select>

                    </div>

                    <div className="p-4 lg:p-8">
                        <label htmlFor="rating">Rating:</label>
                        <br />
                        <input type="text" placeholder="4.5" name="rating" className="" />
                    </div>
                    <div className="p-4 lg:p-8">
                        <label htmlFor="description">Short description:</label>
                        <br />
                        <textarea name="description" placeholder="Write short discription" className="w-full h-32 bg-fadegray p-3 rounded-md"></textarea>
                    </div>


                </div>
                <input type="submit" value="Add Book" className="bg-crim text-white btn py-3 block w-1/2 mx-auto text-lg font-medium my-4 " />
            </form>
        </div>
    );
};

export default AddBooks;