const apiUrl="https://gateway.marvel.com/v1/public/"
const apiKey="apikey=08173d68dce4d08b5c8aa54c30ec7077"
const apiHash="hash=992ba0a116e1c967747efbfad8fd4bec"
const apiTs="ts=1"
const limit="&limit=30"
const headersApi={
    'Accept': '*/*',
    'If-None-Match': 'f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3',
}

export function getHeroes(parameter){
    let offset= !parameter ? "&offset="+Math.floor(Math.random() * 50) : "";
    // console.log(`${apiUrl}characters?${apiKey}${offset}&${apiHash}&${apiTs}${parameter}`);
    return fetch(`${apiUrl}characters?${apiKey}${offset}&${apiHash}&${apiTs}${parameter}${limit}`, {
        headers:headersApi,
    }).then(result => result.json())
}
export function getHeroById(id){
    return fetch(`${apiUrl}characters/${id}?${apiKey}&${apiHash}&${apiTs}`, {
        headers:headersApi,
    }).then(result => result.json())
}