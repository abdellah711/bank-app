export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  address: string;
  'account-type': 'checking' | 'savings';
  balance: number;
}