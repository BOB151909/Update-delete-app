import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([]);

    // Function to fetch data from API
    const getData = () => {
        axios.get('https://668e372ebf9912d4c92d405f.mockapi.io/updatedeletetable')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle error state if needed
            });
    };

    // Function to delete an item
    const handleDelete = (id) => {
        axios.delete(`https://668e372ebf9912d4c92d405f.mockapi.io/updatedeletetable/${id}`)
            .then(() => {
                getData(); // Refresh data after deletion
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
                // Handle error state if needed
            });
    };

    // Function to set data to localStorage for editing
    const setToLocalStorage = (id, name, email, phoneno, address) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneno", phoneno);
        localStorage.setItem("address", address);
    };

    // Fetch data on component mount
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h2>Read Section</h2>
                <Link to="/">
                    <button className='btn btn-secondary'>Create Data</button>
                    <button className="btn btn-success ms-2">
                        Back
                    </button>
                </Link>
               
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachData) => (
                        <tr key={eachData.id}>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td>{eachData.phoneno}</td>
                            <td>{eachData.address}</td>
                            <td>
                                <Link to="/Update">
                                    <button
                                        className='btn btn-success me-2'
                                        onClick={() => setToLocalStorage(
                                            eachData.id,
                                            eachData.name,
                                            eachData.email,
                                            eachData.phoneno,
                                            eachData.address,
                                        )}
                                    >
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => handleDelete(eachData.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Read;
