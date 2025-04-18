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