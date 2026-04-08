"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCalendarEvent = exports.addCalendarEvent = exports.getEventsList = void 0;
const calendarRepository = __importStar(require("../repositories/calendar.repository"));
const petRepository = __importStar(require("../repositories/pet.repository"));
const getEventsList = async (userId) => {
    return await calendarRepository.findAllByUserId(userId);
};
exports.getEventsList = getEventsList;
const addCalendarEvent = async (userId, data) => {
    const { pet_id, title, event_date, type } = data;
    if (!title || !event_date || !type) {
        throw new Error('Event title, date, and type are required.');
    }
    if (pet_id) {
        const pet = await petRepository.findByIdAndUserId(pet_id, userId);
        if (!pet)
            throw new Error('Pet not found or unauthorized.');
    }
    const createdEvent = await calendarRepository.create({ ...data, user_id: userId });
    return createdEvent;
};
exports.addCalendarEvent = addCalendarEvent;
const deleteCalendarEvent = async (id, userId) => {
    const deletedCount = await calendarRepository.remove(id, userId);
    if (deletedCount === 0)
        throw new Error('Event not found or unauthorized.');
};
exports.deleteCalendarEvent = deleteCalendarEvent;
//# sourceMappingURL=calendar.service.js.map