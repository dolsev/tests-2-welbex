import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 482,
        canvasHeight: 979,
        windowWidth: 482,
        windowHeight: 1327,
    },
});
