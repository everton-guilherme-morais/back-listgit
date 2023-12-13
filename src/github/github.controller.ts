import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}
  
  @IsPublic()
  @Get('users/:username')
  async getUser(@Param('username') username: string) {
    const user = await this.githubService.getUser(username);
    return user;
  }

  @Get('users/:username/repos')
  async getUserRepos(@Param('username') username: string) {
    console.log(username, 'username')
    const repos = await this.githubService.getUserRepos(username);
    return repos;
  }
}
