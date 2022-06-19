import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Alex from "../assets/lex.png";
const Footer = () => {
  return (
    <div className="bg-[#1C6AE0] lg:mt-[5%] mt-[20%] w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="">
        <h1 className=" font-bold text-3xl ml-[20%] text-[#ffffff]">
          BANKFULLY.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse maxime
          optio at laborum omnis accusantium quaerat corrupti facilis quo
          perspiciatis tempore dolore nulla, labore corporis quam explicabo quia
          voluptates quisquam?
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-100">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Carrers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto lg:-mt-[5%] mt-[20%]">
        <img
          className=" w-[50%]  mx-auto lg:ml-[150%] lg:w-[30%]"
          src={Alex}
          alt="lex"
        />
        <h1 className=" ml-[20%] translate-y-[80%] lg:ml-[150%] lg:w-[60%] text-white font-bold">
          Developer: Alex Adam
        </h1>
      </div>
    </div>
  );
};

export default Footer;
