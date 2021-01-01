import axios from 'axios';
import IUsers from '../../dtos/IUsers';
import IJsonPlaceholder from './model/IJsonPlaceholder';

class JsonPlaceholder implements IJsonPlaceholder {
  public async getUsers(): Promise<IUsers[]> {
    const { data } = await axios.get<IUsers[]>(
      'https://jsonplaceholder.typicode.com/users',
    );

    return data;
  }

  public async findUserById(user_id: number): Promise<IUsers | undefined> {
    const users = await this.getUsers();
    const userIndex = users.findIndex(item => item.id === user_id);

    let user;
    if (userIndex !== -1) {
      user = users[userIndex];
    }

    return user;
  }
}

export default JsonPlaceholder;
