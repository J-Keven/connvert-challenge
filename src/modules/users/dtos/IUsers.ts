interface IAddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export default interface IUserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressProps;
}
