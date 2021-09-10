import {Cv} from '../user/cv';
import {Company} from './company';

export interface Candidate {
  id?: string;
  cv?: Cv;
  company?: Company;
}
