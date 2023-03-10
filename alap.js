var div, sor, oszlop;
var leptet = 0;
var matrix=[];
var jelo = 0;
var jelx = 0;
var kulo = 0;
var kulx = 0;
var nyert = false;
var nyer1 = 0;//kor
var nyer2 = 0;//x
var iranyvektorok = [ [-1,0],[1,0],//fuggoleges
                      [0,1],[0,-1],//vizszintes
                      [-1,1],[1,-1],//foatlo    
                      [-1,-1],[1,1] //mellekatlo    


                
                    ];
function jatekosVane(aktsor,aktoszlop,jatekos)
{
    return matrix[aktsor][aktoszlop] == jatekos;
}
function matrixSzelet(aktsor,aktoszlop)
{
    return aktsor<0 || aktsor >= sor || aktoszlop < 0|| aktoszlop >= oszlop;
}                    
function megszamol(irany,jatekos,startx,starty)
        {
                let db =1;
                while(!matrixSzelet(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db) && 
                jatekosVane(startx+iranyvektorok[irany][0]*db,starty+iranyvektorok[irany][1]*db,jatekos))
                {
                    db++;
                }
                return db-1;
        }
function uresMatrix()

{
    for(var i = 0; i < sor; i++)
    {
        sorx=[];
        for(var j = 0; j < oszlop; j++)
        {
            sorx.push(0);
        }
        matrix.push(sorx);
    }
    console.log(matrix);
}


function kattint(td){
    if(td.innerHTML == "" && nyert == false)
    {
        let jatekos="X";
        if(leptet % 2 ==0){
           
                td.innerHTML = "X";
                matrix[td.dataset.sor][td.dataset.oszlop]="X";
            }
        
        else{
            jatekos="O";
                td.innerHTML = "O";
                matrix[td.dataset.sor][td.dataset.oszlop]="O";
        }
        for(let i = 0; i < iranyvektorok.length; i++)
        {
            console.log(megszamol(i,jatekos,Number(td.dataset.sor),Number(td.dataset.oszlop)))
        }
        leptet++;
        //innentol van a nyert
        if(sor > 5 && oszlop >5)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==5)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                       
                        var ponto = document.getElementById("allaso");
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;
                        alert("O nyert");
                        Streak();

                    }
                    else if(jatekos == "X")
                    {
                        var pontx = document.getElementById("allas");
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;
                      alert("X nyert");
                        Streak();
                    }
                }
                
            }
        }
        else if(sor == 5 && oszlop == 5)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==5)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                       
                        var ponto = document.getElementById("allaso");
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;
                      alert("O nyert");
                        Streak();

                    }
                    else if(jatekos == "X")
                    {
                        var pontx = document.getElementById("allas");
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;
                      alert("X nyert");
                        Streak();
                    }
                }
                
            }
        }
        else if(sor == 4 && oszlop == 4)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==4)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                        
                        var ponto = document.getElementById("allaso");
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;
                      alert("O nyert");
                        Streak();
                    }
                    else if(jatekos == "X")
                    {
                        
                        var pontx = document.getElementById("allas");
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;
                      alert("X nyert");
                        Streak();
                    }

                }
                
            }
        }
        else if(sor < 4 && oszlop <4)
        {
            for(let i = 0; i<8;i+=2)
            {
                if(megszamol(i,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+
                megszamol(i+1,jatekos,
                    Number(td.dataset.sor),Number(td.dataset.oszlop))+1==3)
                {
                    console.log("Nyert:"+jatekos);
                    if(jatekos == "O")
                    {
                        var ponto = document.getElementById("allaso");
                        jelo++;
                        ponto.innerHTML= jelo;
                        nyert = true;
                        nyer1 = 1;
                        nyer2 = 0;
                      alert("O nyert");
                        Streak();
                    }
                    else if(jatekos == "X")
                    {
                        
                        var pontx = document.getElementById("allas");
                        jelx++;
                        pontx.innerHTML= jelx;
                        nyert = true;
                        nyer1 = 0;
                        nyer2 = 1;
                      alert("X nyert");
                        Streak();
                    }
                }
                
            }
        }
        //innentol van a dontetlen
       if(matrix.length == sor*oszlop)
       {
        jelo++;
        ponto.innerHTML= jelo;
        jelx++;
        pontx.innerHTML= jelx;
        nyert = true;
       }
       
        
    }
}
   

function TablaGeneralas(){
    nyert = false;
    sor = document.getElementById("sor").value;
    oszlop = document.getElementById("oszlop").value;
    div = document.getElementById("eredmeny");
    div.innerHTML = "";
    
    
    console.log(sor, oszlop);
    uresMatrix();
    var table = document.createElement("table");
    for (let i = 0; i < sor; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < oszlop; j++) {
            let td = document.createElement("td");
            td.setAttribute("onclick", "kattint(this)");
            td.dataset.sor=i;
            td.dataset.oszlop=j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    div.appendChild(table);
}


function Streak()
{
    var streakx = document.getElementById("elonyx");
    var streako = document.getElementById("elonyo");
    if(jelx >= jelo)
    {
        kulx = jelx - jelo;
        streakx.innerHTML= kulx;
    }
    else if(jelo >= jelx)
    {
        kulo = jelo - jelx;
        
        streako.innerHTML= kulo;
    }
}


function Nevmentes()
{
    
    var xnev = document.getElementById("nevx").value;
    var ynev = document.getElementById("nevy").value;
    var idexnev = document.getElementById("idekellx");
    var ideynev = document.getElementById("idekelly");
    idexnev.innerHTML= xnev;
    ideynev.innerHTML= ynev;
}


/* buggos szval off 
function Nyert()
{
    var nyertx = document.getElementById("nyertx");
    var nyerty = document.getElementById("nyerty");
    if(nyer1 == 1)
    {
        nyerty.innerHTML="Nyert";
        nyer1=0;
    }
    else if(nyer2 == 1)
    {
        nyertx.innerHTML="Nyert";
        nyer2 = 0;
    }
    else if(nyer1 == 0 && nyer2 == 0)
    {
        nyerty.innerHTML="-";
        nyertx.innerHTML="-";
    }

}
*/













