/* eslint-disable */
import * as mongoose from 'mongoose';


export interface Item {
    id?: string;
    name: string;
    description: string;
    quantity: number;
}