import React from 'react';
import { FaCoffee, FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, test, photo, details } = coffee
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })

            }
        })
    }
    return (

        <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photo} alt="" />
            <div className="sm:flex ">
                <div className='flex flex-col justify-between gap-y-5 p-4 leading-normal'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Details : {details}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Test : {test}</p>
                   
                </div>
                <div className='flex flex-row  sm:flex-col w-full sm:w-auto justify-between px-3 py-7 items-center'>
                    <button className='' > <FaEye size={33}></FaEye> </button>
                    <Link className='block' to={`/edit/${_id}`}> <FaEdit size={33}></FaEdit></Link>
                    <button className='block' onClick={() => deleteHandler(_id)}> <FaTrashAlt size={33}></FaTrashAlt></button>
                </div>
            </div>

        </div>

    );
};

export default CoffeeCard;