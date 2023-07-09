import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { BaseInfoCommand } from './chat.command';

@Module({
  imports : [DiscordModule.forFeature()],
  providers: [BaseInfoCommand],
  controllers: []
})
export class ChatModule {}
