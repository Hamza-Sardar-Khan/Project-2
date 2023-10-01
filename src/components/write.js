import { graphql, useStaticQuery } from "gatsby"

const useInternalPaths = () => {
    useStaticQuery(graphql`
    query MyQuery {
        allSitePage(
        filter: {path: {regex: "/news/"}, component: {in: "D:/securiwiser/all/newwebsite/src/template/blogTemplate.js"}}
        ) {
        nodes {
            path
            component
        }
        }
    }  
  `)

  (function () {
    var textFile = null,
      makeTextFile = function (text) {
        var data = new Blob([text], {type: 'text/plain'});
    
        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }
    
        textFile = window.URL.createObjectURL(data);
    
        return textFile;
      };
    
    
      var create = document.getElementById('create'),
        textbox = document.getElementById('textbox');
    
      create.addEventListener('click', function () {
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(textbox.value);
        link.style.display = 'block';
      }, false);
    })();


  return nodes.map(node => node.path)
}



    