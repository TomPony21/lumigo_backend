import { SubProcess } from 'teen_process';
import { logToFile } from '../../Logger';
import { subActiveInstance ,addTotalInstance } from '../../AppStorage';


export class sleepFunction {
  currentProcess: SubProcess
  processMessage: String
  constructor(message: String) {
    this.currentProcess = new SubProcess('sleep', ['5']);
    this.processMessage = message;
    this.currentProcess.on('exit', () => {
      this.ExitProcessActions()
    });
  }

  ExitProcessActions(): void {
    logToFile(this.processMessage);
    subActiveInstance();
    addTotalInstance();
  }
}