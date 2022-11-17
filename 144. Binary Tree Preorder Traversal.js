var preorderTraversal = function(r) {
    const z = [];
    if (r === null) return z;
    
    const q = [r];
    
    while (q.length !== 0) {
        
        const c = q.pop();
        
        if (c.right != null) q.push(c.right);
        if (c.left != null) q.push(c.left);
        
        
        z.push(c.val)
    }
    return z;
};
//one line:
preorderTraversal=r=>{z=[];if(r===null)return z;q=[r];while(q.length!==0){c=q.pop();if(c.right!=null)q.push(c.right);if(c.left!=null)q.push(c.left);z.push(c.val)}return z}