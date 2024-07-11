import React, { useState } from 'react';
import axios from 'axios';

const ReferralModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        course: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        try {
            const response = await axios.post('https://accredian-backend-task-22ri.onrender.com/api/referrals', formData);
            console.log('Referral submitted:', response.data);
            setSubmitSuccess(true);
            setTimeout(() => {
                onClose();
                setFormData({
                    referrerName: '',
                    referrerEmail: '',
                    refereeName: '',
                    refereeEmail: '',
                    course: '',
                });
            }, 2000);
        } catch (error) {
            console.error('Error submitting referral:', error);
            setSubmitError('First, you have to set DATABASE_URL first in dotenv file.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
                {submitSuccess ? (
                    <div className="text-green-600 mb-4">Referral submitted successfully!</div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="referrerName" className="block mb-1">Your Name</label>
                            <input
                                type="text"
                                id="referrerName"
                                name="referrerName"
                                value={formData.referrerName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="referrerEmail" className="block mb-1">Your Email</label>
                            <input
                                type="email"
                                id="referrerEmail"
                                name="referrerEmail"
                                value={formData.referrerEmail}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="refereeName" className="block mb-1">Friend's Name</label>
                            <input
                                type="text"
                                id="refereeName"
                                name="refereeName"
                                value={formData.refereeName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="refereeEmail" className="block mb-1">Friend's Email</label>
                            <input
                                type="email"
                                id="refereeEmail"
                                name="refereeEmail"
                                value={formData.refereeEmail}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="course" className="block mb-1">Course</label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded"
                                required
                            >
                                <option value="">Select a course</option>
                                <option value="web-development">Web Development</option>
                                <option value="data-science">Data Science</option>
                                <option value="mobile-app-development">Mobile App Development</option>
                            </select>
                        </div>
                        {submitError && (
                            <div className="text-red-600 mb-4">{submitError}</div>
                        )}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReferralModal;
