import { Link } from "react-router-dom";


const Categories = () => {
    const catagories = [
        {
            name: 'History',
            img: 'https://i.ibb.co/zRb1Bhf/history.jpg'
        },
        {
            name: 'Fiction',
            img: 'https://i.ibb.co/bWTHrRG/fiction.jpg'
        },
        {
            name: 'Mystery',
            img: 'https://i.ibb.co/1J9hPmk/mystery.jpg'
        },
        {
            name: 'Sci-Fi',
            img: 'https://i.ibb.co/bNCqVBZ/mystery.webp'
        },
    ]

    return (
        <section className="cont">
            <h2 className="mb-8">Categories</h2>
            <div className="grid grid-cols-1 px-4 md:grid-cols-4 gap-4">
                {
                    catagories.map((obj, i) =>
                        <Link to={`/category/${obj.name}`} key={i} >
                            <div
                                className=" bg-fadegray rounded-md my-2 overflow-hidden hover:scale-105 transition-all duration-200"
                            >
                                <img src={obj?.img} className="h-48 rounded-md object-cover w-full" alt="" />
                                <p className="text-lg md:text-xl my-2 font-bold text-center">{obj.name}</p>

                            </div>
                        </Link>
                    )
                }
            </div>
        </section>
    );
};

export default Categories;