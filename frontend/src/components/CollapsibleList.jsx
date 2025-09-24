import React, { useState } from 'react';

const CollapsibleList = ({productData}) => {

  const [isProductDetailsOpen, setProductDetailsOpen] = useState(false);
  const [isShippingDetailsOpen, setShippingDetailsOpen] = useState(false);
  const [isPaymentDetailsOpen, setPaymentDetailsOpen] = useState(false);
  const [isReturnPolicyOpen, setReturnPolicyOpen] = useState(false);
  const [isCareInstructionsOpen, setCareInstructionsOpen] = useState(false);

  return (
    <div className="space-y-4 max-w-xl mt-5">
      <hr className="sm:w-4/5"/>
      <div>
        <button
          className="w-full text-left px-4 font-semibold rounded-md focus:outline-none"
          onClick={() => setProductDetailsOpen(!isProductDetailsOpen)}
        >
          Product Details
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isProductDetailsOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
          } rounded-md px-4`}
        >
          {isProductDetailsOpen && <div className='font-normal'>{productData.description}</div>}
        </div>
      </div>

      <hr className="sm:w-4/5"/>

      <div>
        <button
          className="w-full text-left px-4 font-semibold rounded-md focus:outline-none"
          onClick={() => setShippingDetailsOpen(!isShippingDetailsOpen)}
        >
          Shipping Details
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isShippingDetailsOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
          } rounded-md px-4`}
        >
          {isShippingDetailsOpen && <div>
            <ul className='list-disc pl-5'>
              <li className='font-normal'>Delivered to doorstep in 3-5 working days.</li>
              <li className='font-normal'>Shipping all over Pakistan, no exceptions.</li>
              <li className='font-normal'>Customer pays shipping cost of 230 PKR.</li>
              <li className='font-normal'>Free return shipping for incorrect orders.</li>
              <li className='font-normal'>Tracking details sent via email/SMS.</li>
            </ul>
            </div>}
        </div>
      </div>

      <hr className="sm:w-4/5"/>

      <div>
        <button
          className="w-full text-left px-4 font-semibold rounded-md focus:outline-none"
          onClick={() => setPaymentDetailsOpen(!isPaymentDetailsOpen)}
        >
          Modes of Payment
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isPaymentDetailsOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
          } rounded-md px-4`}
        >
          {isPaymentDetailsOpen && <div>
            <ul className='list-disc pl-5'>
              <li className='font-normal'>Cash On Delivery</li>
              <li className='font-normal'>Easypaisa</li>
              <li className='font-normal'>Nayapay</li>
            </ul>  
          </div>}
        </div>
      </div>


      <hr className="sm:w-4/5"/>
      <div>
        <button
          className="w-full text-left px-4 font-semibold rounded-md focus:outline-none"
          onClick={() => setReturnPolicyOpen(!isReturnPolicyOpen)}
        >
          Return Policy
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isReturnPolicyOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
          } rounded-md px-4`}
        >
          {isReturnPolicyOpen && <div>
            <p className='font-normal'>
              We accept returns within 10 days, with refunds issued after store manager approval.
              Returns should meet the following conditions:
            </p>  
            <ul className='list-disc pl-5 pt-2'>
              <li className='font-normal'>Return withing 10 days</li>
              <li className='font-normal'>Product must be unworn and unused</li>
              <li className='font-normal'>Undamaged and in good shape</li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleList;
