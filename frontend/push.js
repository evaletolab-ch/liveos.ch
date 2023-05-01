const ftp = require("basic-ftp");
require('dotenv').config();
const { join } = require('path');

const localCockpitRoot = './dist';

async function uploadDir(client, path){
    const localPath = join(localCockpitRoot, path);
    console.log("uploading local path -> ", localPath);
    
    await client.ensureDir(path);
    await client.clearWorkingDir();
    await client.uploadDir(localPath);
}

async function printPwd(client){
    const pwdStr = await client.pwd();
    console.log("pwd", pwdStr);
}

async function push() {
    const client = new ftp.Client()
    // client.ftp.verbose = true;

    // client.trackProgress(info => {
    //     console.log("File", info.name)
    //     console.log("Type", info.type)
    //     console.log("Transferred", info.bytes)
    //     console.log("Transferred Overall", info.bytesOverall)
    // });

    try{
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: false
        });

        await client.cd("/");

        await uploadDir(client, "js");
        await uploadDir(client, "css");
        await uploadDir(client, "fonts");
        await uploadDir(client, "images");
        await client.uploadFrom("dist/index.html","/index.html")
        await client.uploadFrom("dist/favicon.ico","/favicon.ico")
        await printPwd(client);



        client.close();
    }catch(e){
        console.error(e);
        process.exit(1);
    }

    console.log("upload completed successfully");
}


push();