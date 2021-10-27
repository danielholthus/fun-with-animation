import Highway from '@dogstudio/highway';
import FadeInLeft from './transition';

const H = new Highway.Core({
    transitions: {
        default: FadeInLeft
    }
});