// useFetchData.jsx
import React, { useEffect, useState } from 'react';
import { token } from '../config.js';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("Authorization Header:", `Bearer ${token}`); // Add this line to check the Authorization header
                const result = await res.json();
                if (!res.ok) {
                    throw new Error(result.message);
                }
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        };
        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetchData;
