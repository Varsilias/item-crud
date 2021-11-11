/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ItemSchema } from './schemas/item.schema';

@Injectable()
export class ItemsService {
    
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
    

    async findAll(): Promise<Item[]> {
        let newItemsArray = [];
        const items = await this.itemModel.find();
        items.map(item => {
            const formattedItem = this.formatItem(item);
            newItemsArray.push(formattedItem);
        })

        return newItemsArray;
    }

    async findOne(id: string): Promise<Item> {
        const item = await this.itemModel.findOne({ _id: id });
        return this.formatItem(item);
    }

    async create(item: Item): Promise<Item> {
        const newItem = await new this.itemModel(item).save();
        return this.formatItem(newItem);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true})
    }
    
    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    formatItem(item: Item): Item {
        const { id, name, description, quantity } = item
        const formattedData = {
            id: id,
            name: name,
            description: description,
            quantity: quantity
        }

        return formattedData;
    }
}
