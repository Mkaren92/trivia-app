import { Fragment } from "react";
import ChevronUpIcon from "../icons/ChevronUpIcon.jsx";
import ChevronDownIcon from "../icons/ChevronDownIcon.jsx";
import { Listbox, Transition } from "@headlessui/react";

export default function CustomListBox({ items, value, setValue }) {
  return (
    <Listbox onChange={setValue}>
      <div className="relative w-80">
        <Listbox.Button
          className={({ open }) => `
              relative
              text-lg
              w-full
              cursor-pointer
              rounded-lg
              bg-neutral-50
              py-3
              pl-4
              pr-10
              text-left
              border-2
              text-slate-900
              focus:outline-none
              hover:border-neutral-200
              ${open && "border-emerald"}
              ${value && !open && "border-emerald-light"}
              ${!value && "text-gray-500 border-neutral-100"}
            `}
        >
          {({ open }) => (
            <>
              <span className="block truncate">
                {value ? value.name : "Category"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </span>
            </>
          )}
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1.5 text-lg rounded max-h-60 w-full overflow-auto bg-neutral-50 p-2.5 shadow focus:outline-none">
            {items.map((item) => (
              <Listbox.Option
                key={item.id}
                className={({ active }) =>
                  `relative rounded cursor-pointer select-none p-2 
                    ${
                      active ? "bg-neutral-100 text-primary" : "text-slate-900"
                    }`
                }
                value={item}
              >
                <span className="block truncate">{item.name}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
