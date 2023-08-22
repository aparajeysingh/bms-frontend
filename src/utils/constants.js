const occupationTypes = [
    { value: "salaried", label: "Salaried Employee" },
    { value: "self-employed", label: "Self-Employed / Business Owner" },
    { value: "student", label: "Student" },
    { value: "retired", label: "Retired" },
    { value: "homemaker", label: "Homemaker" },
    { value: "unemployed", label: "Unemployed" },
    { value: "freelancer", label: "Freelancer / Contractor" },
    { value: "professional", label: "Professional (Doctor, Lawyer, Engineer, etc.)" },
    { value: "government-employee", label: "Government Employee" },
    { value: "private-sector-employee", label: "Private Sector Employee" },
    { value: "entrepreneur", label: "Entrepreneur" },
    { value: "artist", label: "Artist / Creative Professional" },
    { value: "farmer", label: "Farmer" },
    { value: "technician", label: "Technician / Skilled Worker" },
];

const sourceOfIncomeOptions = [
    { value: "salary", label: "Salary / Wages" },
    { value: "business-income", label: "Business Income / Self-Employment" },
    { value: "investments", label: "Investments (Dividends, Interest, Capital Gains)" },
    { value: "rental-income", label: "Rental Income" },
    { value: "pension", label: "Pension" },
    { value: "social-security", label: "Social Security" },
    { value: "government-assistance", label: "Government Assistance" },
    { value: "spouses-income", label: "Spouse's Income" },
    { value: "savings-inheritance", label: "Savings / Inheritance" },
];

const transactionType = [
    { value: 'imps', label: "IMPS" },
    { value: 'neft', label: "NEFT" },
    { value: "rtgs", label: "RTGS" }
]

export { occupationTypes, sourceOfIncomeOptions, transactionType };
