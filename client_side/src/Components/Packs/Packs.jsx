import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Loading from '../../Layouts/Loading/Loading';

const Packs = () => {


    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [])
    

    return (
        loading ?
            <Loading />
            :
            <div>


                <Navbar target={'nos-packs'} />

            </div>
    )
}

export default Packs