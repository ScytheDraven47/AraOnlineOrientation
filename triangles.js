/**
 * Created by benro on 14/09/2016.
 */
/*

Create triangles using the following method:

createPolygon(
               <id of destination svg class (string)>,
               <center co-ordinates for triangle (string)>,
               <base size of triangle (int)>,
               <direction of triangle: up, down (string)>,
               <optional, css class for styling (string)>
);

eg:
createPolygon( "js-thing", "140,127", 100, "down", "js-thing-alt" );

*/
function createPolygon( id, center, base, rotation, newClass) {
    makePolygon(
        id,
        getPoints(
            calcTriangle( center, base, rotation )
        ),
        newClass
    );
}

function makePolygon( id, strPoints, newClass ) {
    var svg = document.getElementById( id );
    var polygon =  document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
    polygon.setAttribute( "points", strPoints );
    if ( newClass )
        polygon.setAttribute( "class", newClass );
    svg.appendChild(polygon);
}

function getPoints( coOrdArray ) {
    var strCoOrd = "";
    for ( var i in coOrdArray ) {
        strCoOrd += coOrdArray[i][0] + "," + coOrdArray[i][1] + " ";
    }
    return strCoOrd;
}

function calcTriangle( centerCoOrd, base, rotation ) {
    var vertices = [];
    var v0 = centerCoOrd.split(",");
    var x0 = parseInt(v0[0]), y0 = parseInt(v0[1]);

    var height = Math.sqrt(3) * (base/2);console.log(height);
    // var height = Math.sqrt( (base/2)^2 + (base)^2 );console.log(height);
    var x1 = x0, y1;
    if ( rotation == "up" ) {
        y1 = y0 + ( height/2 );
    } else if ( rotation == "down" ) {
        y1 = y0 - ( height/2 );
    }
    vertices.push([x1,y1]);

    var x2 = x0 - ( base/2 ), y2;
    if ( rotation == "up" ) {
        y2 = y0 - ( height/2 );
    } else if ( rotation == "down" ) {
        y2 = y0 + ( height/2 );
    }
    vertices.push([x2,y2]);

    var x3 = x0 + ( base/2 ), y3;
    if ( rotation == "up" ) {
        y3 = y0 - ( height/2 );
    } else if ( rotation == "down" ) {
        y3 = y0 + ( height/2 );
    }
    vertices.push([x3,y3]);

    console.log( vertices );
    return vertices;
}