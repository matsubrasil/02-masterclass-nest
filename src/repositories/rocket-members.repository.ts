/* eslint-disable @typescript-eslint/no-empty-function */
export abstract class rocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
