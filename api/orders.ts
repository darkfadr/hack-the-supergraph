import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { server } from '../graphql/orders';

export default startServerAndCreateNextHandler(server);
