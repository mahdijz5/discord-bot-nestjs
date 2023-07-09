import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordModule } from '@discord-nestjs/core';
import { GatewayIntentBits } from 'discord.js';
import { ConfigService,ConfigModule } from '@nestjs/config';
import { MessageGateway } from './message.gateway';
import { ChatModule } from './message/chat.module';

@Module({
  imports: [ChatModule,
  ConfigModule.forRoot({isGlobal : true}),
  DiscordModule.forRootAsync({
      useFactory: (configService : ConfigService) => ({
        token: configService.get("BOT_TOKEN"),
        discordClientOptions: {
          intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers],
        },
      }),
      inject : [ConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [AppService,MessageGateway],
})
export class AppModule {}

