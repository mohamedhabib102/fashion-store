"use client"
import Link from "next/link";
import CustomContainer from "../ui/CustomContainer";
import Logo from "../ui/Logo";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#EFEFEF] py-16 border-t border-gray-200">
            <CustomContainer>
                <div className="flex flex-col items-center gap-12 text-[#1A1A1A]">
                    {/* Logo Section */}
                    <div className="flex justify-between items-center w-full">
                        <div>
                        <Logo/>
                        <h1 className="text-7xl font-black leading-none tracking-tighter">XIV</h1>
                        <h1 className="text-7xl font-black leading-none tracking-tighter">QR</h1>
                        </div>

                        <ul className="flex flex-col items-center gap-4 text-[13px] font-bold uppercase tracking-[0.2em]">
                            <li>
                                <Link href="/products" className="hover:opacity-50 transition-opacity">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:opacity-50 transition-opacity">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className="pt-8 border-t border-gray-300 w-full max-w-xs text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                            © {new Date().getFullYear()} XIV QR — ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>
            </CustomContainer>
        </footer>
    );
};

export default Footer;
