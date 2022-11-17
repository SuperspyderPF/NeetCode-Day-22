const canConstruct = (r, m) => {
    const j = {};
    
    for ( c of m) {
        j[c] = ++j[c] || 1;
    }
    
    for ( c of r) {
        if (j[c] === 0 || !j[c]) {
            return false;
        }
        j[c]--;
    }
    
    return true;
};