// @ts-ignore - Non type package
import * as localStorage from 'local-storage'
import { statistics } from './types';

const addActiveInstance = (): void => {
    if (localStorage.get('active_instances') === null) {
        localStorage.set('active_instances', 1);
    }
    else {
        let currentProcess:any = localStorage.get('active_instances');
        localStorage.set('active_instances', currentProcess + 1);
    }
}

const addTotalInstance = (): void => {
    if (localStorage.get('total_invocation') === null) {
        localStorage.set('total_invocation', 1);
    }
    else {
        let totalDoneProcess:any = localStorage.get('total_invocation');
        localStorage.set('total_invocation', totalDoneProcess + 1);
    }
}

const subActiveInstance = (): void => {
    if (localStorage.get('active_instances') !== null) {
        let currentProcess:any = localStorage.get('active_instances');
        localStorage.set('active_instances', currentProcess - 1);
    }
}

const getStatistics = (): statistics => {
    const activeInstances = localStorage.get('active_instances')
    const totalDoneProceses = localStorage.get('total_invocation')
    return {
        "active_instances": activeInstances,
        "total_invocation": totalDoneProceses
    }
}


export { addActiveInstance, subActiveInstance, addTotalInstance, getStatistics }
