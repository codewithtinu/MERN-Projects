import React from 'react'
import { useParams } from 'react-router-dom';

const EditJobs = () => {
    const id = useParams();
    console.log('id in edit page: ', id);
  return (
    <div>EditJobs</div>
  )
}

export default EditJobs;