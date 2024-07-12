import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneno, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});
    const history = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!phoneno) newErrors.phoneno = 'Phone number is required';
        if (!address) newErrors.address = 'Address is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        axios.post('https://668e372ebf9912d4c92d405f.mockapi.io/updatedeletetable', {
            name: name,
            email: email,
            phoneno: phoneno,
            address: address,
        })
        .then(() => {
            history("/read");
        })
        .catch(error => {
            console.error('Error creating data:', error);
            // Handle error state if needed
        });
    };

    return (
        <>
            <form>
                <div className="d-flex justify-content-between mb-3">
                    <h2>Create Section</h2>
                    <Link to="/read">
                        <button className="btn btn-primary">Show Data</button>
                        
                    </Link>
                </div>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                    <label className="form-label">Phone number</label>
                    <input type="number" className="form-control" onChange={(e) => setPhoneNo(e.target.value)} />
                    {errors.phoneno && <p style={{ color: 'red' }}>{errors.phoneno}</p>}

                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

             
            </form>
        </>
    );
}

export default Create;
