import IUserDTO from '../../../dtos/IUsersDTO';

export default interface IJsonPlaceholder {
  getUsers(): Promise<IUserDTO[]>;
}
