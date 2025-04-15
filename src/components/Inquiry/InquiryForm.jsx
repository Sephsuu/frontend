import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import './inquiry.css';



export default function InquiryForm (){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add logic to send form data to the backend
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const [step, setStep] = useState(1);

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    return (
        <div className='d-flex inquiry_form'>
            <NavigationBar />
            <div className="d-flex justify-content-center align-items-center vh-100 w-100">
                <div className="card main_card h-75" style={{ width: '800px', overflow: 'hidden', transition: 'all 0.5s ease-in-out' }}>
                    <div className="row g-0 h-100">
                        {step === 1 ? (
                            <div className="d-flex w-100" style={{ transform: step === 1 ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.5s ease-in-out' }}>
                                <div className="col-md-5 image-container">
                                    <img
                                        className='img-fluid rounded-start h-100 w-100'
                                        src="/images/kp_inquiry.jpg"
                                        alt="Kp Logo" />
                                </div>
                                <div className="col-md-7 h-100 d-flex flex-column">
                                    <div className="form_image container mt-2 d-flex justify-content-center">
                                        <img
                                            className='img-fluid rounded-start'
                                            src="/images/kp_logo.png"
                                            alt="Kp Logo" />
                                    </div>
                                    <h5 className="card-title text-center fs-4 fw-bold">KRISPY PAPI INQUIRY FORM</h5>
                                    <form onSubmit={handleNext} className="d-flex flex-column flex-grow-1 h-75 mx-5 mt-2">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows="3"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="mt-4 d-flex justify-content-start">
                                            <button type="submit" className="btn btn-primary next-btn">Next</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex w-100" style={{ transform: step === 2 ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.5s ease-in-out' }}>
                                <div className="col-md-5 image-container">
                                    <img
                                        className='img-fluid rounded-start h-100 w-100'
                                        src="/images/kp_inquiry.jpg"
                                        alt="Kp Logo" />
                                </div>
                                <div className="col-md-7 h-100 d-flex flex-column">
                                    <div className="form_image container mt-2 d-flex justify-content-center">
                                        <img
                                            className='img-fluid rounded-start'
                                            src="/images/kp_logo.png"
                                            alt="Kp Logo" />
                                    </div>
                                    <h5 className="card-title mt-3 text-center fs-4 fw-bold">ADDITIONAL DETAILS</h5>
                                    <form onSubmit={handleSubmit} className="d-flex flex-column flex-grow-1 h-75  mx-5 mt-2">
                                        <div className="mb-3">
                                            <label htmlFor="location" className="form-label">Desired Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="location"
                                                name="location"
                                                value={formData.location || ''}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="budget" className="form-label">Budget</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="budget"
                                                name="budget"
                                                value={formData.budget || ''}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="targetDate" className="form-label">Target Opening Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="targetDate"
                                                name="targetDate"
                                                value={formData.targetDate || ''}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="meetingDate" className="form-label">Available Meeting Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="meetingDate"
                                                name="meetingDate"
                                                value={formData.meetingDate || ''}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mt-5 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
