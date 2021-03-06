import { combineEpics } from 'redux-observable';

import asyncComponent from '../../../../components/containers/AsyncComponent/AsyncComponent';
import { themeClientUrls } from '../../config/clientUrls';

import { fetchPatientPromsEpic } from './ducks/fetch-patient-proms.duck';
import { fetchPatientPromsUpdateEpic } from './ducks/fetch-patient-proms.duck';
import { fetchPatientPromsDetailEpic } from './ducks/fetch-patient-proms-detail.duck';
import { fetchPatientPromsDetailEditEpic } from './ducks/fetch-patient-proms-detail-edit.duck';
import { fetchPatientPromsCreateEpic } from './ducks/fetch-patient-proms-create.duck';

import patientsProms from './ducks/fetch-patient-proms.duck';
import promsDetail from './ducks/fetch-patient-proms-detail.duck';
import promsDetailEdit from './ducks/fetch-patient-proms-detail-edit.duck';
import promsCreate from './ducks/fetch-patient-proms-create.duck';

const epics = combineEpics(fetchPatientPromsEpic, fetchPatientPromsDetailEpic, fetchPatientPromsDetailEditEpic, fetchPatientPromsCreateEpic, fetchPatientPromsUpdateEpic);
const Proms = asyncComponent(() => import(/* webpackChunkName: "proms" */ './Proms').then(module => module.default));

const reducers = {
  patientsProms,
  promsDetail,
  promsDetailEdit,
  promsCreate,
};

const sidebarConfig = { key: 'proms', pathToTransition: '/proms', name: 'PROMs', isVisible: true };

const routers = [
  { key: 'proms', component: Proms, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.PROMS}` },
  { key: 'promsCreate', component: Proms, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.PROMS}/create` },
  { key: 'promsDetail', component: Proms, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.PROMS}/:sourceId` },
];

export default {
  component: Proms,
  epics,
  reducers,
  sidebarConfig,
  routers,
}

