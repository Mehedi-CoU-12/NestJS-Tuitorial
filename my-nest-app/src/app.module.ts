import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule],
  controllers: [
    AppController,
    UserController,
    ProductController,
    StudentController,
  ],
  providers: [AppService, ProductService, StudentService],
})
export class AppModule {}
