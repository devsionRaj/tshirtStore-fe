import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { getCategory, updateCategory } from './helper/adminapicall';

const UpdateCategory = ({ match }) => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
            console.log('the data loaded is:', data)
            if (data.error) {
                console.log(data.error)
            } else {
                setName(data.name);
            }
        })
    }

    useEffect(() => {
        preload(match.params.categoryId);
    }, [])

    const { user, token } = isAuthenticated();

    const goBack = () => (
        <div className='mt-5'>
            <Link className='btn btn-sm btn-success mb-3' to='/admin/dashboard'>Admin Home</Link>
        </div>
    )

    const handleChange = (event) => {
        setError('');
        setName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);
        console.log('the user being received:', user)
        console.log('the token being received:', token)

        //Backend request fired
        updateCategory(match.params.categoryId, user.id, token, {name}).then(data => {
            console.log('the update categories data received is:', data)
            if (data && data.error) {
                setError(true);
            } else {
                setError('');
                setSuccess(true);
                setName('');
            }
        })
    }

    const successMessage = () => {
        if (success) {
            return <h4 className='text-success'>Category updated successfully</h4>
        }
    }

    const warningMessage = () => {
        if (error) {
            return <h4 className='text-danger'>Failed to update category</h4>
        }
    }

    const myCategoryForm = () => {
        return (
            <form>
                <div className='form-group'>
                    <p className='lead'>Enter the category</p>
                    <input
                        type='text'
                        className='form-control my-3'
                        onChange={handleChange}
                        value={name}
                        autoFocus
                        required
                        placeholder='For Ex. Summer'
                    />
                    <button onClick={onSubmit} className='btn btn-outline-info'>Update Category</button>

                </div>
            </form>
        )
    }

    return (
        <Base
            title='Create a category here'
            description='Add a new category for new tshirts'
            className='container bg-info p-4' >
            <div className='row bg-white rounded'>
                <div className='col-md-8 offset-md-2'>
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default UpdateCategory;