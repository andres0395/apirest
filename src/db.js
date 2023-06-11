import {createPool} from 'mysql2/promise';

export const conn =  createPool({
    host: '162.241.60.60',
    user: 'bioxfive_pro01',
    password:'Pro5um1d0r95&',
    database:'bioxfive_pataforma_pro'
});


