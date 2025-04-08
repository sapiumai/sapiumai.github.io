import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import github from '../assets/github-black.png'
import linkedin from '../assets/in-logo-blue.png'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_da6kt7j',
            'template_arastto',
            form.current,
            'yLgyCNTvTh__OirJV'
        )
            .then((result) => {
                alert('Email sent successfully!');
                form.current.reset();
            }, (error) => {
                alert('Failed to send email: ' + error.text);
            });
    };

    return (
        <div className="container max-w-6xl mx-auto p-6 mt-10">
            <div className='mb-10'>
                <h3 className='text-4xl font-bold mb-10'>Get in Touch!</h3>
                <p className='text-xl'>We are always looking for new opportunities to collaborate, innovate, and grow. Whether you're seeking AI-driven solutions, exploring partnership opportunities, or interested in joining our team, we'd love to hear from you!</p>
            </div>
            <div className="flex">
                <div className="w-1/3 text-left">
                    <div className="space-y-2 mt-10">
                        <a
                            href="https://www.linkedin.com/company/sapiumai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center mb-5"
                        >
                            <img src={linkedin} alt="linkedin" className="w-5 h-5" />
                            <p className='text-primaryText text-xl ml-5'>Follow us!</p>
                        </a>

                        <div className="flex flex-row items-center">
                            <a
                                href="https://github.com/sapiumai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row items-center mb-5"
                            >
                                <img src={github} alt="github" className="w-5 h-5" />
                                <p className='text-primaryText text-xl ml-5'>Check out our projects!</p>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Vertical Divider */}
                <div className="w-px bg-rowBorder mx-10"></div>

                {/* Right Column - Contact Form */}
                <div className="w-2/3">
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-10">
                        <div>
                            <label className="block text-primaryText mb-2 text-lg font-semibold">Your name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="w-full p-2 rounded bg-primaryBackground text-primaryText border-footerBorder border"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-primaryText text-lg font-semibold mb-2">Your e-mail</label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full p-2 rounded bg-primaryBackground text-primaryText border-footerBorder border"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-primaryText text-lg font-semibold mb-2">Message</label>
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
