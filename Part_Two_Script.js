/**
 * Created by Huy Khoa Le on 2/13/2017.
 */

var urlArray = [];

function addToFavorites() {


    var url = "";

    var i = 0;
    var index = 0;
    var thisList = "";

    url = document.myForm.myUrlBox.value;

    urlArray.push(url);


    for (i = 0; i < urlArray.length; i++) {

        var thisFavorite = urlArray[i];

        var prefix ='http://';
        if (thisFavorite.substr(0, prefix.length) !== prefix)
        {
            thisList =  "<br>"+prefix + thisFavorite+thisList;
            document.getElementById("goAnchor").href = prefix + thisFavorite;
        }
        else{
            thisList = "<br>" + thisFavorite + thisList;
            document.getElementById("goAnchor").href = thisFavorite;
        }

    }
    document.getElementById("currentList").innerHTML = thisList;



}