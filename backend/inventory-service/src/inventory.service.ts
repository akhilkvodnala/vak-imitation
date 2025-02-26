import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
    checkStock(productId: number): boolean {
        // Mock stock check logic
        return true; // Assume stock is available
    }
}