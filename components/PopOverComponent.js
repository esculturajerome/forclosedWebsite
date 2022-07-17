import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

const solutions = {
  text: "Interested buyer may select a property from the list and submit Offer to Purchase (OTP) to Pag-IBIG Fund in a sealed envelope. On scheduled date of opening of offer, the buyer with the highest offer on a specific property shall be declared as the winning buyer.",
};

function PopOverComponent() {
  return (
    <div className="mt-1 w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                    ${open ? "" : "text-opacity-90"} w-4 h-4
                    group inline-flex items-center justify-center rounded-full bg-secColor/30 text-base font-medium text-secColor  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:opacity-70`}
            >
              <ExclamationCircleIcon />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute  z-10 mt-3 min-w-[250px] md:w-screen max-w-xs transform  px-0 lg:max-w-sm">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-gray-50 p-4">
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {solutions.text}
                      </span>
                    </span>
                    {/* <span className="block text-sm text-gray-500">
                      Start integrating products and tools
                    </span> */}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default PopOverComponent;
