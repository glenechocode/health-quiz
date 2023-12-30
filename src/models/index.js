// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QuizData } = initSchema(schema);

export {
  QuizData
};