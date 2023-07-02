import React from "react";
import { useSelector } from "react-redux";
import { BankData } from "../redux/bankSlice";

export const Bank = () => {
  const bank = useSelector((state) => state);
  console.log(bank);
  return (
    <>
      <header className="bg-white ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                CUSTOMER NAME
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ACCOUNT NUMBER
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ACCOUNT TYPE
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {bank.bank.accounts.map((data) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                  {data.id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                  {data.customerName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {data.accountNumber}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                  {data.accountType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
