




    document.getElementById("add").addEventListener('click', function() {

        var value = document.getElementById('item').value;
      
        if (value) {

            addItemTodo(value);
            document.getElementById('item').value = '';

        } 
      
      
        });


        function removeItem() {
        var item = this.parentNode.parentNode;
        var parent = item.parentNode;

        parent.removeChild(item);






        
        }


      /*   function color() {
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            var text = parent.innerText;

        


        item.classList.toggle('green-text')

        }; */

        function color(e) {
           
            console.log(this);

        };
   

    function addItemTodo(text) {

       
        var list = document.getElementById('todo');


        var item = document.createElement('li');
        item.innerText = text;


        var buttons = document.createElement('div');
        buttons.classList.add('buttons');

        var remove = document.createElement('button');
        remove.classList.add('remove');

        var complete = document.createElement('button');
        complete.classList.add('complete');

        // add click event for removing item
        remove.addEventListener('click', removeItem);

        complete.addEventListener('click', color);
       
        list.insertBefore(item, list.childNodes[0]);
        
        item.appendChild(buttons);
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        
     
    }
    
