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
export default function Example() {
  return (
    <div className="bg-slate-800">
      <form className="mx-auto max-w-2xl w-90  p-6 rounded-md">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
              Upload Question Paper
            </h2>
            <p className="mt-1 text-sm leading-6 text-white">
              Please fill all the fields correctly.
            </p>

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

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Upload Question
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-white">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-slate-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-white">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
