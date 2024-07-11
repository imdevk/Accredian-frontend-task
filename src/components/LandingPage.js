import React, { useState } from 'react';
import ReferralModal from './ReferralModal';
import Navbar from './Navbar';

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Eligibility');

    const faqData = {
        Eligibility: [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
        ],
        "How To Use?": [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
            }
        ],
        "Terms & Conditions": [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="container mx-auto px-4 py-8">
                <section className="text-center py-16">
                    <h2 className="text-4xl font-bold mb-4">Share the Knowledge, Earn Rewards</h2>
                    <p className="text-xl mb-8">Refer your friends to our courses and earn amazing rewards!</p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-lg"
                    >
                        Refer Now
                    </button>
                </section>

                <section className="py-28 px-4 bg-blue-200">
                    <h2 className="text-3xl font-bold mb-4 text-center">How Do I Refer?</h2>
                    <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <div className="bg-blue-100 rounded-full p-4 mb-4">
                                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Submit Referrals</h3>
                            <p>Submit referrals easily via our website's referral section.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <div className="bg-blue-100 rounded-full p-4 mb-4">
                                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
                            <p>Earn rewards once your referral joins an Accredian program.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <div className="bg-blue-100 rounded-full p-4 mb-4">
                                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Receive Bonus</h3>
                            <p>Both parties receive a bonus 30 days after program enrollment.</p>
                        </div>
                    </div>
                </section>

                <section className='py-8'>
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="flex justify-center mb-4">
                        {Object.keys(faqData).map((tab) => (
                            <button
                                key={tab}
                                className={`mr-4 px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {faqData[activeTab].map((item, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-bold mb-2">{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default LandingPage;