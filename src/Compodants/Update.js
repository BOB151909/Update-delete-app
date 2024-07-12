import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    // Fetch data from localStorage on component mount
    useEffect(() => {
        setId(localStorage.getItem("id") || '');
        setName(localStorage.getItem("name") || '');
        setEmail(localStorage.getItem("email") || '');
        setPhoneNo(localStorage.getItem("phoneno") || '');
        setAddress(localStorage.getItem("address") || '');
    }, []);

    // Function to handle form submission for update
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://668e372ebf9912d4c92d405f.mockapi.io/updatedeletetable/${id}`, {
            name: name,
            email: email,
            phoneno: phoneno,
            address: address,
        })
        .then(() => {
            navigate("/read"); // Navigate back to Read component after update
        })
        .catch(error => {
            console.error('Error updating data:', error);
            // Handle error state if needed
        });
    };

    return (
        <>
            <form>
                <h2>Update Section</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label className="form-label">Phone number</label>
                    <input type='number' className='form-control' value={phoneno} onChange={(e) => setPhoneNo(e.target.value)} />

                    <label className='form-label'>Address</label>
                    <input type='text' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary me-2" onClick={handleUpdate}>Update</button>

                <Link to="/read">
                    <button className='btn btn-success'>
                        Back
                    </button>
                </Link>
            </form>
        </>
    );
}

export default Update;
