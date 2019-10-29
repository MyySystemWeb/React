

var nfilme="dsfsf";

 fetch('https://filmespy.herokuapp.com/api/v1/filmes')
            .then((r) => r.json())
            .then((json) => {
               

document.write("</br>Olá " +json );
            })

            

          