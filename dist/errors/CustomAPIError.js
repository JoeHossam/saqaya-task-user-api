"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAPIError = void 0;
class CustomAPIError extends Error {
    constructor(message) {
        super(message);
        this.status = 500;
    }
}
exports.CustomAPIError = CustomAPIError;
