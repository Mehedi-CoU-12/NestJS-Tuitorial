import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getEmployee(): string {
    return 'This is employee controller';
  }
}
