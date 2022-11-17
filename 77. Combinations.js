var combine = function(n, k) {
    o = h(k, n);
    // console.log(o);
    return o;
};


function h(z, n, o=[], c = [], i = 1){
    if(c.length===z){
        o.push(c);
        return [];
    }
    else{
        while(i<=n){
            h(z, n, o, [...c, i], ++i);
        }
        return o;
    }
}