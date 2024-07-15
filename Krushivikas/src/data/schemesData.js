import ISAM from "../assests/ISAM.jpg"
import MISS from "../assests/MISS.jpeg"
import PDMC from "../assests/PDMC.webp"
import PMFBY from "../assests/PMFBY.jpg"
import PMK from "../assests/PMK.jpg"
import RKVY from "../assests/RKVY.jpg"
import SHC from "../assests/SHC.jpg"

const schemesData = [
  {
    id: 1,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: PMK // Image for the scheme
  },
  {
    id: 2,
    title: "Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)",
    description: "Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund.    ",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>PM-KMY is a pension scheme for small and marginal farmers aged 18 to 40.</li>
          <li>It offers a monthly pension of Rs. 3000 upon reaching 60 years, with contributions ranging from Rs. 55 to Rs. 200 per month.</li>
          <li>Spouses are also eligible for a pension, and the scheme is managed by LIC.</li>
        </ol>
      </div>
    ),
    link: "https://maandhan.in/",
    image: MISS // Image for the scheme
  },
  {
    id: 3,
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "MFBY was launched in 2016 in order to provide a simple and affordable crop insurance product to ensure comprehensive risk cover for crops to farmers against all non-preventable natural risks from pre-sowing to post-harvest and to provide adequate claim amount. ",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>To be eligible for crop insurance, farmers must be cultivators or sharecroppers on the insured land, possessing a valid land ownership certificate or a land tenancy agreement.</li>
          <li>Farmers must apply for insurance coverage within the prescribed time frame, typically within two weeks of the start of the sowing season, and must not have received compensation for the same crop loss from any other source.</li>
          <li>Additionally, farmers must have a valid Kisan Credit Card (KCC) or obtain one within six months of enrollment, along with a valid bank account and identity proof provided at the time of enrollment.</li>
        </ol>
      </div>
    ),
    link: "https://pmfby.gov.in",
    image: PMFBY // Image for the scheme
  },
  {
    id: 4,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: SHC // Image for the scheme
  },  
  {
    id: 5,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: ISAM // Image for the scheme
  },
  {
    id: 6,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: RKVY // Image for the scheme
  },
  {
    id: 7,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: PDMC // Image for the scheme
  },
  {
    id: 8,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: PMFBY // Image for the scheme
  },
  {
    id: 9,
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description: "PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode.",
    eligibility: (
      <div>
        <p>Eligibility criteria:</p>
        <ol>
          <li>Small and Marginal Farmers: The scheme is designed for small and marginal farmers who own cultivable land. Small farmers own up to 2 hectares of land, while marginal farmers own between 2 and 5 hectares.</li>
          <li>Financial Support: Eligible farmers receive Rs. 6000 per year in three equal instalments of Rs. 2000 each, credited directly to their bank accounts.</li>
          <li>Funding and Disbursement: The scheme is funded entirely by the Government of India, with an initial allocation of Rs. 75,000 crore per year. The money is disbursed through Direct Benefit Transfer (DBT) to the beneficiaries' bank accounts.</li>
        </ol>
      </div>
    ),
    link: "https://pmkisan.gov.in/",
    image: RKVY // Image for the scheme
  },

  ];
  
  export default schemesData;