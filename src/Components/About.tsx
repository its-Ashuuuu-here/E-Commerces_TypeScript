import React from "react";
import { Image } from "antd";
import { Tooltip } from "antd";


const About = () => {
  return (
    <>
      <section className="overflow-hidden bg-white  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mt-20 rounded-xl   hover:scale-110 ease-linear duration-100 ">
              <Image
                src="../Assest/bgs.jpg"
                alt="Product screenshot"
                className=" mt-30 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
                width="500px"
                height="400px"
              />
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base  font-semibold leading-7 text-indigo-600">
                  Produce 2023
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Prada Re-Edition 2023 Re-Nylon Bag
                </p>
                <p className="mt-6 text-lg leading-5 text-gray-600"> 
                
                  Best Product 2023
                </p> 
                <p className="max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none justify-content ">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. It usually
                  begins with: Lorem ipsum, or lipsum as it is sometimes known,
                  is dummy text used in laying out print, graphic or web
                  designs. The passage is attributed to an unknown typesetter in
                  the 15th century who is thought
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-5">
               <Tooltip title="Read More">
                <a
                  href="/products"
                  className="btn btn-outline-dark ms-2 px-3 py-2"
                >
                 Go to Products
                </a>
                </Tooltip> 
              </div>
            </div>
          </div>
         
          {/* Again next card  */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mt-20 rounded-xl   hover:scale-110 ease-linear duration-100 ">
              <Image
                src="../Assest/apple-watch.png"
                alt="Product screenshot"
                className=" mt-30 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
                width="500px"
                height="400px"
              />
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Produce 2023
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Smartwatch Review: Apple Watch Series 9
                </p>
                <p className="mt-6 text-lg leading-5 text-gray-600 font-bold">
             
                  Best Product 2023
                </p>
                <p className="max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none justify-content ">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. It usually
                  begins with: Lorem ipsum, or lipsum as it is sometimes known,
                  is dummy text used in laying out print, graphic or web
                  designs. The passage is attributed to an unknown typesetter in
                  the 15th century who is thought
                </p>
              </div>
              <div className="flex items-center gap-4 mb-5">
              <Tooltip title="Read More">
                <a
                  href="/products"
                  className="btn btn-outline-dark ms-2 px-3 py-2"
                >
                  Go to Products 
                </a>
                </Tooltip>
                </div>
            </div>
          </div>
 {/* Another Block  */}
 <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mt-20 rounded-xl   hover:scale-110 ease-linear duration-100 ">
              <Image
                src="../Assest/bag.jpg"
                alt="Product screenshot"
                className=" mt-30 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
                width="500px"
                height="400px"
              />
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Produce 2023
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                16 Designer Home Items Ideal for Gifting
                </p>
                <p className="mt-6 text-lg leading-5 text-gray-600">
                 
                  Best Product 2023
                </p>
                <p className="max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none justify-content ">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. It usually
                  begins with: Lorem ipsum, or lipsum as it is sometimes known,
                  is dummy text used in laying out print, graphic or web
                  designs. The passage is attributed to an unknown typesetter in
                  the 15th century who is thought
                </p>
              </div>
              <div className="flex items-center gap-4 mb-5">
              <Tooltip title="Read More">
                <a
                  href="/products"
                  className="btn btn-outline-dark ms-2 px-3 py-2"
                >
                  Go to Products 
                </a>
                </Tooltip>
                </div>
            </div>
          </div>

        </div>
     

     
  </section>
{/* Next Card......................................................... */}



    
    </>

    
  );
};

export default About;
