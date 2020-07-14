import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './messages.entity';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
  ],
  providers: [
    MessagesService,
  ],
  controllers: [
    MessagesController,
  ],
  exports: [
    MessagesService,
  ],
})
export class MessagesModule {
}
