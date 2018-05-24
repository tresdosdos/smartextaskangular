export default class User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    catchPhrase: string,
    bs: string,
    name: string
  };
}
