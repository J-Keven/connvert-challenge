import IUserDTO from '../../../dtos/IUsers';

export default interface IJsonPlaceholder {
  getUsers(): Promise<IUserDTO[]>;
}
