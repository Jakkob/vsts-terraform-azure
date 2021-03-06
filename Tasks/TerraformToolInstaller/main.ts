import * as taskLib from 'vsts-task-lib/task';
import TerraformToolInstaller from './lib/TerraformToolInstaller';
import { read } from 'fs';

// I got a lot of this code for this from the "NodeTool" task in the `vsts-tasks` repo on GitHub: 
//     https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/NodeTool

async function run() {
    try {
        let versionSpec = taskLib.getInput('versionSpec', true);
        let checkLatest: boolean = taskLib.getBoolInput('checkLatest', false);
        let ti: TerraformToolInstaller = new TerraformToolInstaller();
        await ti.getTerraform(versionSpec, checkLatest);
    }
    catch (error) {
        taskLib.setResult(taskLib.TaskResult.Failed, error.message);
    }
}

// Run the task.
run();