import * as dotenv from 'dotenv';

dotenv.config({ override: true }); // 

export const ENV = {
  BASE_URL: process.env.BASE_URL!,
  USERNAME: process.env.TEST_USERNAME!,
  PASSWORD: process.env.TEST_PASSWORD!,
};