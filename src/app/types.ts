export type Company = {
    id: string;
    name: string;
    homepage: string;
    logoUrl: string;
    topic: string;
    executive: Person;
    employees: Person[];
  };

export type Query = {
    companies: Company[];
};

export type Person = {
    id: string;
    name: string;
    employer: Company;
    photoURLs: string[];
};