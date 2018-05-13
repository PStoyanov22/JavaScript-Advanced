function solution(obj){
    let valid = true;
    if(!obj.method || !/^(GET|POST|DELETE|CONNECT)$/g.test(obj.method)){
       throw new Error(`Invalid request header: Invalid Method`);
    }
    if(!obj.uri || !/^[A-Za-z\d.*]+$/g.test(obj.uri)){
        throw new Error(`Invalid request header: Invalid URI`);

    }
    if(!obj.version ||
        !/^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/g.test(obj.version)){
        throw new Error(`Invalid request header: Invalid Version`);

    }
    if(!obj.message || !/^[^<>\\&'"]*$/g.test(obj.message)){
        if(obj.message === ''){
            return obj;
        }
        throw new Error(`Invalid request header: Invalid Message`);

    }
    return obj;

}

console.log(solution({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));