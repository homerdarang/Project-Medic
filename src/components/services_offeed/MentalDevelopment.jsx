import React from 'react';
import { BsQuestionCircleFill } from "react-icons/bs";
import Footer from '../Footer';

function MentalDevelopment() {
    return (
        <>
            <div>
                {/* Developmental Support */}
                <div className='md:pt-44 w-2/3 grid place-items-center m-auto'>
                    <h1 className='text-2xl font-medium my-8'>Developmental Support</h1>
                    <div>
                        <p className='text-xl font-light'>Welcome to our Developmental Support page, where we provide comprehensive resources and guidance to help you nurture your baby's growth and development. This section is designed to offer expert advice and practical tips on various aspects of your baby's development, ensuring that you have the knowledge and tools to support your child through each milestone.</p>
                    </div>
                    <div className='my-8'>
                        <h3 className='text-xl font-bold flex'>
                            What is Developmental Support
                            <span className='ms-2'><BsQuestionCircleFill /></span>
                        </h3>
                        <div>
                            <p className='text-xl font-light'>Developmental support encompasses a range of activities, guidance, and information aimed at fostering the healthy growth and development of your baby. This includes physical, cognitive, emotional, and social development, ensuring that your child reaches important milestones and builds a strong foundation for future learning and well-being.</p>
                        </div>
                    </div>
                    {/* Key Ares of Development */}
                    <h1 className='text-2xl font-medium my-8'>Key Areas of Development</h1>
                    <div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>1. Physical Development</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Motor Skills: </span>
                                    <p className='text-lg font-light inline'>Guidance on activities that promote gross motor skills (crawling, walking) and fine motor skills (grasping, holding objects).</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Growth Monitoring: </span>
                                    <p className='text-lg font-light inline'>Information on tracking your baby's growth, including height, weight, and head circumference.</p>
                                </div>
                            </li>
                        </div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>2. Cognitive Development</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Learning and Thinking: </span>
                                    <p className='text-lg font-light inline'>Tips on stimulating your baby's curiosity and cognitive skills through play, exploration, and problem-solving activities.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Language Development: </span>
                                    <p className='text-lg font-light inline'>Strategies for encouraging early language skills, including talking, reading, and interactive games.</p>
                                </div>
                            </li>
                        </div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>3. Emotional and Social Development</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Attachment and Bonding: </span>
                                    <p className='text-lg font-light inline'>Advice on fostering a secure attachment through responsive parenting and emotional support.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Social Skills: </span>
                                    <p className='text-lg font-light inline'>Activities that promote social interactions and help your baby learn to engage with others.</p>
                                </div>
                            </li>
                        </div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>4. Sensory Development</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Sensory Play: </span>
                                    <p className='text-lg font-light inline'>Ideas for sensory play activities that stimulate your baby's senses (sight, sound, touch, taste, and smell) and promote sensory integration.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Environment Enrichment: </span>
                                    <p className='text-lg font-light inline'>Suggestions for creating a stimulating and safe environment that encourages exploration and sensory development.</p>
                                </div>
                            </li>
                        </div>
                    </div>
                    {/* Developmental Milestone */}
                    <h1 className='text-2xl font-medium my-8'>Developmental Milestones</h1>
                    <div className='my-6'>
                        <p className='text-xl font-light'>Understanding developmental milestones can help you track your baby's progress and identify areas where they might need extra support. Here are some key milestones to look for:</p>
                    </div>
                    <div>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>0-3 Months:</span> Lifts head when on tummy, responds to sounds, makes cooing noises, and begins to smile.</li>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>4-6 Months:</span> Rolls over, reaches for objects, babbles, and shows interest in surroundings.</li>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>7-9 Months:</span> Sits without support, starts to crawl, responds to own name, and shows preference for certain toys.</li>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>10-12 Months:</span> Pulls to stand, cruises along furniture, says simple words, and shows stranger anxiety.</li>
                    </div>
                    {/* Activity Tips */}
                    <h1 className='text-2xl font-medium my-8'>Activity Tips</h1>
                    <div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>1. Physical Activities</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Tummy Time: </span>
                                    <p className='text-lg font-light inline'>Essential for strengthening neck and shoulder muscles and preventing flat spots on the head.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Interactive Play: </span>
                                    <p className='text-lg font-light inline'> Engage in activities like peek-a-boo, singing, and reading to stimulate cognitive and language development.</p>
                                </div>
                            </li>
                        </div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>2. Daily Routine</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Consistent Schedule: </span>
                                    <p className='text-lg font-light inline'>Establishing a consistent daily routine helps provide a sense of security and predictability.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Positive Reinforcement: </span>
                                    <p className='text-lg font-light inline'> Use praise and encouragement to reinforce positive behaviors and developmental achievements.</p>
                                </div>
                            </li>
                        </div>
                        <div className='my-6'>
                            <h3 className='text-xl font-medium my-3'>3. Parental Involvement</h3>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Active Participation: </span>
                                    <p className='text-lg font-light inline'>Be actively involved in your baby's play and exploration activities to enhance learning and bonding.</p>
                                </div>
                            </li>
                            <li className='flex'>
                                <div className=''>
                                    <span className='text-xl font-medium'>Observant Parenting: </span>
                                    <p className='text-lg font-light inline'>Pay close attention to your baby's cues and developmental progress, adjusting activities to meet their evolving needs.</p>
                                </div>
                            </li>
                        </div>
                    </div>
                    {/* When to seek help */}
                    <h1 className='text-2xl font-medium my-8'>When to seek Parental Help</h1>
                    <div className='my-6'>
                        <p className='text-xl font-light'>While every baby develops at their own pace, there are certain signs that might indicate the need for professional evaluation:</p>
                    </div>
                    <div>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>Delayed Milestone:</span> If your baby is significantly behind on multiple milestones, it’s worth discussing with a pediatrician.</li>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>Lack of Response:</span> If your baby does not respond to sounds, faces, or attempts to communicate, seek advice from a healthcare professional.
                        </li>
                        <li className='text-lg font-light my-3'><span className='text-xl font-medium'>Muscle Tone Issue:</span> If your baby seems unusually stiff or floppy, consult a specialist for an assessment.</li>
                    </div>
                    <h1 className='text-2xl font-medium my-8'>Resource and Support</h1>
                    <div>
                        <ul className='text-lg font-light my-3'><span className='text-xl font-medium'>1. Expert Consultation:</span> Book a consultation with our pediatric development specialists for personalized advice and support.
                        </ul>
                        <ul className='text-lg font-light my-3'><span className='text-xl font-medium'>2. Educational Articles:</span> Access our library of articles on various aspects of baby development, written by experts.
                        </ul>
                        <ul className='text-lg font-light my-3'><span className='text-xl font-medium'>3. Community Forums:</span> Join our community forums to connect with other parents, share experiences, and seek advice.
                        </ul>
                    </div>
                    <div>
                        <p className='py-10 text-xl font-light'>We are dedicated to providing you with the resources and support you need to help your baby thrive. Explore our developmental support resources, engage with our experts, and join our community to ensure your child has the best start in life.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MentalDevelopment