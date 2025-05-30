export type Service = {
    id: number,
    name: string,
    description: string,
    serviceImg: string,
    isUploaded: boolean
}

export type Supervisor = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
};

export type Renovation = {
    id: number;
    track: string;
    service: Service;
    supervisor: Supervisor;
    address: string;
    start_date: string;
    end_date: string;
    progress: number;
};

export type Stage = {
    id: number;
    images: string[]; // Assuming images is an array of strings (URLs or paths)
    name: string;
    is_completed: string; // ISO date string format
};

export type Customer = {
    id: number;
    firstname: string; // Assuming images is an array of strings (URLs or paths)
    lastname: string;
    email: string; // ISO date string format
};

export type SafeService = {
    id: number
    name: string
    description: string
    image: string
    preview: string
}

export type SafeTeam = {
    id: number
    name: string
    position: string
    image: string
}

export type SafePartner = {
    id: number
    logo: string
    name: string
}

export type SafeFaq = {
    id: number
    question: string
    answer: string
}

export type SafeAdvantage = {
    id: number
    title: string
    description: string
    image: string
}

export type CompletedProject = {
    id: number;
    m2: number;
    images: { url: string }[];
};

type Quote = {
    slogan1: string;
    slogan2: string;
    banner: string;
};
export type Image = {
    id: number;
    url: string;
}

export type Stats = {
    id: number;
    value: number;
    name: string;
}

export type ContentData = {
    completed_projects: CompletedProject[];
    gallery: Image[] | [];     // You can replace `any` with a specific type if known
    statistics: Stats[];  // Same here
    renders: Image[];     // And here
    quote: Quote;
};
