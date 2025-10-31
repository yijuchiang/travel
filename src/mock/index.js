import { mock } from "mockjs";
import travelData from './data/travelData.json'


mock('/mock/travelData', { code: 200, data: travelData })