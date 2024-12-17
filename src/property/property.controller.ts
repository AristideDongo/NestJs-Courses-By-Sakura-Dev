import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipes';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/update.property.dto';
import { PaginationDTO } from './pipes/pagination.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get('')
  findAll(@Query() pagitnationDTO: PaginationDTO) {
    return this.propertyService.findAll(pagitnationDTO);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }
  @Post('')
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body()
    body: UpdatePropertyDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id) {
    return this.propertyService.delete(id);
  }
}
