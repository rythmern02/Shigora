"use client"
import Link from "next/link";
import Listing from "../buy-listing/page";

interface Listing {
  _id: string;
  name: string;
  address: string;
  imageUrls: string[];
  price: number;
}

const sampleOfferListings: Listing[] = [
  {
    _id: '1',
    name: 'Modern Apartment',
    address: '789 Pine Street, New York, NY',
    imageUrls: ['https://via.placeholder.com/400'],
    price: 1200,
  },
  {
    _id: '2',
    name: 'Cozy Cottage',
    address: '123 Maple Road, Portland, OR',
    imageUrls: ['https://via.placeholder.com/400'],
    price: 1500,
  },
  {
    _id: '3',
    name: 'Spacious Loft',
    address: '456 Oak Avenue, Austin, TX',
    imageUrls: ['https://via.placeholder.com/400'],
    price: 1800,
  },
];

const OfferListings: React.FC = () => {
  const offerListings = sampleOfferListings;

  return (
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>

              <Listing />

        </div>

  );
};

export default OfferListings;
