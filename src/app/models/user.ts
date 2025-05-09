import Address from './address';

export default interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
}