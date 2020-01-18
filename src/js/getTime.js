var gettime={
    gettimer:function(){
        var date=new Date();
        var sperator1='-';
        var sperator2=':';
        var month=date.getMonth()+1;
        var strDate=date.getDate();
        if(month>=1&&month<=9){
            month='0'+month;
        }
        if(strDate>=0&&strDate<=9){
            strDate='0'+strDate;
        }
        var h=date.getHours();
        if(h>=0&&h<=9){
            h='0'+h
        }
        var m=date.getMinutes();
        if(m>0&&m<=9){
            m="0"+m;
        }
        var s=date.getSeconds();
        if(s>0&&s<=9){
            s="0"+s;
        }
        var currentdate=date.getFullYear()+sperator1+month+sperator1+strDate+' '+h+sperator2+m+sperator2+s;
        return currentdate;
    }
}
export {
    gettime
}