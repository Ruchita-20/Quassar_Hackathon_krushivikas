import Axis from "../assests/axis.jpg"
import Federal from "../assests/federal.jpg"
import HDFC from "../assests/hdfc.png"
import IDFC from "../assests/idfc.png"
import IndusLand from "../assests/indusland.jpg"
import LT from "../assests/lt.png"
import Kredit from "../assests/kredit.jpg"
import MoneyTap from "../assests/moneytap.png"
import AdityaBirla from "../assests/Aditya_Birla_Group.png"


const loansData = [
  {
    id: 1,
    title: "Axis Bank",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 10.49% per annum.</li>
          <li>Loan Amount: Upto 40 Lakh</li>
          <li>Tenure: 1-7 years</li>
          <li>Processing Fee: Upto 2%</li>
        </ol>
      </div>
    ),
    link: " https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=axis_bank",
    image: Axis // Image for the scheme
  },
  {
    id: 2,
    title: "Federal Bank",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 11.49% per annum.</li>
          <li>Loan Amount: Upto 25 Lakh</li>
          <li>Tenure: Upto 5 years</li>
          <li>Processing Fee: Upto 3%</li>
        </ol>
      </div>
    ),
    link: " https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=federal_bank",
    image: Federal // Image for the scheme
  },
  {
    id: 3,
    title: "HDFC Bank",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 10.50% per annum.</li>
          <li>Loan Amount: Upto 40 Lakh</li>
          <li>Tenure: Upto 6 years</li>
          <li>Processing Fee: Upto Rs 4999</li>
        </ol>
      </div>
    ),
    link: "  https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=hdfc_bank",
    image: HDFC // Image for the scheme
  },
  {
    id: 4,
    title: "IDFC Bank",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 10.79% - 36% per annum.</li>
          <li>Loan Amount: Upto 1 Crore</li>
          <li>Tenure: 5 years</li>
          <li>Processing Fee: Upto 4%</li>
        </ol>
      </div>
    ),
    link: " https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=idfc_bank",
    image: IDFC // Image for the scheme
  },  
  {
    id: 5,
    title: "Indusland Bank",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 10.49% - 26% per annum.</li>
          <li>Loan Amount: Upto 40 Lakh</li>
          <li>Tenure: 1-5 years</li>
          <li>Processing Fee: Upto 4%</li>
        </ol>
      </div>
    ),
    link: "  https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=indusind_bank",
    image: IndusLand // Image for the scheme
  },
  {
    id: 6,
    title: "L&T Bank",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 12% - 24% per annum.</li>
          <li>Loan Amount: Upto 07 Lakh</li>
          <li>Tenure: Upto 4 years</li>
          <li>Processing Fee: Upto 2%</li>
        </ol>
      </div>
    ),
    link: "  https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=LT_finance",
    image: LT // Image for the scheme
  },
  {
    id: 7,
    title: "KreditBee Personal Loan",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 16% - 29.95%per annum.</li>
          <li>Loan Amount: Upto 4 Lakh</li>
          <li>Tenure: Upto 2 years</li>
          <li>Processing Fee: Rs 1250.</li>
        </ol>
      </div>
    ),
    link: "  https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=kreditbee",
    image: Kredit // Image for the scheme
  },
  {
    id: 8,
    title: "MoneyTap Personal Loan",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: 13% per annum.</li>
          <li>Loan Amount: Upto 5 Lakh</li>
          <li>Tenure: Upto 3 years</li>
          <li>Processing Fee: For loan amounts between Rs 3,000 and Rs 5,000: Rs 199 + GST. For loan amounts of Rs 25,000 and above: 2% of the total amount + GST</li>
        </ol>
      </div>
    ),
    link: "https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=money_tap",
    image: MoneyTap// Image for the scheme
  },
  {
    id: 9,
    title: "AdityaBirla Personal Loan",
    description: (
      <div>
        <p>Description -</p>
        <ol>
          <li>Interest Rate: Approx 13% per annum.</li>
          <li>Loan Amount: Upto 50 Lakh</li>
          <li>Tenure: Upto 7 years</li>
          <li>Processing Fee: Upto 3%</li>
        </ol>
      </div>
    ),
    link: " https://www.paisabazaar.com/personal-loans?utm_source=organic&utm_medium=pl_compare&utm_content=aditya_birla",
    image: AdityaBirla// Image for the scheme
  },

  ];
  
  export default loansData;