import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { server } from '../subgraphs/reviews/src';

export default startServerAndCreateNextHandler(server, {
  context: (req, res) => {
    return {
      //@ts-ignore
      delay: parseInt(req.headers['x-custom-delay'] ?? '0')
    };
  }
});
