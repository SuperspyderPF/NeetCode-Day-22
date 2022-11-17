var mergeTwoLists = function (l1, l) {
    if (!l1) return l;
    else if (!l) return l1;
    else if (l1.val <= l.val) {
        l1.next = mergeTwoLists(l1.next, l);
        return l1;
    } else {
        l.next = mergeTwoLists(l1, l.next);
        return l
    }
};

//oneline: 
mergeTwoLists=(l1,l)=>{if(!l1)return l;else if(!l)return l1;else if(l1.val<=l.val){l1.next=mergeTwoLists(l1.next,l);return l1;}else{l.next=mergeTwoLists(l1,l.next);return l}}