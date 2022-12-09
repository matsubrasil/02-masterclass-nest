import { Body, Controller, Post } from '@nestjs/common';
// import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dto/create-team-member-body';
import { rocketMembersRepository } from './repositories/rocket-members.repository';

@Controller('app')
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly repository: rocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() data: CreateTeamMemberBody) {
    const { name, function: memberofTeam } = data;
    console.log(data);
    await this.repository.create(name, memberofTeam);
    // const member = await this.prisma.rocketTeamMember.create({
    //   data: {
    //     id: randomUUID(),
    //     name: name,
    //     function: memberofTeam,
    //   },
    // });
    // return {
    //   member,
    // };
  }
}
