import Badge from "./Badge";
import PopOverComponent from "./PopOverComponent";

function ResultComponent({ type, inactive }) {
  return (
    <section
      className={`${
        type === 2
          ? "border-secColor"
          : type === 1
          ? "border-blue-500"
          : "border-gray-500"
      }  ${
        inactive ? "bg-gray-200 border-none" : "bg-white"
      }   border rounded-lg shadow-lg w-full pb-3 text-sm`}
    >
      <div className="grid grid-cols-7 p-3">
        <div className="justify-self-start col-span-full md:justify-self-start md:col-span-1 flex gap-2 lg:flex-col">
          {/* <div>
            <PopOverComponent />
          </div> */}

          <div>
            <Badge type={type} />
          </div>

          {/* <p className="text-xs mt-2">
          Interested buyer may select a property from the list and submit Offer
          to Purchase (OTP) to Pag-IBIG Fund in a sealed envelope. On scheduled
          date of opening of offer, the buyer with the highest offer on a
          specific property shall be declared as the winning buyer.
        </p> */}
          {/* <p>Sale of acquired properties with a minimum bid set by the Fund, wherein the bidder with the highest bid offer shall be declared as winner.</p> */}
        </div>

        <div className="col-span-full md:col-span-3 mt-2 md:mt-5 order-2 md:order-1">
          <div className="md:pr-8">
            <p className="text-base py-2">
              Fini Homes - Bldg-SAPHIRE-2A PARKING-Floor Unit-PL 1 - Brgy.
              Marulas, City of Valenzuela, Metro Manila
            </p>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-4">
            <p>
              Publication Batch No: <br />
              <span className="font-bold">15121</span>
            </p>
            <p>
              Property Number: <br />
              <span className="font-bold">815201909270059</span>
            </p>
            <p>
              Property Type: <br />
              <span className="font-bold">CONDOMINIUM</span>
            </p>
            <p>
              Property Type: <br />
              <span className="font-bold">CONDOMINIUM</span>
            </p>
            <div className="col-span-2">
              <div className="flex gap-1 items-center justify-start">
                <div>
                  <PopOverComponent />
                </div>
                <p>Remarks: </p>
              </div>
              <p className="font-bold">
                Occupied-Occupant Undisclosed - For Title Consolidation
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-3 order-1 md:order-2 md:justify-self-center mt-2 md:mt-5">
          <ul className="flex justify-end gap-6 md:gap-8 ">
            <li className="text-sm border-b border-mainColor/75 whitespace-nowrap border-dotted">
              <span className=" text-mainColor">Lot Size </span>
              <br />
              12.5 sqm
            </li>
            <li className="text-sm border-b border-mainColor/75 whitespace-nowrap border-dotted">
              <span className="text-mainColor">Floor Size </span>
              <br />
              23 sqm
            </li>
            <li className="text-sm border-b-2 border-mainColor/75 whitespace-nowrap border-dotted">
              <span className="text-mainColor">Minimum Selling Price</span>
              <br />
              <span className="font-bold ">Php 2,000,000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-4">
        <p className="text-xs text-gray-500">
          Bidding: June 13 - 17, 2022 | Result: June 20, 2022
        </p>
      </div>
    </section>
  );
}

export default ResultComponent;
