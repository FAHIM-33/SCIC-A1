import pt from 'prop-types'
import { BiCategoryAlt, BiSolidStar, BiStar } from 'react-icons/bi';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const Card = ({ data, children }) => {


    const { img, name, authorName, category, rating, qty } = data
    return (
        <div className='bg-fadegray flex rounded-bl-2xl overflow-hidden mx-1 md:mx-0'>
            <div className='w-4/12 md:w-1/2'>
                <img src={img} className='h-full md:h-[500px] w-full block object-cover' alt="img of books" />
            </div>

            <div className='relative flex-1 flex flex-col justify-center pt-5 md:pt-2 p-2 md:p-4'>
                <div className='flex-1'></div>
                <p className='text-xl md:text-2xl font-semibold border-l-2 border-crim pl-1'>{name}</p>
                <p className='mb-2 md:mb-4 text-xs md:text-sm mt-2'>by <span className='font-medium  md:text-lg'> {authorName}</span></p>
                <p className={`mb-4 md:mb-8 text-sm md:text-base font-medium ${qty===0?'text-red-600':""}`}>Quantity: {qty}</p>
                <Rating
                    className='text-2xl md:text-3xl text-crim'

                    initialRating={rating}
                    emptySymbol={<span className="icon-text"><BiStar></BiStar></span>}
                    fullSymbol={<BiSolidStar className=''></BiSolidStar>}
                />
                <div className='flex-1'></div>
                {/* Details Button */}
                {children}
                <Link to={`/category/${category}`}>
                    <p className='absolute top-0 right-0 rounded-bl-md bg-high text-background text-sm md:text-base font-bold px-2 md:px-4 py-[1px] md:py-1'><BiCategoryAlt className='inline-flex mr-1 text-crim text-xl'></BiCategoryAlt>{category}</p>
                </Link>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: pt.object,
    children: pt.node,
}
export default Card;