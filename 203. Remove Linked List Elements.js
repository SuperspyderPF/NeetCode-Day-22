var removeElements = function(h, v) {
    let l = new ListNode(0, h),
        z = l,
        c = h;

    while (c) {
        if (c.val === v) {
			z.next = c.next;
		}
        else z = c;
        c = c.next;
    }
    return l.next;
}

//one line:
removeElements=(h,v)=>{l=new ListNode(0,h),z=l,c=h;while(c){if(c.val===v){z.next=c.next;}else z=c;c=c.next;}return l.next}
