var jwt = require('jsonwebtoken');
// require('dotenv').config()
var keys = require('../dist/config');

export class Jwtmanager{

    private token: string = '';

    private privateKey: string = '1111';
    private publicKey: string = '';
    private uiId: string = '';
    private expireTime: string = '';

    constructor (uiId: string, expireTime: string){
        console.log('keys 1', process.env.private_key)
        console.log('keys 2', keys);
        
        this.uiId = uiId;
        this.expireTime = expireTime;
        this.generateToken();
    }

    private generateToken(): void{
        const secretData = {
            publicKey: this.publicKey,
            uiId: this. uiId,
            expireTime: this. expireTime
        }
        this.token = jwt.sign(secretData, this.privateKey);
    }

    public getToken(): string{
        return this.token;
    }
}