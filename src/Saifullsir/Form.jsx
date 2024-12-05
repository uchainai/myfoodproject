import React from "react";

function Form() {
  const clickHandel = () => {
    window.print();
  };
  return (
    <div className=" bg-white flex flex-col w-screen justify-center items-center">
      <div className="bg-white   flex  ">
        <div className="bg-white gap-16 mt-6">
          <div className="my-20 flex flex-col gap-2">
            <h2 className="text-center text-black text-xl">
              ম্যানগ্রোভ হোস্টেল
            </h2>
            <h2 className="text-center text-black text-xl">
              হোস্টেলের ছাড়পত্র
            </h2>
            <h2 className="text-center text-black text-xl"> ছাত্রের কপি</h2>
            <table className="border">
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  তারিখ
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  ছাত্রের নাম
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  ছাত্র আইডি নং
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  হোস্টেল নং
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr>
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  রুম নং
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
            </table>
            <div className="text-black flex">
              <h2 className="m-4 mt-24">ছাত্রের স্বাক্ষর</h2>
              <h2 className="m-4 mt-24">ম্যানেজারের স্বাক্ষর</h2>
              <h2 className="m-4 mt-24">গার্ডের স্বাক্ষর</h2>
              <h2 className="m-4 mt-24">হোস্টেল সুপার স্বাক্ষর</h2>
            </div>
          </div>
          <div className="my-10 flex flex-col gap-2">
            <h2 className="text-center text-black text-xl">
              ম্যানগ্রোভ হোস্টেল
            </h2>
            <h2 className="text-center text-black text-xl">
              হোস্টেলের ছাড়পত্র
            </h2>
            <h2 className="text-center text-black text-xl"> ম্যানেজার কপি</h2>
            <table className="border">
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  তারিখ
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  ছাত্রের নাম
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  ছাত্র আইডি নং
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr className="border">
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  হোস্টেল নং
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
              <tr>
                <th
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                >
                  রুম নং
                </th>
                <td
                  colSpan="2"
                  className="border  border-black py-2 px-20 text-black"
                ></td>
              </tr>
            </table>
            <div className="text-black flex">
              <h2 className="m-4 mt-24">ছাত্রের স্বাক্ষর</h2>
              <h2 className="m-4 mt-24">ম্যানেজারের স্বাক্ষর</h2>
              <h2 className="m-4 mt-24">গার্ডের স্বাক্ষর</h2>
              <h2 className="m-4 mt-24"> হোস্টেল সুপার স্বাক্ষর</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={clickHandel}
          className="btn bg-green-700 justify-center  mt-40  w-40 mb-24 text-white"
        >
          Print
        </button>
      </div>
    </div>
  );
}

export default Form;
