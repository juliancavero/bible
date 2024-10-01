import { Injectable } from '@nestjs/common';
@Injectable()
export class AIService {
  constructor() {}

  async answerQuestion(question: string): Promise<string> {
    return Array.from({ length: 100 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 94) + 33),
    ).join('');
  }
}
