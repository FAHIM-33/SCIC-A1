import { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../Components/Loading';
// import PDF from './PDF/PDF';
// import { PDFViewer } from '@react-pdf/renderer';
import { FiDownload } from 'react-icons/fi';

const Read = () => {
    const axios = useAxios()
    const { id } = useParams()
    const [data, setData] = useState()
    const [download, setDownload] = useState(false)


    function handleDownload() {
        setDownload(true)
        if (download) { toast('Already downloaded') }
    }


    useEffect(() => {
        axios.get(`/api/v1/Abook/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(() => {
                toast.error("Something went Wrong")
            })
    }, [axios, id])

    if (!data) { return <Loading></Loading> }

    return (
        <div className='cont'>
            <h2>{data?.name}</h2>
            <p className='mx-auto text-low font-medium w-fit pl-20'>- Written by {data?.authorName}</p>
            <p className='leading-10 mt-12 w-4/5 md:w-3/5 mx-auto'>{data?.description}</p>
            {/* {
                download &&
                <PDFViewer>
                    <PDF data={data}></PDF>
                </PDFViewer>
            } */}
            <button
                onClick={handleDownload}
                className='btn flex items-center justify-center gap-2 py-3 w-1/2 mx-auto bg-crim text-white text-xl mt-8'><FiDownload></FiDownload> Download PDF</button>
        </div>
    );

};

export default Read;

