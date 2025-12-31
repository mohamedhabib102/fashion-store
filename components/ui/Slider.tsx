"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Product } from '@/lib/db';



type Props = {
  products: Product[] | string[];
  nextEl: string;
  prevEl: string;
  size?: number;
}

const Slider: React.FC<Props> = ({ products, nextEl, prevEl, size }) => {
  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={size ? size : 2}
        observeParents={true}
        observer={true}
        navigation={{
          nextEl: `#${nextEl}`,
          prevEl: `#${prevEl}`,
        }}
        className='w-full'
      >
        {products.map((p, index) => {
          const isProduct = typeof p !== 'string';
          const src = isProduct ? p.image[0] : p;
          const alt = isProduct ? p.title : "image";
          const key = isProduct ? p.id : `${p}-${index}`;

          return (
            <SwiperSlide key={key}>
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={src}
                  fill
                  alt={alt}
                  className='object-cover'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};


export default Slider;
