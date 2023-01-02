enum Status { STARTED , STOPPED }
class StopWatch2 {
    hour: number;
    min: number;
    sec: number;
    ms: number;
    status: Status;
    static quantity: number=0;
    constructor() {
        StopWatch2.quantity++;
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
    }
    private timer() {
        
        document.getElementById("ms").innerText = this.ms.toString();
        if(this.ms==99){
            this.sec++;
            document.getElementById("sec").innerText = this.sec.toString();
            this.ms =0;
            
        }
        this.ms++;
        if(this.sec==59){
            
            this.min++;
            document.getElementById("min").innerText = this.min.toString();
            this.sec =0;
        }
        if(this.min==59){
            
            this.hour++;
            this.min =0;
        }
    }
    

    
    

    start() {
        if (this.status==Status.STARTED)
        {
            throw  ("already started");
        }
        else {
        this.status=Status.STARTED; 
        let myInterval=setInterval(()=>this.timer(), 10);
         console.log(myInterval);
        }
    }
    stop() {
        this.status=Status.STOPPED; 
        window.clearInterval(1);
    }
    reset() {
        this.hour = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        document.getElementById("min").innerText="00";
        document.getElementById("sec").innerText="00";
        document.getElementById("ms").innerText="00";
    }
    render() {
         
        let brTag1=document.createElement('br');
        document.getElementById("StopWatch").appendChild(brTag1);
         let start_btn=document.createElement('button');
         start_btn.innerHTML="start";
         start_btn.addEventListener('click',()=>this.start());
         document.getElementById("StopWatch").appendChild(start_btn);
         let stop_btn=document.createElement('button');
         stop_btn.innerHTML="stop";
         stop_btn.addEventListener('click',()=>this.stop());
         document.getElementById("StopWatch").appendChild(stop_btn);
         let reset_btn=document.createElement('button');
         reset_btn.innerHTML="reset";
         reset_btn.addEventListener('click',()=>this.reset());
         document.getElementById("StopWatch").appendChild(reset_btn);
         let brTag2=document.createElement('br');
         document.getElementById("StopWatch").appendChild(brTag2);

         let btn_min=document.createElement('button');
         btn_min.id="min";
         btn_min.innerHTML='00';
         document.getElementById("StopWatch").appendChild(btn_min);

         let btn_sec=document.createElement('button');
         btn_sec.id="sec";
         btn_sec.innerHTML='00';
         document.getElementById("StopWatch").appendChild(btn_sec);

         let btn_ms=document.createElement('button');
         btn_ms.id="ms";
         btn_ms.innerHTML='00';
         document.getElementById("StopWatch").appendChild(btn_ms);


    }
}
{
    
   
   function add2(){
    let sw = new StopWatch2();
    sw.render();
    //sw.start();
    
   }
    
}