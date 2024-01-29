/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { colleges, semesters, branches } from "../constants";
import Footer from "../components/Footer";
export default function Example() {
  return (
    <>
      <div className="bg-slate-800 h-screen w-screen">
        <form className="mx-auto max-w-2xl w-90  p-6 rounded-md">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">
                Find Question Paper
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    College
                  </label>
                  <div className="mt-2">
                    <select
                      name="location"
                      id="location"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select College</option>
                      {colleges.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    {/* {credentials.title === "other" && (
                    <div className="mt-3">
                      <label htmlFor="otherLocation" className="form-label">
                        Other College
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="otherLocation"
                        placeholder="Other Location"
                        value={credentials.otherLocation}
                        onChange={onChange}
                      />
                    </div>
                  )} */}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Semester
                  </label>
                  <div className="mt-2">
                    <select
                      name="location"
                      id="location"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Semester</option>
                      {semesters.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {/* {credentials.title === "other" && (
                    <div className="mt-3">
                      <label htmlFor="otherLocation" className="form-label">
                        Other College
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="otherLocation"
                        placeholder="Other Location"
                        value={credentials.otherLocation}
                        onChange={onChange}
                      />
                    </div>
                  )} */}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    End/Mid Sem
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>End Semester</option>
                      <option>Mid Semester</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Branch
                  </label>
                  <div className="mt-2">
                    <select
                      name="location"
                      id="location"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Branch</option>
                      {branches.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {/* {credentials.title === "other" && (
                    <div className="mt-3">
                      <label htmlFor="otherLocation" className="form-label">
                        Other College
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="otherLocation"
                        placeholder="Other Location"
                        value={credentials.otherLocation}
                        onChange={onChange}
                      />
                    </div>
                  )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Search Paper
            </button>
          </div>
        </form>

        {/* <div id="about" className="container mx-auto p-8">
        <div className="text-gray-600 body-font w-full">
          <div className=" w-full p-1 hover:text-blue-900">
            <div className="border-2 border-teal-200 p-2 h-full rounded-2xl bg-stone-50 hover:bg-teal-400 shadow-inner ">
              <p className="leading-relaxed p-4 md:p-8 lg:p-12 font-base md:font-medium text-center hover:text-stone-100 sm:text-xl text-base">
                "Oops! It seems this question paper hasn't been uploaded yet.
                Don't worry, you can be the trendsetter! Spread the word about
                PapersHub to your fellow students and help us build a
                comprehensive repository of exam papers. Let's join hands in
                making sure no student faces blank pages in the future. Share
                the link, empower your peers, and let's together shape a
                resourceful academic community at PapersHub! 🚀✨ #PapersHub
                #KnowledgeSharing"
              </p>
            </div>
          </div>
        </div>
      </div> */}
        <div className="mt-40 flex-grow">
          <Footer />
        </div>
      </div>
    </>
  );
}
