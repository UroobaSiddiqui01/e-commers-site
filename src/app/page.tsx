
import HeroBanner from "@/components/HeroBanner";
import FlashSales from "@/components/FlashSales";
import BrowseByCategory from "@/components/category";
import BestSellingProducts from "@/components/BestSellingProducts";
import React from 'react';
import OurProducts from "@/components/OurProducts"
import Featured from '@/components/Featured';
import NewArrivals from '@/components/NewArrivals';
import Freedelivery from "@/components/free"


export default function Home() {
  return (
    <div>
      
      <HeroBanner />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <Featured />
      <OurProducts />
      <NewArrivals />
      <Freedelivery />
    </div>
  );
}

