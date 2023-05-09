import React from 'react';
import { FaCoffee, FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const CoffeeCard = ({ coffee }) => {
    const { _id, name, test, photo } = coffee
    return (

        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photo} alt="" />
            <div className="sm:flex ">
                <div className='flex flex-col justify-between gap-y-5 p-4 leading-normal'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <div className='flex flex-row  sm:flex-col w-full sm:w-auto justify-between px-3'>
                    <Link className=''> <FaEye size={33}></FaEye> </Link>
                    <Link className='block'> <FaEdit size={33}></FaEdit></Link>
                    <Link className='block'> <FaTrashAlt size={33}></FaTrashAlt></Link>
                </div>
            </div>

        </a>

    );
};

export default CoffeeCard;