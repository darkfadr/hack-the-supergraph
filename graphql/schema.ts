import fs from 'fs';
import { gql } from 'graphql-tag';

export const schema = () => fs.readFileSync(__dirname + '/schema.graphql', 'utf8');
export const typeDefs = () => gql(schema());
