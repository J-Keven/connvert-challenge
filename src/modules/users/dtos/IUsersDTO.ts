interface IAddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export default interface IUserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IAddressProps;
}
