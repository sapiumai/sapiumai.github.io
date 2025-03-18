import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import github from '../assets/github-black.png'
import linkedin from '../assets/in-logo-blue.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                console.log('Email sent successfully');
                form.current.reset();
            }, (error) => {
                console.log('Failed to send email:', error);
            });
    };

    return (
        <div className="container max-w-6xl mx-auto p-6">
            <div className="flex">
                <div className="w-1/3 text-left">
                    <h3 className="text-2xl">Connect With Us</h3>
                    <div className="space-y-2 mt-10">
                        <div className="flex flex-row">
                            <a
                                href="https://www.linkedin.com/company/sapiumai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex mt-1"
                            >
                                <img src={linkedin} alt="linkedin" className="w-6 h-6 mr-5" />
                            </a>
                            <p className='text-primaryText'>Follow us!</p>
                        </div>
                        <div className="flex flex-row">
                            <a
                                href="https://github.com/sapiumai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex mt-1"
                            >
                                <img src={github} alt="github" className="w-6 h-6 mr-5" />
                            </a>
                            <p className='text-primaryText items-center'>Check out our projects!</p>
                        </div>
                    </div>
                </div>


                {/* Vertical Divider */}
                <div className="w-px bg-rowBorder mx-10"></div>

                {/* Right Column - Contact Form */}
                <div className="w-2/3">
                    <h3 className="text-2xl ">Send us an e-mail</h3>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-10">
                        <div>
                            <label className="block text-primaryText mb-2">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="w-full p-2 rounded bg-primaryBackground text-primaryText border-footerBorder border"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-primaryText mb-2">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full p-2 rounded bg-primaryBackground text-primaryText border-footerBorder border"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-primaryText mb-2">Message</label>
                            <textarea
                                name="message"
                                className="w-full p-2 rounded bg-primaryBackground text-primaryText h-32 border-footerBorder border"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-primaryButtonBackground text-primaryButtonText px-6 py-2 rounded hover:bg-secondaryButtonBackground transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
