/* eslint-disable */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {}

    @Get()
    async findAll() {
        return await this.itemService.findAll();
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemService.create(createItemDto);
    }

    @Get(':id')
    async findOne(@Param() param): Promise<Item> {
        return await this.itemService.findOne(param.id);
    }

    @Put(':id')
    async update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Item> {
        return await this.itemService.delete(id);
    }
}






































































































/* How to access request and response parameter from express */

    // @Get()
    // findAll(@Req() req: Request, @Res() res: Response): void {
    //     console.log(req.originalUrl);
    //     res.send('Hello  Javascript');
    // }