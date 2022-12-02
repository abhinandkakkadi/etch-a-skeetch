

 function grid(length)
 {   document.getElementById('table').style.width = length*24 + "px";
    for(let j=0; j<length*length;j++)
    {   
        
        const box = document.createElement('div');
        box.classList = "abhi";
        document.getElementById('table').appendChild(box);

    }
}


    function promptMe()
    {   
        let length = prompt("Enter grid size");
        grid(length);
    }
    
    function stop()
    {
        location.reload();

    }
    
