import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, PencilAltIcon } from "@heroicons/react/solid";

function DropdownComponent({ textButton, list, onDropdownSelect }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-between items-center text-left  rounded-md bg-white px-4 py-3 font-medium text-black text-sm hover:bg-opacity-70 focus:border-secColor focus:ring-secColor focus:outline-none focus:ring">
          <p className="line-clamp-1">{textButton}</p>
          <ChevronDownIcon
            className="mt-1 h-5 w-5 text-black"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="px-1 py-1 ">
            {list.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <button
                    onClick={() => onDropdownSelect(item)}
                    className={`${
                      active ? "bg-gray-500 text-white" : "text-gray-900"
                    } group flex w-full items-center text-left rounded-md px-2 py-2 text-sm`}
                  >
                    {/* <PencilAltIcon
                      className={`${
                        active ? "text-white" : "text-gray-500"
                      } mr-2 h-5 w-5`}
                    /> */}
                    {item.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownComponent;
