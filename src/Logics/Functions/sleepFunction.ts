import { SubProcess } from 'teen_process';
import { v4 as uuid } from 'uuid';
import { logToFile } from '../../Logger';
import { subActiveInstance, addActiveInstance } from '../../AppStorage';
import { sleepFunction } from '.';

let threadsMap: Map<string, SubProcess> = new Map();
const process = new SubProcess('sleep', ['5']);

export class SleepFunction {
  private currentProcess: SubProcess;
  private id: string;
  constructor() {
    this.currentProcess = process;
    this.id = uuid();

    this.currentProcess.on('die', () => {
      threadsMap.delete(this.id);
      subActiveInstance();
    });

  }

  static async run(message: string): Promise<void> {
    let process;

    if (threadsMap.size) {
      [process] = [...threadsMap.values()];
    }
    else {
      addActiveInstance();
      const func = new sleepFunction();
      threadsMap.set(func.id, func.currentProcess);
      process = func.currentProcess;
    }
    logToFile(message);
    await process.start(0);
  }

  static async runWrapper(message: string) {

    await this.run(message);
  }
}