import IUsers from '../../../dtos/IUsers';

export default interface IJsonPlaceholder {
  getUsers(): Promise<IUsers[]>;
  findUserById(user_id: number): Promise<IUsers | undefined>;
}
