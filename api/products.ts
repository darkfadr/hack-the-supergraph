import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { server } from '../graphql/products';

export default startServerAndCreateNextHandler(server);
