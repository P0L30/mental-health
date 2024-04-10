'use client'
import React, { useState } from 'react';

export default function Add() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        solution: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add item');
            }

            // Clear form data after successful submission
            setFormData({
                title: '',
                description: '',
                solution: '',
                imageUrl: ''
            });

            // Optionally, you can handle success here
            console.log('Item added successfully');
        } catch (error) {
            console.error('Error adding item:', error.message);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "white" }}>
            <div style={{ width: "90%", maxWidth: "600px", padding: "20px", boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="title" style={{ fontSize: "18px", marginBottom: "5px", display: "block" }}>Title or Name:</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Write" 
                            value={formData.title} 
                            onChange={handleChange} 
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="description" style={{ fontSize: "18px", marginBottom: "5px", display: "block" }}>Description:</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            placeholder="Write" 
                            value={formData.description} 
                            onChange={handleChange} 
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", resize: "vertical" }} 
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="solution" style={{ fontSize: "18px", marginBottom: "5px", display: "block" }}>Solution:</label>
                        <textarea 
                            id="solution" 
                            name="solution" 
                            placeholder="Write" 
                            value={formData.solution} 
                            onChange={handleChange} 
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", resize: "vertical" }} 
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="imageUrl" style={{ fontSize: "18px", marginBottom: "5px", display: "block" }}>Image URL:</label>
                        <input 
                            type="text" 
                            id="imageUrl" 
                            name="imageUrl" 
                            placeholder="Write" 
                            value={formData.imageUrl} 
                            onChange={handleChange} 
                            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: "rgba(77, 189, 152, 0.846)", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>Submit</button>
                </form>
                <img src="write.png" alt="Write" style={{ width: "100%", maxWidth: "300px", display: "block", margin: "20px auto", borderRadius: "50%" }} />
            </div>
        </div>
    );
}
