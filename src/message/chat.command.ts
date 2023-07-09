
import {Command, InteractionEvent, Handler} from '@discord-nestjs/core';
import {SlashCommandPipe} from '@discord-nestjs/common';
import {Injectable} from '@nestjs/common';
import { RegistrationDto } from './dto/test.dto';
import  * as discord from 'discord.js';

@Command({
  name: 'reg',
  description: 'User registration',
})
@Injectable()
export class BaseInfoCommand {
    @Handler()
    onPlaylist(interaction: discord.ContextMenuCommandInteraction): string {
      return 'Your playlist...';
    }
}