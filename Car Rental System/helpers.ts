import crypto from 'crypto'
export const generateId = () => crypto.randomBytes(4).toString('hex')