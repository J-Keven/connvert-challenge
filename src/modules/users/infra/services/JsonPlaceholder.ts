import axios from 'axios';
import IJsonPlaceholder from './model/IJsonPlaceholder';
import IUserDTO from '../../dtos/IUsers';

class JsonPlaceholder implements IJsonPlaceholder {
  public async getUsers(): Promise<IUserDTO[]> {
    const { data } = await axios.get<IUserDTO[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
    return data;
  }
}

export default JsonPlaceholder;
