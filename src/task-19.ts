import axios from "axios";

interface User {

    email: string,
    id: number,
    name: string,
    phone: number,
    username: string,
    website: string,
    company: Company,
    address: Address,
};

interface Company {
    bs: string,
    catchPhrase: string,
    name: string,
};

interface Address {
    city: string,
    geo: { lat: string, lng: string },
    street: string,
    suite: string,
    zipcode: string,
}

const fetchUser = async (userId: number): Promise<User> => {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
};

const getUserName = async (id: number) => {
    const user = await fetchUser(id);
    console.log(user.name);
};

getUserName(1);
