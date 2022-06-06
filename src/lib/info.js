import { dev } from "$app/env";

let hostname = 'localhost:3000';
if (!dev) { hostname = 'www.paregis.me'; }
export const website = hostname;