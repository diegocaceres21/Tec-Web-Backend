import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MateriasModule } from './materias/materias.module';
import { NotasModule } from './notas/notas.module';

@Module({
  imports: [EstudiantesModule, MateriasModule, NotasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
