export interface Company {
    id: string;
    name: string;
    homepage: string;
    logoUrl: string;
    topic: string;
    executive: Person;
    employees: Person[];
}

export interface Query {
    companies: Company[];
}

export interface Person {
    id: string;
    name: string;
    employer: Company;
    photoURLs: string[];
}
