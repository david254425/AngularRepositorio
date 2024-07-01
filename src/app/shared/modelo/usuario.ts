export interface Usuario {
  id: string; // Cambiado a string para coincidir con la API
  username: string;
  email: string;
  password: string;
  phone: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}
