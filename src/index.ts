import simpleGit, { SimpleGit } from 'simple-git';

const USER = 'jguerrmi';
const PASS = '';
const REPO = 'https://steps.everis.com/git/IWOKIO/iwok.reposiory.git';

const workSpace ='/Users/juanlu/dev/node/ws';

const main: Function = () => {
    console.log('Trying to connect...');

    Authenticate();
    
    doSomething();

    console.log('Connected !')

};

const Authenticate: Function = () => {

    const git = require('simple-git');
    const remote = `https://${USER}:${PASS}@${REPO}`;

    git().silent(true)
        .clone(remote)
        .then(() => console.log('finished'))
        .catch((err) => console.error('failed: ', err));
}

const doSomething: Function = async () => {
    // const git: SimpleGit = simpleGit(workSpace);
    // const initResult = await git.init();
    // const addRemoteResult = await git.addRemote('origin', repoUrl);

    const git = simpleGit()
    try {
        await git.init().catch(ignoreError);
        //await git.clone(workSpace);
    

        await git.pull('origin', 'master');
        
    }
    catch (e) { 
        /* handle all errors here */ 
        console.log(`Error: ${e}`);
        
    }

    function ignoreError () {
        console.log('ignoreError');        
    }

}

main();
  
