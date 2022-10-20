
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs'


const DropDownButton = ({children, title}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border-0 shadow-md px-4 py-2 bg-white text-[12px] font-medium hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white">
          {title}
          <BsChevronDown className="-mr-1 ml-2 h-3 w-3" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-md bg-white  ring-white focus:outline-none z-50">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  href="#"
                  className={(
                    active ? 'bg-white text-gray-900 w-full text-left' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-full text-left'
                  )}
                >
                  {children}
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDownButton
