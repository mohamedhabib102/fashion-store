"use client";
import { Metadata } from "next";
import CustomContainer from "@/components/ui/CustomContainer";
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <section className="bg-[#FAF9F6] min-h-screen">
            {/* Split Hero Section */}
            <div className="relative h-[60vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-linear-to-r from-black to-transparent z-10" />
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/10 flex items-center justify-center">
                        <span className="text-[20vw] font-black text-white/5 select-none">CONTACT</span>
                    </div>
                </div>

                <CustomContainer>
                    <motion.div
                        className="relative z-20 max-w-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <nav className="text-[10px] font-bold text-white/50 uppercase mb-6 tracking-[0.4em]">
                            Global Services / Contact Us
                        </nav>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                            Let's <span className="text-gray-500 italic font-light">Talk</span> <br />
                            Fashion.
                        </h1>
                        <p className="mt-8 text-lg text-white/70 font-medium max-w-md">
                            Have a question about our collections or need style advice? Our team is always here to assist you.
                        </p>
                    </motion.div>
                </CustomContainer>
            </div>

            <div className="py-24">
                <CustomContainer>
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Left Side: Contact Form */}
                        <motion.div
                            className="lg:col-span-7"
                            {...fadeIn}
                        >
                            <div className="bg-white p-8 md:p-12 shadow-2xl shadow-black/5">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Send an Inquiry</h2>
                                <p className="text-gray-400 text-sm mb-10 tracking-wide uppercase">Expected response time: 2-4 hours</p>

                                <form className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <input type="text" id="name" required className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-black transition-colors" placeholder=" " />
                                            <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Full Name</label>
                                        </div>
                                        <div className="relative group">
                                            <input type="email" id="email" required className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-black transition-colors" placeholder=" " />
                                            <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <select className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-black transition-colors appearance-none">
                                            <option>Style Advice</option>
                                            <option>Order Tracking</option>
                                            <option>Returns & Exchanges</option>
                                            <option>Partnerships</option>
                                        </select>
                                        <label className="absolute left-0 -top-4 text-[10px] font-bold uppercase text-gray-400">Subject</label>
                                        <div className="absolute right-0 top-4 pointer-events-none">
                                            <FiArrowRight className="rotate-90 text-gray-300" />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <textarea id="message" required rows={4} className="peer w-full bg-transparent border-b-2 border-gray-100 py-3 outline-none focus:border-black transition-colors resize-none" placeholder=" "></textarea>
                                        <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Your Message</label>
                                    </div>

                                    <button className="group flex items-center justify-between w-full bg-black text-white px-8 py-6 text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-main-hover transition-all duration-500 overflow-hidden relative">
                                        <span className="relative z-10 transition-transform group-hover:-translate-x-2">Send Message</span>
                                        <FiArrowRight className="relative z-10 text-xl transition-transform group-hover:translate-x-2" />
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Right Side: Info Tiles */}
                        <div className="lg:col-span-5 space-y-10 mt-10 lg:mt-0">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl font-black uppercase tracking-widest border-l-4 border-black pl-4">Digital Presence</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                    <div className="bg-white p-6 flex items-center gap-5 hover:shadow-xl transition-shadow cursor-pointer group">
                                        <div className="w-12 h-12 bg-main-color text-white flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
                                            <FiMail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Email Support</p>
                                            <p className="text-sm font-bold">care@xivfashion.com</p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 flex items-center gap-5 hover:shadow-xl transition-shadow cursor-pointer group">
                                        <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
                                            <FaWhatsapp size={22} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Whatsapp Business</p>
                                            <p className="text-sm font-bold">+20 102 345 6789</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-xl font-black uppercase tracking-widest border-l-4 border-black pl-4">Flagship Store</h3>
                                <div className="bg-black text-white p-10 relative overflow-hidden group">
                                    <div className="relative z-10 space-y-4">
                                        <p className="text-xs font-medium text-gray-400 leading-relaxed uppercase tracking-widest">
                                            Visit us in the heart of the city for a personalized styling experience.
                                        </p>
                                        <h4 className="text-2xl font-black uppercase leading-tight">
                                            Cairo Design District <br />
                                            Building 14, 2nd Floor.
                                        </h4>
                                        <div className="pt-4 flex items-center gap-3 text-sm font-bold group-hover:text-gray-300 transition-colors">
                                            <FiMapPin /> Open Maps <FiArrowRight />
                                        </div>
                                    </div>
                                    <div className="absolute top-[-20%] right-[-10%] text-[150px] font-black text-white/5 pointer-events-none">
                                        XIV
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {[
                                    { icon: <FaInstagram />, label: "Instagram" },
                                    { icon: <FaFacebookF />, label: "Facebook" },
                                    { icon: <FaTwitter />, label: "X" }
                                ].map((s, i) => (
                                    <button key={i} className="flex-1 h-16 bg-white flex items-center justify-center text-xl hover:bg-black hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                                        {s.icon}
                                    </button>
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </CustomContainer>
            </div>

            {/* Bottom Decoration */}
            <div className="h-2 bg-linear-to-r from-transparent via-black to-transparent opacity-10" />
        </section>
    );
}
