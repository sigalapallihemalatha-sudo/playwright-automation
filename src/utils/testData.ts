import { ENV } from '../config/env';

export const testData = {
  username: ENV.USERNAME,
  password: ENV.PASSWORD,
};

console.log('ENV:', ENV);
console.log('testData:', testData);
console.log('CWD:', process.cwd());
console.log('Direct ENV:', process.env.USERNAME);
console.log(process.env.USERNAME);