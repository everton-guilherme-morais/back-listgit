import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  async getUser(username: string) {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }

  async getUserRepos(username: string) {
    const resetTimeInSeconds = 1702425942;
    const resetDate = new Date(resetTimeInSeconds * 1000); // Multiplicado por 1000 para converter para milissegundos

    console.log(resetDate, 'date');
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    
    return response.data;
  }
}
