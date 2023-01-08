enum Status3 { started, stopped }
class StopWatch3 {
    hour: number;
    min: number;
    sec: number;
    ms: number;
    status: Status3;
    private myInterval: number;
    static quantity: number=0;
    constructor() {
        StopWatch3.quantity++;
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
    }
    
    
    private timer(timerId:number):void {
        
        document.getElementById(`ms${timerId}`).innerText = this.ms.toString();
        if(this.ms==9){
            this.sec++;
            document.getElementById(`sec${timerId}`).innerText = this.sec.toString();
            this.ms =0;
            
        }
        this.ms++;
        if(this.sec==59){
            
            this.min++;
            document.getElementById(`min${timerId}`).innerText = this.min.toString();
            this.sec =0;
        }
        if(this.min==59){
            
            this.hour++;
            this.min =0;
        }
    }

    start(timerId:number) {
        if (this.status==Status3.started)
        {
            throw  new Error("already started");
        }
        else {
        this.status=Status3.started; 
        this.myInterval=setInterval(()=>this.timer(timerId), 100);
         console.log(this.myInterval);
        }

        

        
        
        

    }
    stop() {
        if (this.status==Status3.stopped)
        {
            throw  new Error("already stopped");
        }
        else {
        this.status=Status3.stopped; 
        window.clearInterval(this.myInterval);
        }
    }
    reset(timerId:number) {
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        document.getElementById(`min${timerId}`).innerText="00";
        document.getElementById(`sec${timerId}`).innerText="00";
        document.getElementById(`ms${timerId}`).innerText="00";
    }
    render(timerId:number) {
         
        let brTag1=document.createElement('br');
        document.getElementById("StopWatch").appendChild(brTag1);


        let start_btn=createHtmlTag("button","start","start");
        start_btn.addEventListener('click',()=>this.start(timerId));
        document.getElementById("StopWatch").appendChild(start_btn); 
        
         
        let stop_btn=createHtmlTag("button","stop","stop");
         stop_btn.addEventListener('click',()=>this.stop());
         document.getElementById("StopWatch").appendChild(stop_btn);


         let reset_btn=createHtmlTag("button","reset","reset");
         reset_btn.addEventListener('click',()=>this.reset(timerId));
         document.getElementById("StopWatch").appendChild(reset_btn);

         let brTag2=document.createElement('br');
         document.getElementById("StopWatch").appendChild(brTag2);


         let min_span=createHtmlTag("span",`min${timerId}`,"00");
         document.getElementById("StopWatch").appendChild(min_span);

         let sec_span=createHtmlTag("span",`sec${timerId}`,"00");
         document.getElementById("StopWatch").appendChild(sec_span);

         let ms_span=createHtmlTag("span",`ms${timerId}`,"00");
         document.getElementById("StopWatch").appendChild(ms_span);

        function createHtmlTag(tagType: string,id: string,content: string):HTMLElement{
            let tag=document.createElement(tagType);
            tag.id=id;
            tag.innerHTML=content;
            return tag;
        }
    }
}
{
    
   
   function add3(){
    let sw = new StopWatch3();
    sw.render(StopWatch3.quantity);
    //sw.start();
    
   }
    
}