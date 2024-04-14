import { Helmet } from "react-helmet-async";
import { IoIosArrowForward } from "react-icons/io";

const Terms = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Helmet>
        <title>Hospitality_Terms & Conditions</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-2">
        <div className="w-full lg:w-1/4 md:w-full">
          <div className="  mt-32 space-y-4">
            <h2 className=" text-2xl font-medium">Table of Contents</h2>

            <ul className=" border-l-2 pl-2 space-y-2">
              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section1")}
              >
                1. Financing Terms
              </li>

              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section2")}
              >
                2. Seller Assist
              </li>
              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section3")}
              >
                3. Who pays the cloding Cost
              </li>
              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section4")}
              >
                4. Home Inspection
              </li>
              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section5")}
              >
                5. Fixtures and Appliances
              </li>
              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section6")}
              >
                6. losing Date
              </li>
              <li
                className=" cursor-pointer hover:btn-link no-underline"
                onClick={() => scrollTo("section7")}
              >
                7. Sale Exiting Home The Bottom Line
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-2/4 md:w-full">
          <div className="px-4 mt-24 space-y-4 mb-5">
            <span className="flex items-center ">
              <a href="#" className="btn-link no-underline">
                ALTERNATIVE INVESTMENTS
              </a>
              <IoIosArrowForward />{" "}
              <a href="#" className="btn-link no-underline">
                REAL ESTATE INVESTING
              </a>
            </span>
            <h2 className=" text-2xl font-bold">We have 7 Conditions</h2>
            <h3 className="block">
              <p>
                Real estate can be a complicated business; there are so many
                details and wrinkles you have to smooth out before you can
                actually move into a new home. From hiring an agent, to finding
                that perfect dream home, not to mention the process of financing
                and making an offer to purchase, finally getting to the contract
                stage can be time-consuming and complex.
              </p>
              <p>
                But when you do make a formal offer to buy the home you want to
                buy, you will end up reading and filling out a lot of paperwork
                specifying the terms and conditions of your offer. Aside from
                obvious items like the address and{" "}
                <a href="#" className="btn-link no-underline">
                  purchase price{" "}
                </a>
                of the property, here are some more nuanced items you should be
                sure to include in your real estate purchase contract. In
                legalese, these are called contingencies that are written in to
                your{" "}
                <a href="#" className="btn-link no-underline">
                  real estate
                </a>{" "}
                contract.
              </p>
            </h3>
            <div className=" shadow-2xl space-y-2 p-4">
              <h2 className="text-xl font-medium">KEY TAKEAWAYS</h2>
              <li>
                When you make a purchase offer on a home, make sure you fully
                understand all of the conditions specified in your contract.
              </li>
              <li>
                Some important contingency clauses should include financing,
                home inspections, closing costs, and the closing date, among
                others.
              </li>
              <li>
                Most contracts will contain contingencies, so it is important to
                know all of the issues that may affect your deal.
              </li>
              <li>
                If any contingency is not met during the specified period, you
                may be able to walk away from the deal along with your deposit.
              </li>
            </div>
            <h2 id="section1" className="text-xl font-bold">
              1. Financing Terms
            </h2>
            <span className=" space-y-4">
              <p>
                Most people are simply not financially secure enough to make an
                all-cash offer on a home—and chances are, you are one of them.
                That means you will have to take out a mortgage. But before you
                draw up your purchase offer, make sure you research the interest
                rate environment, and where you fit into that scenario in terms
                of your existing debt and credit score. Your purchase offer
                should only be contingent upon obtaining financing at a
                specified interest rate. This point is very important, and here
                is why: If you know you cannot afford the monthly payment on the
                house if the interest rate is higher than 6%, do not put 6.5% or
                more in your offer. If you do that and are only able to obtain
                financing at 6.5%, the seller gets to keep your earnest money
                deposit if and when you have to back out of the offer.
              </p>
              <p>
                If you need to obtain a certain type of loan to complete the
                deal, such as an FHA or VA loan, you should also specify this in
                your contract. If you are paying all cash for the property, you
                should state this as well because it makes your offer more
                attractive to sellers. Why? If you do not have to get a
                mortgage, the deal is more likely to go through, and closing is
                more likely to happen on time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:flex gap-9 bg-slate-200 p-4 ">
                <div className=" space-y-5">
                  <h2 className="text-3xl font-bold">INVESTOPIA Essential</h2>
                  <img
                    className="w-80"
                    src="https://i.ibb.co/d5K18Tn/finalcial.jpg"
                    alt=""
                  />
                </div>
                <div className=" space-y-9 ">
                  <h2 className="text-2xl font-bold">
                    Try the Investopia Essential
                  </h2>
                  <p className=" text-xl">
                    New to Investing? Learn how to trade in real time on our
                    vertual stock simulator. Our platfrom helps teach you the
                    right strategies for building and maintaining wealth.
                  </p>
                  <button className="bg-[#0e164de1] text-white px-6 py-2 active:scale-95">
                    Learn more
                  </button>
                </div>
              </div>
              <p>
                If you need to obtain a certain type of loan to complete the
                deal, such as an FHA or VA loan, you should also specify this in
                your contract. If you are paying all cash for the property, you
                should state this as well because it makes your offer more
                attractive to sellers. Why? If you do not have to get a
                mortgage, the deal is more likely to go through, and closing is
                more likely to happen on time.
              </p>
            </span>
            <h2 id="section2" className="text-xl font-bold">
              2. Seller Assist
            </h2>
            <span className=" space-y-4">
              <p>
                If you want the seller to pay for part or all of your closing
                costs, you must ask for it in your offer. Closing costs are
                typically expenses above the property price that both buyers and
                sellers pay to execute a real estate deal. When you put in a
                concession for a seller assist, you are asking the seller to
                cover some of these additional expenses.
              </p>
              <p>
                A seller assist is almost like a credit, where the seller agrees
                to absorb some of the added costs a buyer normally has to bear.
                Although it seems strange that a seller would pay a fee to sell
                their house, it is rather common. Sometimes, a buyer may also be
                willing to pay a little extra for the home if the seller agrees
                to pay more for the closing costs. It all boils down to how
                motivated each party is, and how well they negotiate.
              </p>
              <p>
                The offer should state the closing costs you are requesting as a
                dollar amount, say $6,000 in closing, or as a percentage of the
                home's purchase price such as 3%. The amount of the seller
                assist depends on the full purchase price of the property.
              </p>
            </span>
            <h2 id="section3" className="text-xl font-bold">
              3. Who Pays Specific Closing Costs
            </h2>
            <p>
              The agreement should specify whether the buyer or seller pays for
              each of the common fees associated with the home purchase, such as
              escrow fees, title search fees, title insurance, notary fees,
              recording fees, transfer tax, and so on. Your real estate agent
              can advise you as to who generally pays each of these fees in your
              area—the buyer or the seller.
            </p>
            <h2 id="section4" className="text-xl font-bold">
              4. Home Inspection
            </h2>
            <span className=" space-y-4">
              <p>
                Unless you buy a tear-down, you should include a home inspection
                contingency in your offer. This clause allows you to walk away
                from the deal if a home inspection reveals significant and/or
                expensive-to-repair flaws in the structure's condition. These
                are handled differently based on where you live—different states
                and cities have different laws that deal with home inspections.
              </p>
              <p>
                A home inspector will walk through the property and examine it
                for structural problems or damages. If they cannot assess the
                damage, they may recommend an inspector who specializes in a
                certain field to come in to the home. This may include
                electrical, pest, and lead-based paint inspectors.
              </p>
              <p>
                Remember, this is a very important part of the home buying
                process, so it should not be overlooked or taken lightly. Say an
                inspector walks through your prospective home and discovers the
                property needs a new roof at a cost of $15,000. If you do not
                have the money to cover the replacement, the home inspection
                contingency gives you the option to walk away from the deal, as
                it is a costly expense. In some cases, a seller may be willing
                to pick up the cost of the repair, or credit it from the
                purchase price. Most contingency contracts come with home
                inspection clauses, but if yours does not, check with your
                realtor.
              </p>
            </span>
            <h2 id="section5" className="text-xl font-bold">
              5. Fixtures and Appliances
            </h2>
            <p>
              If you want the refrigerator, dishwasher, stove, oven, washing
              machine, or any other fixtures and appliances, do not rely on a
              verbal agreement with the seller and do not assume anything. The
              contract must specify any additions that are negotiated such as
              fixtures and appliances that are to be included in the purchase.
              Otherwise, do not be surprised if the kitchen is bare, the
              chandelier is gone, and the windows are left without coverings.
            </p>
            <h2 id="section6" className="text-xl font-bold">
              6. Closing Date
            </h2>
            <span className=" space-y-4">
              <p>
                How much time do you need to complete the purchase transaction?
                Common time frames are 30, 45, and 60 days. Issues that can
                affect this time frame normally include the seller's need to
                find a new home, the remaining term on your lease if you
                currently rent, the amount of time needed for you to relocate if
                you move from a job, and so on.
              </p>
              <p>
                Occasionally, the buyer or seller may want a closing as short as
                two weeks or less, but it is difficult to remove all the
                contingencies and obtain all the necessary paperwork and funding
                in such a short period of time. Often, the hold-ups are not the
                buyer or the seller, but instead the bottleneck occurs with the
                lender or underwriter, the title company, or the lawyers.
              </p>
            </span>

            <h2 id="section7" className="text-xl font-bold">
              7. Sale of Existing Home
            </h2>
            <span className=" space-y-4">
              <p>
                If you are an existing homeowner and need the funds from the
                sale of that home to buy the new property, you should make your
                purchase offer contingent upon the sale of your current home.
                You should also provide a reasonable time frame for you to sell
                your old home, such as 30 or 60 days. The seller of the property
                you are interested in is not going to want to take their
                property off the market indefinitely while you search for a
                buyer.
              </p>
              <p>
                There are many other things that go into a thorough real estate
                contract, but for the most part, you should not have to worry
                about them. Real estate agents commonly use standardized,
                fill-in-the-blank forms that cover all the bases, including the
                ones described in this article. A common form in California is
                the California Residential Purchase Agreement and Joint Escrow
                Instructions document produced by the state's realtor
                association. If you want to familiarize yourself with the
                details of the purchase agreement form you are likely to use
                before you write your offer, ask your real estate agent for a
                sample agreement, or search online for the standard form that is
                common in your state or locality. If you are looking for a good
                deal and have time to wait, a short-sale house may be for you.
              </p>
            </span>
            <h2 className="text-xl font-bold">The Bottom Line</h2>
            <p>
              Even though these forms are common and standardized, and a good
              real estate agent would not let you leave anything important out
              of your contract, it is still a good idea to educate yourself
              about the key components of a real estate purchase agreement.
              Although it is never easy to walk away from a home—especially if
              your heart is set on it—there may be instances where you will have
              to do just that. Remember, if any of the contingencies put forth
              in your contract are not met, you can cancel the deal and keep
              your deposit—all without spending anything other than time. The
              conditional contract, you will find, is one of your most important
              assets you will have in any real estate deal.
            </p>
          </div>
        </div>
        <div className="w-1/4 hidden md:hidden lg:block">
          <div>
            <div className="mt-96">
              <h2 className="text-center text-sm">Advertisement</h2>
              <img src="https://i.ibb.co/k8ckT8H/advertize.jpg" alt="" />
            </div>
            <div className="mt-96">
              <h2 className="text-center text-sm">Advertisement</h2>
              <img src="https://i.ibb.co/k8ckT8H/advertize.jpg" alt="" />
            </div>
            <div className="mt-96">
              <h2 className="text-center text-sm">Advertisement</h2>
              <img src="https://i.ibb.co/k8ckT8H/advertize.jpg" alt="" />
            </div>
            <div className="mt-96">
              <h2 className="text-center text-sm">Advertisement</h2>
              <img src="https://i.ibb.co/k8ckT8H/advertize.jpg" alt="" />
            </div>
            <div className="mt-96">
              <h2 className="text-center text-sm">Advertisement</h2>
              <img src="https://i.ibb.co/k8ckT8H/advertize.jpg" alt="" />
            </div>
            <div className="mt-96">
              <h2 className="text-center text-sm">Advertisement</h2>
              <img src="https://i.ibb.co/k8ckT8H/advertize.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
