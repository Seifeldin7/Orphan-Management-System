import axios from 'axios'
import { base } from '../config/environment'

const findByTestAttr = (component, val) => {
    return component.find(`[data-testid="${val}"]`);
}


export { findByTestAttr }
