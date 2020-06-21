import simpleGit, { SimpleGit } from 'simple-git';

const USER = 'jguerrmi';
const PASS = process.env.PWD;
const REPO = 'steps.everis.com/git/IWOKIO/iwok.reposiory.git';

const workSpace ='/Users/juanlu/dev/node/iwok.repository';

const git = simpleGit(workSpace)

const main: Function = () => {
    console.log('Trying to connect...');

    // Authenticate();    
    // doSomething();

    doPull();

    console.log('Connected !')

};

const Authenticate: Function = () => {

    const remote = `https://${USER}:${PASS}@${REPO}`;

    git.silent(true)
        .clone(remote)
        .then(() => console.log('finished'))
        .catch((err: any) => console.error('failed: ', err));
}

const doPull: Function = async () => {
    try {
        await git.pull('origin', 'master');
        
        const status = await git.status();
        
        console.log(`Status: ${status}`);
        
    } catch (error) {
        console.log(`Error: ${error}`);        
    }
}

const doSomething: Function = async () => {
    
    try {
        await git.init().catch(ignoreError);        
        //await git.clone(workSpace);    
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
  
