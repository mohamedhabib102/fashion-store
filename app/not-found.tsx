import Link from 'next/link';
import CustomContainer from '@/components/ui/CustomContainer';

export default function NotFound() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-[#FAF9F6] py-20">
            <CustomContainer>
                <div className="text-center space-y-8">
                    {/* Large 404 with Shadow Effect */}
                    <div className="relative inline-block">
                        <h1 className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-[#1a1a1a] opacity-10 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-main-color">
                                Page Not Found
                            </h2>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto space-y-6">
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            Oops! The style you're looking for seems to have gone out of stock or moved to a new collection.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="w-full sm:w-auto px-10 py-4 bg-black text-white text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-main-hover transition-all duration-300"
                            >
                                Back to Home
                            </Link>
                            <Link
                                href="/products"
                                className="w-full sm:w-auto px-10 py-4 border border-black text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
                            >
                                Shop All
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="pt-20 justify-center gap-10 opacity-20 hidden md:flex">
                        <div className="w-20 h-1 bg-black"></div>
                        <div className="w-20 h-1 bg-black"></div>
                        <div className="w-20 h-1 bg-black"></div>
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
}
