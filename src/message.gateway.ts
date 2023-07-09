import { Controller } from '@nestjs/common';
import { Injectable, Logger } from '@nestjs/common';
import { Once, InjectDiscordClient } from '@discord-nestjs/core';
import { Client } from 'discord.js';

@Injectable()
export class MessageGateway {
    private readonly logger = new Logger(MessageGateway.name);

    constructor(
        @InjectDiscordClient()
        private readonly client: Client,
    ) { }

    @Once('ready')
    onReady() {
      this.logger.log(`Bot ${this.client.user.tag} was started!`);
    }
}
